import TApproval, { TApprovalCreateDto, TApprovalUpdateDto } from "../../types/TApproval"
import axiosClient from "./axios"

export default class ApprovalApi {
    static async create(dto: TApprovalCreateDto) {
        return await axiosClient.post<any, TApproval>(`/approvals/`, dto)
    }
    static async findAll(params: { association?: string }) {
        return await axiosClient.get<any, TApproval[]>("/approvals/", { params })
    }
    static async findOne(id: string) {
        return await axiosClient.get<any, TApproval>(`/approvals/${id}`)
    }
    static async update(id: string, dto: TApprovalUpdateDto) {
        return await axiosClient.patch<any, TApproval>(`/approvals/${id}`, dto)
    }
    static async remove(id: string) {
        return await axiosClient.delete<any, any>(`/approvals/${id}`)
    }

    static async reject(id: string, dto: { desc?: string }) {
        return await axiosClient.post<any, any>(`/approvals/${id}/reject`, dto)
    }
    static async approved(id: string, dto: { desc?: string }) {
        return await axiosClient.post<any, any>(`/approvals/${id}/approved`, dto)
    }
    static async submit(id: string, dto: { desc?: string }) {
        return await axiosClient.post<any, any>(`/approvals/${id}/submit`, dto)
    }
}
