import TPackage from "../../types/TPackage"
import TPost from "../../types/TPost"
import TResource from "../../types/TResource"
import TUser, { TUpdateUserDto } from "../../types/TUser"
import axiosClient from "./axios"

export default class UserApi {
    static async create(dto: { content: string; association: string; at?: number }) {
        return await axiosClient.post<any, TUser>("users/", dto)
    }

    static async findAll(filter: { association: string; wait?: boolean }) {
        return await axiosClient.get<any, TUser[]>("users/", { params: filter })
    }

    static async findOne(id: string) {
        return await axiosClient.get<any, TUser>(`users/${id}`)
    }

    static async updateOne(id: string, dto: TUpdateUserDto) {
        return await axiosClient.patch<any, TUser>(`users/${id}`, dto)
    }
    static async remove(id: string) {
        return await axiosClient.delete<any>(`users/${id}`)
    }
}
