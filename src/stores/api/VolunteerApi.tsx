import TVolunteer from "../../types/TVolunteer"
import axiosClient from "./axios"

export default class VolunteerApi {
    static async findAll(params: { event?: string }) {
        return await axiosClient.get<any, TVolunteer[]>(`/volunteers/`, { params })
    }
}
