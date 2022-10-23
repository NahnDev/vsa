import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function EventCard() {
    return (
        <div className="px-2 border-l-4 border-primary">
            <div className="bg-lightest p-2 px-5 rounded-md ">
                <div className="flex flex-row gap-20 justify-between items-center">
                    <div className="flex-1">
                        <h6 className="font-bold text-darker">Trung chu cho em 2022</h6>
                        <span className="text-sm text-dark">Tu 23/10/2022 den 12/3/2023</span>
                    </div>

                    <div>
                        <span className="text-success font-bold text-sm">Đang diễn ra</span>
                    </div>
                    <button className="button">
                        <FontAwesomeIcon className="text-third" icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}
