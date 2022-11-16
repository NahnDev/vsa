import TPackage from "../../types/TPackage"
import TResource from "../../types/TResource"
import axiosClient from "./axios"

export default class PackageApi {
    static async create(dto: { association: string }) {
        return await axiosClient.post<any, TPackage>("packages/", dto)
    }

    static async findAll(filter: { association?: string; event?: string }) {
        return await axiosClient.get<any, TPackage[]>("packages/", { params: filter })
    }

    static async findOne(id: string) {
        return await axiosClient.get<any, TPackage>(`packages/${id}`)
    }

    static async updateOne(id: string, dto: Partial<Pick<TPackage, "name" | "color">>) {
        return await axiosClient.patch<any, TPackage>(`packages/${id}`, dto)
    }
    static async remove(id: string) {
        return await axiosClient.delete<any>(`packages/${id}`)
    }

    static async findAllFiles(id: string) {
        return await axiosClient.get<any, TResource[][]>(`packages/${id}/files`)
    }

    static async addFiles(id: string, file: File) {
        const formData = new FormData()
        formData.append("file", file)
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        }
        return await axiosClient.post<any, TResource>(`/packages/${id}/files`, formData, config)
    }
}
