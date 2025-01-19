import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { UserRepository } from "../domain/Repository/UserRepository";
import { LogoutUserUseCase } from "../domain/UseCase/User/LogoutUser";
import { useAuthenticated } from "./AuthenticatedProvider";
import { BASE_URL } from "@/global/baseUrl";
// import { BASE_URL } from "../global/baseUrl";

type AxiosProvider = {
    children : ReactNode
}

export type AxiosContextType = {
    axiosInstance: AxiosInstance
}
 

type RetryQueueItem = {
    resolve: (value?: any) => void,
    reject: (error?: any) => void,
    config: AxiosRequestConfig;
}

export const AxiosContext = createContext<AxiosContextType | null>(null);


export const AxiosProvider = ({children}: AxiosProvider) => {

    const REFRESH_TOKEN = BASE_URL + "api/token/refresh/"
    const userRepository = new UserRepository()
    const logoutUserUseCase = new LogoutUserUseCase(userRepository)
    const { isAuthenticated, setIsAuthenticated } = useAuthenticated()

    const refreshAndRetryQueue: RetryQueueItem[] = [];

    // Flag to prevent multiple token refresh requests
    let isRefreshing = false;

    const deleteCookie = (name: string, path: string) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path};`;
    };

    const deleteSpecificCookies = () => {
        const cookiesToDelete = [
            'access_token',
            'refresh_token',
            'user',
            'user_email',
            'user_first_name',
            'user_last_name'
        ];
        const paths = [
            '/', // chemin racine
            '/Mon-compte', // exemple de chemin spécifique
        ];
       
    
        cookiesToDelete.forEach(cookie => {
            paths.forEach(path => {
                deleteCookie(cookie, path);
            });
        });
    };

    const logout = async () => {
        await logoutUserUseCase.execute(axiosInstance)
        setIsAuthenticated(false)
        deleteSpecificCookies();
        localStorage.clear()
        
    }

    const axiosInstance: AxiosInstance = axios.create({
        baseURL: BASE_URL,
        withCredentials: true
    });

    axiosInstance.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        return response;
    }, async function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        const originalRequest = error.config;
        //originalRequest.url === REFRESH_TOKEN && error.response?.status === 401
        if (error.response.data.detail === "Authentication credentials were not provided.") {
            logout()
            return Promise.reject(error);
        }
        //error.response.data.detail === "Authentication credentials were not provided."
        if (error.response.data.code === "token_not_valid" && !originalRequest._retry && originalRequest.url !== REFRESH_TOKEN) {

            if (!isRefreshing) {
                isRefreshing = true
                originalRequest._retry = true;
                try {
                    await axiosInstance.post(REFRESH_TOKEN);

                    while(refreshAndRetryQueue.length) {
                        const { config, resolve, reject } = refreshAndRetryQueue.shift()!
                        try {
                            const response = await axiosInstance.request(config)
                            resolve(response)
                        } catch(error) {
                            reject(error)
                        }
                    }
                    
                    return await axios(originalRequest);
                } catch (error: any) {
                    if (error.config.url === REFRESH_TOKEN) {
                        logout()
                    }
                    return Promise.reject(error);
                } finally {
                    isRefreshing = false;
                }
            }
            return new Promise((resolve, reject) => {
                refreshAndRetryQueue.push({config: originalRequest, resolve, reject})
            })
        }
        return Promise.reject(error.response);
    });

        //If firstname, lastname, email
        useEffect(() => {
            if (isAuthenticated) {
                localStorage.setItem('isAuthenticated', isAuthenticated.toString());
            }
        }, [isAuthenticated])


    useEffect(() => {
        if (localStorage.getItem('isAuthenticated') === "true") {
            setIsAuthenticated(true)
        }
        if (localStorage.getItem('isAuthenticated') === "false") {
            setIsAuthenticated(false)
        }
    }, [])




    const AxiosContextInterceptors = useMemo(
        () => (
            {
                axiosInstance
            }
        ),
        [axiosInstance]
    )


    return (//Wrap the components into the contexts
        //<AuthenticatedContext.Provider value={authenticatedContextValue}>
            <AxiosContext.Provider value={AxiosContextInterceptors}>
                    {children}
            </AxiosContext.Provider>
        //</AuthenticatedContext.Provider>
    );



}

export const useAxios = () => {
    const Axioscontext = useContext(AxiosContext);
    if (!Axioscontext) {
        throw new Error('useAxios must be used within an AuthProvider');
    }
    return Axioscontext
}

// export const useAuthenticated = () => {
//     const authenticatedContext = useContext(AuthenticatedContext)
//     if (!authenticatedContext) {
//         throw new Error('useAuthenticated must be used within an AuthProvider');
//     }
//     return authenticatedContext
// }