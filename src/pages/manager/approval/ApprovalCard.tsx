import { faCheckCircle, faClock } from "@fortawesome/free-regular-svg-icons"
import { faArrowRight, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom"

export default function ApprovalCard() {
    return (
        <Link to={"./123"}>
            <div className="border-[0.5px] border-light border-l-darker border-l-2 bg-white">
                <div className="p-2 px-5 flex flex-row items-center justify-center">
                    <div className="flex-[2]">
                        <h6 className="font-bold text-darker">Báo cáo thu hội phí tháng 10 năm 2022 </h6>
                        <span className="text-sm text-gray">Đề nghị bởi Lê Thành Nhân</span>
                    </div>
                    <div className="flex-1">
                        {Math.random() > 0.3 ? Math.random() > 0.5 ? <Draw /> : <Success /> : <Exclamation />}
                        <span className="text-sm text-gray">12:23 22/10/2020</span>
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

function Exclamation() {
    return (
        <div className="text-error flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
            <span>Gặp vấn đề</span>
        </div>
    )
}

function Success() {
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
