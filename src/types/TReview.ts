import EApprovalStatus from "../enums/EApprovalStatus"

type TReview = {
    status: EApprovalStatus
    desc?: string
    user: string
    at: number
}

export type TCreateReviewDto = { desc: string }
export default TReview
