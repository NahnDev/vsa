import TEvent, { TUpdateEventDto } from "../../types/TEvent"
import TVolunteer from "../../types/TVolunteer"
import axiosClient from "./axios"

export default class EventApi {
    static async create(dto: { association: string }) {
        return await axiosClient.post<any, TEvent>("events/", dto)
    }

    static async findAll(filter: { association: string }) {
        return await axiosClient.get<any, TEvent[]>("events/", { params: filter })
    }

    static async findOne(id: string) {
        return await axiosClient.get<any, TEvent>(`events/${id}`)
    }

    static async updateOne(id: string, dto: TUpdateEventDto) {
        return await axiosClient.patch<any, TEvent>(`events/${id}`, dto)
    }
    static async remove(id: string) {
        return await axiosClient.delete<any>(`events/${id}`)
    }

    static async join(id: string) {
        return await axiosClient.post<any, TVolunteer>(`events/${id}/join`)
    }
}
