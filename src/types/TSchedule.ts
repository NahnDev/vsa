type TSchedule = {
    _id: string
    name: string
    description: string
    event: string
    at: number
}

export type TCreateScheduleDto = Pick<TSchedule, "event">
export type TUpdateScheduleDto = Partial<Pick<TSchedule, "name" | "description" | "at">>
export default TSchedule
