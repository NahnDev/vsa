import TRole, { TCreateRoleDto, TUpdateRoleDto } from "../../types/TRole"
import axiosClient from "./axios"

export default class RoleApi {
    static async create(dto: TCreateRoleDto) {
        return await axiosClient.post<any, TRole>(`/roles/`, dto)
    }
    static async findAll(params: Pick<TRole, "association">) {
        return await axiosClient.get<any, TRole[]>(`/roles/`, { params })
    }
    static async findOne(_id: string) {
        return await axiosClient.get<any, TRole>(`/roles/${_id}`)
    }
    static async updateOne(_id: string, dto: TUpdateRoleDto) {
        return await axiosClient.patch<any, TRole>(`/roles/${_id}`, dto)
    }
    static async remove(_id: string) {
        return await axiosClient.delete<any, any>(`/roles/${_id}`)
    }
}
