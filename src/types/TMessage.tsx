import TUser, { TUserRef } from "./TUser"

type TMessage = {
    _id: string
    sender: TUserRef
    content: {
        text: string
    }
    at: number
}
export default TMessage
