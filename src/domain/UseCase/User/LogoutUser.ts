import { AxiosInstance } from 'axios';
import { UserRepository } from "@/domain/repository/UserRepository";
import { TokenType } from '@/domain/model/Token';



export class LogoutUserUseCase {
    constructor(private userRepository: UserRepository) {
    }

    async execute(axiosInstance: AxiosInstance): Promise<TokenType> {

       const response = await this.userRepository.logoutUser(axiosInstance)

         return response
    }
}