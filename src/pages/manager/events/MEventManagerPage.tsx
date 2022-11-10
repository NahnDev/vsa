import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import { faChevronCircleRight, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
import EventApi from "../../../stores/api/EventApi"
import PackageApi from "../../../stores/api/PackageApi"
import TEvent, { TUpdateEventDto } from "../../../types/TEvent"
import TPackage from "../../../types/TPackage"

export default function MEventUpdatePage() {
    const { eId = "" } = useParams()
    const [event, setEvent] = useState<TEvent | undefined>(undefined)
    const [loading, setLoading] = useState(false)
    const [dto, setDto] = useState<TUpdateEventDto>({})
    const handleSave = () => {}

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
                <AutoSaveButton loading={true} onClick={handleSave} />
                <main>
                    <div className="h-[20em] overflow-hidden flex">
                        <ImageUploader
                            default={dto.banner ?? event.banner}
                            className="bg-lightest h-fit min-h-full"
                            onCompleted={(data) => setDto({ ...dto, banner: data._id })}
                            label="Upload banner sự kiện (4:3)"
                        />
                    </div>
                    <div className="p-2 flex flex-row justify-center">
                        <div className="w-2/3">
                            <TextareaResizable
                                value={dto.name ?? event.name}
                                placeholder="Tên sự kiện"
                                onChangeText={(name) => setDto({ ...dto, name })}
                                className="text-xl w-full text-center text-secondary  font-bold uppercase p-2"
                            />
                        </div>
                    </div>
                    <div className="p-2 flex">
                        <TextareaResizable
                            value={dto.introduce ?? event.introduce}
                            onChangeText={(introduce) => setDto({ ...dto, introduce })}
                            placeholder="Giới thiệu ngắn về sự kiện, các hoạt động"
                            className="flex-1"
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
                    <section className="p-2">
                        <Schedule />
                    </section>
                </main>
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
    return <FileColumn package={p} />
}

function Schedule() {
    return (
        <div className=" rounded-md">
            <VerticalTimeline layout="1-column-left" lineColor={Colors.light}>
                <VerticalTimelineElement
                    iconClassName="bg-dark text-white"
                    icon={<FontAwesomeIcon icon={faCalendarAlt} />}
                >
                    <div className="p-2 m-0">
                        <h6 className="text-dark text-sm">Ngay 12/10/2022</h6>
                        <h4 className="text-third font-bold">Laapj kee hoach va trinh ban chap trinh ky duyet</h4>
                        <div className="p-2 text-sm">Tất cả thầy cô giáo, viên chức, người lao động.</div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconClassName="bg-dark text-white"
                    icon={<FontAwesomeIcon icon={faCalendarAlt} />}
                >
                    <div className="p-2 m-0">
                        <h6 className="text-dark text-sm">Ngay 12/10/2022</h6>
                        <h4 className="text-third font-bold">Laapj kee hoach va trinh ban chap trinh ky duyet</h4>
                        <div className="p-2 text-sm">
                            Tất cả thầy cô giáo, viên chức, người lao động, sinh viên chính qui tại trường, học viên cao
                            học, sinh viên học ngành hai, học viên Aptech và học sinh thuộc Trường đều được tham gia.
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement iconClassName="bg-dark text-white" icon={<FontAwesomeIcon icon={faPlus} />}>
                    <div className="p-2 m-0 flex flex-col gap-2">
                        <Input type="date" className="text-dark text-sm" value="10/12/2022" />
                        <Input
                            className="text-third font-bold"
                            value="Laapj kee hoach va trinh ban chap trinh ky duyet"
                        />
                        <TextareaResizable
                            className="p-2 text-sm flex-1"
                            value="Tất cả thầy cô giáo, viên chức, người lao động, sinh viên chính qui tại trường, học viên cao
                            học, sinh viên học ngành hai, học viên Aptech và học sinh thuộc Trường đều được tham gia."
                        />
                    </div>
                    <div className="flex flex-row justify-end items-center gap-2">
                        <button className="button p-1 px-5 text-white bg-success rounded-md">Save</button>
                        <button className="button p-1 px-5 text-white bg-primary rounded-md">Clear</button>
                    </div>
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
