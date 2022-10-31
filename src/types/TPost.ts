import TUser, { TUserRef } from "./TUser"

type TPost = {
    _id: string
    content: any
    like: number
    share: number
    sender: TUserRef
    at: number
}

export default TPost
