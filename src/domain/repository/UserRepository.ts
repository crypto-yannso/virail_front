import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { TokenType } from "../model/Token";
import { UserContextType, UserLoginType, UserType } from "../model/user";

export class UserRepository {
    private static baseURL: string = "http://localhost:8000/api";

    /**
     * Login the user and retrieve tokens.
     * @param loginData - User's email and password.
     * @returns Promise<TokenType> containing access and refresh tokens along with user data.
     */
    async loginUser(loginData: UserLoginType): Promise<TokenType> {
        return new Promise((resolve, reject) => {
            axios
                .post(`${UserRepository.baseURL}/login/`, loginData, {
                    withCredentials: true, // If you need cookies from the server
                })
                .then((response: AxiosResponse<TokenType>) => {
                    // Store user and token in localStorage
                    this.storeUserData(response.data);
                    resolve(response.data);
                })
                .catch((error: AxiosError) => {
                    reject(
                        error.response?.data ||
                        "Une erreur est survenue lors de la connexion."
                    );
                });
        });
    }

    /**
     * Store user data and tokens in localStorage.
     * @param data - TokenType containing user info and tokens.
     */
    private storeUserData(data: TokenType): void {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
    }

    /**
     * Retrieve stored user data.
     * @returns UserType | null
     */
    getStoredUser(): UserType | null {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    }

    /**
     * Retrieve the stored access token.
     * @returns string | null
     */
    getAccessToken(): string | null {
        return localStorage.getItem("access_token");
    }

    /**
     * Logout user by clearing localStorage.
     */
    async logoutUser(axiosInstance: AxiosInstance): Promise<TokenType> {
        return new Promise((resolve, reject) => {
            axiosInstance.post(`${UserRepository.baseURL}/logout/`, {
                withCredentials: true,
            })
            .then((response: AxiosResponse) => {
                resolve(response.data);
            })
            .catch((error: AxiosError) => {
                reject(error);
            });
        });
    }
}
