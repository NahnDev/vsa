import EEventStatus from "../enums/EEventStatus"

type TEvent = {
    _id: string
    association: string
    name: string
    package: string
    posts: string[]
    at: number
    banner: string
    introduce: string
    content: string
    status: EEventStatus
}
export type TUpdateEventDto = Partial<Pick<TEvent, "name" | "introduce" | "banner" | "status" | "content">>
export default TEvent
