import clsx from "clsx"
import moment from "moment"
import React from "react"
import { Link } from "react-router-dom"
import ResourceImage from "../../../components/image/ResourceImage"
import EventApi from "../../../stores/api/EventApi"
import TEvent from "../../../types/TEvent"

type TEventPosterProps = {
    data: TEvent
}

export default function EventPoster(props: TEventPosterProps) {
    const eId = props.data._id
    const banner = props.data.banner
    const name = props.data.name
    const introduce = props.data.introduce
    const date = moment(+props.data.at).format("DD/MM/YYYY")

    return (
        <div className="group h-[30em] overflow-hidden">
            <div className={clsx(["w-full h-full rounded-md overflow-hidden", "flex flex-col", "bg-white"])}>
                <div className="w-full overflow-hidden" style={{ aspectRatio: "2/1" }}>
                    <ResourceImage _id={banner} />
                </div>
                <div className={clsx(["-mt-5 mx-auto justify-center p-2 z-10"])}>
                    <Link
                        to={`./${eId}`}
                        className={clsx(["bg-secondary ", "py-2 px-5  rounded-sm", "text-white font-semibold"])}
                    >
                        Đăng ký ngay
                    </Link>
                </div>

                <div className={clsx(["flex flex-1 flex-col p-2 overflow-hidden"])}>
                    <p className="text-third font-bold"> {date}</p>
                    <h2 className="font-bold text-xl text-secondary uppercase">{name}</h2>
                    <div className="flex-1 p-2 text-md overflow-auto hide-scrollbar ">{introduce} </div>

                    <Link to={`./${eId}`} className=" text-sm text-dark text-center group-hover:scale-105 p-2 button">
                        Xem chi tiết
                    </Link>
                </div>
            </div>
        </div>
    )
}
