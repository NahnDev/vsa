import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { useEffect, useMemo, useState } from "react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import Colors from "../../../constants/Colors"
import ReactQuill from "react-quill"
// import "react-quill/dist/quill.snow.css"
// import "react-quill/dist/quill.core.css"
import "react-quill/dist/quill.bubble.css"
import Editor from "../../../components/common/Editor"
import TEvent from "../../../types/TEvent"
import TSchedule from "../../../types/TSchedule"
import ScheduleApi from "../../../stores/api/ScheduleApi"
import moment from "moment"
import { useParams } from "react-router-dom"
import EventApi from "../../../stores/api/EventApi"
import ResourceImage from "../../../components/image/ResourceImage"
import TVolunteer from "../../../types/TVolunteer"
import VolunteerApi from "../../../stores/api/VolunteerApi"
import UserThumbnail from "../../../components/user/UserThumbnail"
import { useUser } from "../../../stores/user/hooks"

export default function EventDetailPage() {
    const { eId = "" } = useParams()

    const [event, setEvent] = useState<TEvent | undefined>(undefined)
    const handleLoad = async () => {
        if (!eId) return
        const data = await EventApi.findOne(eId)
        setEvent(data)
    }
    useEffect(() => {
        handleLoad()
    }, [eId])

    if (!event) return <></>
    return (
        <div className="w-full rounded-md">
            <div className={clsx(["flex flex-row gap-5"])}>
                <div className="flex-[2] ">
                    <div className={clsx("mx-auto bg-white p-5 rounded-md")}>
                        <Content event={event} />
                        <div className=" ">
                            <TimeLine event={event} />
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative ">
                    <div className="sticky top-0 bg-white p-5">
                        <Volunteers eId={eId} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Volunteers(props: { eId: string }) {
    const { _id: uId } = useUser()
    const [volunteers, setVolunteers] = useState<TVolunteer[]>([])

    const handleLoad = async () => {
        const data = await VolunteerApi.findAll({ event: props.eId })
        setVolunteers(data)
    }

    const handleRegister = async () => {
        const data = await EventApi.join(props.eId)
        setVolunteers([data, ...volunteers])
    }

    useEffect(() => {
        handleLoad()
    }, [props.eId])

    const isRegistered = useMemo(() => volunteers.findIndex((v) => v.user == uId) !== -1, [volunteers])

    return (
        <div className="w-full flex flex-col ">
            <button
                onClick={handleRegister}
                className={clsx([
                    "button rounded-sm",
                    "p-2  m-2",
                    isRegistered ? " bg-light text-white" : " bg-secondary text-white",
                ])}
            >
                {isRegistered ? "Đã đăng ký" : "Đăng ký tham gia"}
            </button>
            <div className="p-5 ">
                <ul className="flex flex-col gap-2">
                    {volunteers.map(({ user }) => (
                        <div className="">
                            <UserThumbnail _id={user} key={user} />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function Banner(props: { _id: string }) {
    return (
        <div className="w-full h-80 overflow-hidden rounded-md ">
            {/* <img
                className="w-full pt-[50%] -translate-y-[50%] "
                src="https://cdn.tgdd.vn/2020/08/CookRecipe/GalleryStep/dua-leo-xao-thit-ga-15.jpg"
                alt=""
            /> */}
            <ResourceImage _id={props._id} className="w-full pt-[50%] -translate-y-[50%] " />
        </div>
    )
}

function TimeLine(props: { event: TEvent }) {
    const [schedules, setSchedules] = useState<TSchedule[]>([])

    const handleLoad = async () => {
        const data = await ScheduleApi.findAll({ event: props.event._id })
        setSchedules(data)
    }
    useEffect(() => {
        handleLoad()
    }, [props.event])

    return (
        <div>
            <h4 className="p-2 font-bold text-darker">Kế hoạch hoạt động</h4>
            <VerticalTimeline layout="1-column-left" lineColor={Colors.light}>
                {schedules.map((schedule) => {
                    const time = moment(+schedule.at).format("DD/MM/YYYY")
                    return (
                        <VerticalTimelineElement
                            key={schedule._id}
                            iconClassName="bg-dark text-white"
                            icon={<FontAwesomeIcon icon={faCalendarAlt} />}
                        >
                            <div className="p-2 m-0">
                                <h6 className="text-dark text-sm">Ngày {time}</h6>
                                <h4 className="text-darker font-bold">{schedule.name}</h4>
                                <div className="p-2 text-sm">{schedule.description}</div>
                            </div>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

function Content(props: { event: TEvent }) {
    const banner = props.event.banner
    const name = props.event.name
    const introduce = props.event.introduce
    const content = props.event.content

    return (
        <div className="p-2 duration-200">
            <div className="pb-10">
                <Banner _id={banner} />
            </div>
            <div className="p-2 flex flex-row justify-center">
                <span className="text-xl w-full text-center text-secondary  font-bold p-2  rounded-sm">{name}</span>
            </div>
            <div className="p-5 flex bg-lighter rounded-sm">
                <span className="flex-1 rounded-sm">{introduce}</span>
            </div>
            <div className="p-2 flex">
                <div className="ql-editor" dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
            <div></div>
        </div>
    )
}
