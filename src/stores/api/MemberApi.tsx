import TMember, { TUpdateMember } from "../../types/TMember"
import axiosClient from "./axios"

export default class MemberApi {
    // static async create(dto: TCreateRoleDto) {
    //     return await axiosClient.post<any, TMember>(`/members/`, dto)
    // }
    static async findOne(_id: string) {
        return await axiosClient.get<any, TMember>(`/members/${_id}`)
    }
    static async updateOne(_id: string, dto: TUpdateMember) {
        return await axiosClient.patch<any, TMember>(`/members/${_id}`, dto)
    }
    static async remove(_id: string) {
        return await axiosClient.delete<any, any>(`/members/${_id}`)
    }
}
