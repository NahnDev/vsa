import TPackage from "../../types/TPackage"
import TPost from "../../types/TPost"
import TResource from "../../types/TResource"
import axiosClient from "./axios"

export default class PostApi {
    static async create(dto: { content: string; association: string; at?: number }) {
        return await axiosClient.post<any, TPost>("posts/", dto)
    }

    static async findAll(filter: { association: string; wait?: boolean }) {
        return await axiosClient.get<any, TPost[]>("posts/", { params: filter })
    }

    static async findOne(id: string) {
        return await axiosClient.get<any, TPost>(`posts/${id}`)
    }

    static async updateOne(id: string, dto: Partial<Pick<TPost, "content">>) {
        return await axiosClient.patch<any, TPost>(`posts/${id}`, dto)
    }
    static async remove(id: string) {
        return await axiosClient.delete<any>(`posts/${id}`)
    }

    static async like(id: string) {
        return await axiosClient.post<any>(`posts/${id}/like`)
    }
    static async unlike(id: string) {
        return await axiosClient.delete<any>(`posts/${id}/like`)
    }
}
