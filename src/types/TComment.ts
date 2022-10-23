import TUser from "./TUser"

type TComment = {
    _id: string
    content: string
    user: TUser
    replies: TComment[]
}
export default TComment
