import TComment from "../../types/TComment"
import TPackage from "../../types/TPackage"
import TPost from "../../types/TPost"
import TResource from "../../types/TResource"
import axiosClient from "./axios"

export default class CommentApi {
    static async create(dto: { content: string; post: string }) {
        return await axiosClient.post<any, TComment>("comments/", dto)
    }

    static async findAll(filter: { post: string }) {
        return await axiosClient.get<any, TComment[]>("comments/", { params: filter })
    }

    static async findOne(id: string) {
        return await axiosClient.get<any, TComment>(`comments/${id}`)
    }

    static async updateOne(id: string, dto: Partial<Pick<TComment, "content">>) {
        return await axiosClient.patch<any, TComment>(`comments/${id}`, dto)
    }
    static async remove(id: string) {
        return await axiosClient.delete<any>(`comments/${id}`)
    }

    static async like(id: string) {
        return await axiosClient.post<any>(`comments/${id}/like`)
    }
    static async unlike(id: string) {
        return await axiosClient.delete<any>(`comments/${id}/like`)
    }
}
