import TReview from "./TReview"

type TApproval = {
    _id: string
    name: string
    desc: string
    files: string[]
    reviews: TReview[]
    user: string
    association: string
    package: string
    block: boolean
    at: number
}
export type TApprovalCreateDto = {
    association: string
}
export type TApprovalUpdateDto = {
    name?: string
    desc?: string
    files?: string[]
}
export default TApproval
