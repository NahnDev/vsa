import TResource from "../../types/TResource"
import axiosClient from "./axios"

export default class ResourceApi {
    static async findOne(id: string) {
        return await axiosClient.get<any, TResource>(`/resources/${id}`)
    }
    static async upload(file: File) {
        const url = "http://localhost:3000/uploadFile"
        const formData = new FormData()
        formData.append("file", file)
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        }
        return await axiosClient.post<any, TResource>("/resources/", formData, config)
    }
}
