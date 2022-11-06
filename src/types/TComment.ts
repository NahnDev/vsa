import TUser from "./TUser"

type TComment = {
    _id: string
    post: string
    content: string
    sender: string
    at: number
    likes: string[]
}
export default TComment
