import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import EEventStatus, { StatusDescriptions } from "../../../enums/EEventStatus"
import EventApi from "../../../stores/api/EventApi"
import TEvent from "../../../types/TEvent"

type TEventCardProps = {
    data: TEvent
}

export default function EventCard(props: TEventCardProps) {
    const _id = props.data._id
    const name = props.data.name
    const time = moment(+props.data.at).format("DD/MM/YYYY hh:mm a")

    return (
        <div className="px-2 border-l-4 border-primary">
            <div className="bg-lightest p-2  rounded-md ">
                <div className="flex flex-row gap-2 justify-between items-center">
                    <div className="flex-1">
                        <h6 className="font-bold text-darker">{name}</h6>
                        <span className="text-sm text-dark">{time}</span>
                    </div>
                    <div>
                        <EventStatus data={props.data} />
                    </div>
                    <Link to={`./${_id}`} className="button px-5">
                        <FontAwesomeIcon className="text-third" icon={faArrowRight} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

function EventStatus(props: { data: TEvent }) {
    const id = props.data._id
    const [status, setStatus] = useState<EEventStatus>(props.data.status)
    const description = StatusDescriptions[status]

    const handlePublish = async () => {
        await EventApi.publish(id)
        setStatus(EEventStatus.PUBLIC)
    }
    const handleUnPublish = async () => {
        await EventApi.unpublish(id)
        setStatus(EEventStatus.BLOCK)
    }

    return (
        <div className="p-2 flex flex-col items-center justify-end">
            {status === EEventStatus.PRIVATE && (
                <div className="p-2 flex flex-col  items-center justify-center">
                    <div>
                        <span className="text-sm italic text-dark">Sự kiện {description}</span>
                    </div>
                    <button
                        onClick={handlePublish}
                        className="button rounded-md p-1 px-5 font-bold bg-success text-white"
                    >
                        Khởi động sự kiện
                    </button>
                </div>
            )}
            {status === EEventStatus.PUBLIC && (
                <div className="p-2 flex flex-col items-center justify-center">
                    <div>
                        <span className="text-sm italic text-dark">Sự kiện {description}</span>
                    </div>
                    <button
                        onClick={handleUnPublish}
                        className="button rounded-md p-1 px-5 font-bold bg-error text-white"
                    >
                        Dừng sự kiện
                    </button>
                </div>
            )}
            {status === EEventStatus.BLOCK && (
                <div className="p-2 flex flex-col  items-center justify-center">
                    <div>
                        <span className="text-sm italic text-dark">Sự kiện {description}</span>
                    </div>
                </div>
            )}
        </div>
    )
}
