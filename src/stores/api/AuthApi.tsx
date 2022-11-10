import TToken from "../../types/TToken"
import TUser, { TLoginDto, TRegisterDto } from "../../types/TUser"
import axiosClient from "./axios"

export default class AuthApi {
    static async login(dto: TLoginDto) {
        return await axiosClient.post<any, TToken & { user: TUser }>(`/auth/login`, dto)
    }
    static async register(dto: TRegisterDto) {
        return await axiosClient.post<any, TToken & { user: TUser }>("/auth/register", dto)
    }
}
