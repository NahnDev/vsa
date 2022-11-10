import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment"
import React from "react"
import { Link } from "react-router-dom"
import EEventStatus, { StatusDescriptions } from "../../../enums/EEventStatus"
import TEvent from "../../../types/TEvent"

type TEventCardProps = {
    data: TEvent
}

export default function EventCard(props: TEventCardProps) {
    const _id = props.data._id
    const name = props.data.name
    const time = moment(+props.data.at).format("DD MMM YYYY hh:mm a")

    return (
        <div className="px-2 border-l-4 border-primary">
            <div className="bg-lightest p-2 px-5 rounded-md ">
                <div className="flex flex-row gap-20 justify-between items-center">
                    <div className="flex-1">
                        <h6 className="font-bold text-darker">{name}</h6>
                        <span className="text-sm text-dark">{time}</span>
                    </div>
                    <div>
                        <EventStatusSelector data={props.data} onChange={() => {}} />
                    </div>
                    <Link to={`./${_id}`} className="button">
                        <FontAwesomeIcon className="text-third" icon={faArrowRight} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

function EventStatusSelector(props: { data: TEvent; onChange: (s: EEventStatus) => any }) {
    const status = props.data.status
    const description = StatusDescriptions[status]
    return (
        <div className="p-5 flex flex-row items-center justify-end">
            {status === EEventStatus.PRIVATE && (
                <div className="p-2 flex flex-row gap-5 items-center">
                    <div>
                        <span className="text-sm italic text-dark">Sự kiện {description}</span>
                    </div>
                    <button
                        onChange={() => props.onChange(EEventStatus.PUBLIC)}
                        className="button rounded-md p-1 px-5 font-bold bg-success text-white"
                    >
                        Khởi động sự kiện
                    </button>
                </div>
            )}
            {status === EEventStatus.PUBLIC && (
                <div className="p-2 flex flex-row gap-5 items-center">
                    <div>
                        <span className="text-sm italic text-dark">Sự kiện {description}</span>
                    </div>
                    <button
                        onChange={() => props.onChange(EEventStatus.BLOCK)}
                        className="button rounded-md p-1 px-5 font-bold bg-error text-white"
                    >
                        Dừng sự kiện
                    </button>
                </div>
            )}
            {status === EEventStatus.BLOCK && (
                <div className="p-2 flex flex-row gap-5 items-center">
                    <div>
                        <span className="text-sm italic text-dark">Sự kiện {description}</span>
                    </div>
                </div>
            )}
        </div>
    )
}
