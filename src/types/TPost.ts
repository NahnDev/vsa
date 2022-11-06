import TUser, { TUserRef } from "./TUser"

type TPost = {
    _id: string
    content: string
    sender: string
    at: number
    likes: string[]
}

export default TPost
