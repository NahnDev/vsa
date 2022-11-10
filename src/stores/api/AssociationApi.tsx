import TAssociation, { TAssociationCreateDto, TAssociationUpdateDto } from "../../types/TAssociation"
import axiosClient from "./axios"

export default class AssociationApi {
    static async create(dto: TAssociationCreateDto) {
        return await axiosClient.post<any, TAssociation>(`/associations/`, dto)
    }
    static async findAll() {
        return await axiosClient.get<any, TAssociation[]>("/associations/")
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
}
