import { faCheckCircle, faClock } from "@fortawesome/free-regular-svg-icons"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import EApprovalStatus from "../../../enums/EApprovalStatus"

export default function ApprovalStatus(props: { status: EApprovalStatus }) {
    switch (props.status) {
        case EApprovalStatus.APPROVED:
            return <Approved></Approved>
        case EApprovalStatus.REJECT:
            return <Reject></Reject>
        case EApprovalStatus.SUBMIT:
            return <Submit></Submit>
        default:
            return <Draw></Draw>
    }
}

function Reject() {
    return (
        <div className="text-error flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
            <span>Gặp vấn đề</span>
        </div>
    )
}

function Approved() {
    return (
        <div className="text-success flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
            <span>Đã phê duyệt</span>
        </div>
    )
}

function Draw() {
    return (
        <div className="text-gray flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
            <span>Chưa gửi để phê duyệt</span>
        </div>
    )
}

function Submit() {
    return (
        <div className="text-gray flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
            <span>Đang chờ phê duyệt</span>
        </div>
    )
}
