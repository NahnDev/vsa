import TAccessPermissions from "../../types/TAccessPermissions"
import TAssociation, { TAssociationCreateDto, TAssociationUpdateDto } from "../../types/TAssociation"
import TMember from "../../types/TMember"
import axiosClient from "./axios"

export default class AssociationApi {
    static async create(dto: TAssociationCreateDto) {
        return await axiosClient.post<any, TAssociation>(`/associations/`, dto)
    }
    static async findAll(params: { manager?: string }) {
        console.log({ params })

        return await axiosClient.get<any, TAssociation[]>("/associations/", { params })
    }
    static async findOne(id: string) {
        return await axiosClient.get<any, TAssociation>(`/associations/${id}`)
    }
    static async update(id: string, dto: TAssociationUpdateDto) {
        return await axiosClient.patch<any, TAssociation>(`/associations/${id}`, dto)
    }
    static async remove(id: string) {
        return await axiosClient.delete<any, any>(`/associations/${id}`)
    }

    static async join(id: string) {
        return await axiosClient.post<any, any>(`/associations/${id}/join`)
    }

    static async leave(id: string) {
        return await axiosClient.delete<any, any>(`/associations/${id}/leave`)
    }
    static async findAllMember(id: string) {
        return await axiosClient.get<any, TMember[]>(`/associations/${id}/members`)
    }
    static async getPermissions(id: string) {
        return await axiosClient.get<any, TAccessPermissions>(`/associations/${id}/permissions`)
    }
}
