import TSchedule, { TCreateScheduleDto, TUpdateScheduleDto } from "../../types/TSchedule"
import axiosClient from "./axios"

export default class ScheduleApi {
    static async create(dto: TCreateScheduleDto) {
        return await axiosClient.post<any, TSchedule>(`/schedules/`, dto)
    }
    static async findAll(filter: Pick<TSchedule, "event">) {
        return await axiosClient.get<any, TSchedule[]>(`/schedules?event=${filter.event}`)
    }
    static async findOne(_id: string) {
        return await axiosClient.get<any, TSchedule>(`/schedules/${_id}`)
    }
    static async updateOne(_id: string, dto: TUpdateScheduleDto) {
        return await axiosClient.patch<any, TSchedule>(`/schedules/${_id}`, dto)
    }
    static async remove(_id: string) {
        return await axiosClient.delete<any, any>(`/schedules/${_id}`)
    }
}
