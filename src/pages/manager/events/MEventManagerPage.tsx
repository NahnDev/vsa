import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import {
    faChevronCircleRight,
    faPlugCircleBolt,
    faPlus,
    faPlusCircle,
    faTrash,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { debounce } from "@mui/material"
import moment from "moment"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import AutoSaveButton from "../../../components/common/AutoSaveButton"
import Input from "../../../components/common/Input"
import TextareaResizable from "../../../components/common/TextareaResizable"
import FileColumn from "../../../components/file/FileColumn"
import ImageUploader from "../../../components/image/ImageUploader"
import Colors from "../../../constants/Colors"
import EEventStatus, { StatusDescriptions } from "../../../enums/EEventStatus"
import useDebounce from "../../../hooks/useDebounce"
import EventApi from "../../../stores/api/EventApi"
import PackageApi from "../../../stores/api/PackageApi"
import ScheduleApi from "../../../stores/api/ScheduleApi"
import TEvent, { TUpdateEventDto } from "../../../types/TEvent"
import TPackage from "../../../types/TPackage"
import TSchedule, { TUpdateScheduleDto } from "../../../types/TSchedule"

export default function MEventUpdatePage() {
    const { eId = "" } = useParams()
    const [loading, setLoading] = useState(false)
    const [event, setEvent] = useState<TEvent | undefined>(undefined)
    const [dto, debounce, setDto] = useDebounce<TUpdateEventDto>({})

    const handleSave = () => {
        setLoading(true)
        EventApi.updateOne(eId, debounce).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        handleSave()
    }, [debounce])

    const load = async () => {
        try {
            const data = await EventApi.findOne(eId)
            setEvent(data)
        } catch {}
    }

    useEffect(() => {
        load()
    }, [eId])

    if (!event) return <div className="">Loading</div>
    return (
        <div className="p-5 pl-0 overflow-y-auto">
            <div className="p-5 bg-white rounded-md">
                <div>
                    <AutoSaveButton loading={loading} onClick={handleSave} />
                    <article className="mx-auto w-[40em] ">
                        <div className="p-2 h-[20em] overflow-hidden">
                            <ImageUploader
                                default={dto.banner ?? event.banner}
                                className="bg-lightest h-fit min-h-full"
                                onCompleted={(data) => setDto({ ...dto, banner: data._id })}
                                label="Upload banner sự kiện (4:3)"
                            />
                        </div>
                        <div className="p-2 flex flex-row justify-center">
                            <div className="w-full">
                                <TextareaResizable
                                    value={dto.name ?? event.name}
                                    placeholder="Tên sự kiện"
                                    onChangeText={(name) => setDto({ ...dto, name })}
                                    className="text-xl w-full text-center text-secondary  font-bold p-2  rounded-sm"
                                />
                            </div>
                        </div>
                        <div className="p-2 flex">
                            <TextareaResizable
                                value={dto.introduce ?? event.introduce}
                                onChangeText={(introduce) => setDto({ ...dto, introduce })}
                                placeholder="Giới thiệu ngắn về sự kiện, các hoạt động"
                                className="flex-1 rounded-sm"
                            />
                        </div>
                        <section className="p-2">
                            <EventPackage package={event.package} />
                        </section>
                        <section className="p-2  w-full">
                            <div className="p-5 flex flex-row gap-5 bg-lightest rounded-md">
                                <span className="font-bold">4 post</span>
                                <span className="flex-1"></span>
                                <div className="button text-third">
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                <div className="button text-darker">
                                    <FontAwesomeIcon icon={faChevronCircleRight} />
                                </div>
                            </div>
                        </section>
                        <section className="p-2 py-5 flex-1">
                            <h4 className="p-2 font-bold">Lịch trình, kế hoạch sự kiện:</h4>
                            <ScheduleEditor event={eId} />
                        </section>
                    </article>
                </div>
            </div>
        </div>
    )
}

function EventPackage(props: { package: TPackage["_id"] }) {
    const [p, setP] = useState<TPackage | undefined>(undefined)

    const load = async () => {
        try {
            const data = await PackageApi.findOne(props.package)
            setP(data)
        } catch {}
    }
    useEffect(() => {
        load()
    }, [props.package])

    return <FileColumn package={p} />
}

function ScheduleCreatorButton(props: { onClick: () => any }) {
    return (
        <div className="px-10">
            <div className="button" onClick={props.onClick}>
                <div className="flex flex-1 justify-center items-center p-2 border-[2px] rounded-md border-dashed border-dark  text-dark">
                    <div className="flex flex-row gap-2">
                        <FontAwesomeIcon icon={faPlusCircle} />
                        <span>Thêm lịch trình mới</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ScheduleForm(props: { data: TSchedule; onDelete?: () => any }) {
    const [loading, setLoading] = useState(false)
    const [value, debounce, setValue] = useDebounce(props.data as TUpdateScheduleDto)

    const handleDelete = () => {
        ScheduleApi.remove(props.data._id)
        props.onDelete && props.onDelete()
    }
    const handleSave = () => {
        setLoading(true)
        ScheduleApi.updateOne(props.data._id, value)
            .then()
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        handleSave()
    }, [debounce])

    return (
        <div className="p-2 m-0 flex flex-col gap-1">
            <Input
                type="date"
                className="text-dark text-sm"
                value={moment(+(value.at || 0)).format("YYYY-MM-DD")}
                onChangeText={(date) => {
                    setValue({ ...value, at: moment(date, "YYYY-MM-DD").valueOf() })
                }}
            />
            <TextareaResizable
                className="text-third font-bold"
                value={value.name}
                onChangeText={(name) => setValue({ ...value, name })}
            />
            <TextareaResizable
                className="p-2 text-sm"
                value={value.description}
                onChangeText={(description) => setValue({ ...value, description })}
            />
            <div className="p-2 flex flex-row justify-end">
                <AutoSaveButton onClick={handleSave} loading={loading} />
                <button className="button" onClick={handleDelete}>
                    <div className="flex flex-row justify-center items-center button text-sm gap-2 text-error">
                        <FontAwesomeIcon icon={faTrash} />
                        <span>Xóa</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

function ScheduleEditor(props: { event: TEvent["_id"] }) {
    const [schedules, setSchedules] = useState<TSchedule[]>([])
    const handleCreate = () => {
        ScheduleApi.create({ event: props.event })
            .then()
            .finally(() => {
                handleLoad()
            })
    }

    const handleLoad = () => {
        ScheduleApi.findAll({ event: props.event })
            .then((schedules) => setSchedules(schedules))
            .finally()
    }

    useEffect(() => {
        handleLoad()
    }, [props.event])

    return (
        <div className="rounded-md bg-lightest">
            <VerticalTimeline layout="1-column-left" lineColor={Colors.light}>
                {schedules.map((schedule) => (
                    <VerticalTimelineElement
                        iconClassName="bg-dark text-white"
                        icon={<FontAwesomeIcon icon={faCalendarAlt} />}
                    >
                        <ScheduleForm data={schedule} key={schedule._id} onDelete={handleLoad} />
                    </VerticalTimelineElement>
                ))}

                <VerticalTimelineElement iconClassName="bg-dark text-white" icon={<FontAwesomeIcon icon={faPlus} />}>
                    <ScheduleCreatorButton onClick={handleCreate} />
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

const post = {
    _id: "6365d5d41ba29bcb1d8559c6",
    content:
        '<h1>Futoku no Girudo</h1><h2>Futoku no Guild, Immoral Guild, Guild of Depravity</h2><p class="ql-align-center"><img src="http://cdn.animevietsub.cc/data/poster/2022/10/05/animevsub-kygLpWaV2T.jpg"></p><p>Câu chuyện kể về người thợ săn lành nghề Kikuru Madan, người đã quyết định nghỉ hưu vì sợ lãng phí tuổi trẻ của mình. Một ngày nọ, nhân viên của hiệp hội đã gợi ý rằng anh ta nên thực hiện một nhiệm vụ cùng nữ võ sĩ tên là Hitamu Kyan. Tuy nhiên, cô ấy liên tục bị đánh bởi quái vật này đến quái vật khác.</p>',
    association: "6365d3f81ba29bcb1d8558eb",
    sender: "6365be22a91efbe2e50ff8a7",
    likes: [],
    comments: [],
    at: 1667618260641,
    __v: 0,
}
const p = {
    _id: "6367e69f41b8bb6a1d6593be",
    color: "#ff8a8a",
    name: "New package",
    association: "6365d3f81ba29bcb1d8558eb",
    files: [],
    at: 1667753631658,
}
