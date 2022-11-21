import { faCheckCircle, faClock } from "@fortawesome/free-regular-svg-icons"
import { faArrowRight, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment"
import React from "react"
import { Link } from "react-router-dom"
import MiniUserThumbnail from "../../../components/user/MiniUserThumbnail"
import EApprovalStatus from "../../../enums/EApprovalStatus"
import TApproval from "../../../types/TApproval"
import TReview from "../../../types/TReview"
import ApprovalStatus from "./ApprovalStatus"

export default function ApprovalCard(props: { data: TApproval }) {
    const _id = props.data._id
    const name = props.data.name
    const user = props.data.user
    const status = props.data.reviews[props.data.reviews.length - 1]?.status || EApprovalStatus.DRAW
    const at = moment(+props.data.at).format("HH:mm DD/MM/YYYY")

    return (
        <Link to={`./${_id}`}>
            <div className="border-[0.5px] border-light border-l-darker border-l-2 bg-white">
                <div className="p-2 px-5 flex flex-row items-center justify-center">
                    <div className="flex-[2]">
                        <h6 className="font-bold text-darker">{name}</h6>
                        <span className="text-sm text-gray flex flex-row gap-2">
                            <span>Đề nghị bởi </span>
                            <MiniUserThumbnail _id={user} />
                        </span>
                    </div>
                    <div className="flex-1">
                        <ApprovalStatus status={status}></ApprovalStatus>
                        <span className="text-sm text-gray">{at}</span>
                    </div>
                    <span className="flex-1"></span>
                    <button className="button text-third">
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </Link>
    )
}
