import { faFileText } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AutoSaveButton from "../../../components/common/AutoSaveButton"
import Input from "../../../components/common/Input"
import TextareaResizable from "../../../components/common/TextareaResizable"
import FileColumn from "../../../components/file/FileColumn"
import PackageColumn from "../../../components/file/PackageColumn"
import MiniUserThumbnail from "../../../components/user/MiniUserThumbnail"
import UserThumbnail from "../../../components/user/UserThumbnail"
import EApprovalStatus from "../../../enums/EApprovalStatus"
import useDebounce from "../../../hooks/useDebounce"
import ApprovalApi from "../../../stores/api/ApprovalApi"
import PackageApi from "../../../stores/api/PackageApi"
import TApproval, { TApprovalUpdateDto } from "../../../types/TApproval"
import TPackage from "../../../types/TPackage"
import TReview from "../../../types/TReview"
import ApprovalStatus from "./ApprovalStatus"

export default function ApprovalDetailPage() {
    const { aId = "", apId = "" } = useParams()
    const [pack, setPackage] = useState<TPackage | undefined>(undefined)
    const [approval, setApproval] = useState<TApproval | undefined>(undefined)
    const [saving, setSaving] = useState(false)
    const [value, dto, setDto] = useDebounce<TApprovalUpdateDto>({})

    const handleLoad = async () => {
        const data = await ApprovalApi.findOne(apId)
        const pack = await PackageApi.findOne(data.package)
        setPackage(pack)
        setApproval(data)
    }

    const handleSave = async () => {
        setSaving(true)
        try {
            await ApprovalApi.update(apId, dto)
        } finally {
            setSaving(false)
        }
    }

    useEffect(() => {
        handleLoad()
    }, [])

    useEffect(() => {
        handleSave()
    }, [dto])

    if (!approval || !pack) return <div></div>

    console.log({ approval })

    const status = approval.reviews[approval.reviews.length - 1]?.status || EApprovalStatus.DRAW
    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-white rounded-md min-h-full p-5">
                <AutoSaveButton loading={saving} onClick={handleSave} />
                <h1 className="p-5 text-xl text-center text-dark font-bold uppercase">{approval.name}</h1>
                <ApprovalActions status={status} onAction={() => handleLoad()}></ApprovalActions>

                <div className="p-5">
                    <div className="">
                        <h6 className=" p-2">
                            <span>Tên phê duyệt</span>
                        </h6>
                        <Input onChangeText={(name) => setDto({ ...value, name })} value={dto.name || approval.name} />
                    </div>
                    <div className="">
                        <h6 className=" p-2">
                            <span>Description</span>
                        </h6>
                        <Input onChangeText={(desc) => setDto({ ...value, desc })} value={dto.desc || approval.desc} />
                    </div>
                    <div className="">
                        <h6 className=" p-2">
                            <span>File</span>
                        </h6>

                        <FileColumn package={pack}></FileColumn>
                    </div>
                </div>
                <div className="p-5">
                    <h6 className="p-2">Reviews</h6>
                    <div className="p-5 bg-lightest">
                        {approval.reviews.map((review, key) => (
                            <Review key={key} data={review} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Review(props: { data: TReview }) {
    const time = moment(+props.data.at).format("HH:mm DD/MM/YYYY")
    return (
        <div className="p-2 px-5 m-2 border-l-2 border-dark bg-white ">
            <div className="flex flex-row justify-between gap-10">
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray">{time}</span>
                    <ApprovalStatus status={props.data.status} />
                    <span className="flex flex-row justify-start pl-5">
                        <MiniUserThumbnail _id={props.data.user} />
                    </span>
                </div>
                <h6 className="">{props.data.desc}</h6>
            </div>
        </div>
    )
}

function ApprovalActions(props: { status: TReview["status"]; onAction?: () => any }) {
    const { apId = "" } = useParams()
    const [desc, setDesc] = useState("")

    const handleSubmit = async () => {
        await ApprovalApi.submit(apId, { desc })
        setDesc("")
        props.onAction && props.onAction()
    }
    const handleReject = async () => {
        await ApprovalApi.reject(apId, { desc })
        setDesc("")
        props.onAction && props.onAction()
    }
    const handleApproved = async () => {
        await ApprovalApi.approved(apId, { desc })
        setDesc("")
        props.onAction && props.onAction()
    }

    const status = props.status
    if (status === EApprovalStatus.APPROVED) return <></>

    return (
        <div className=" rounded-md">
            <div>
                <div className="flex flex-row justify-end items-start gap-2">
                    <TextareaResizable
                        rows={1}
                        className="w-[60%]"
                        placeholder="Ghi chu"
                        onChangeText={setDesc}
                        value={desc}
                    />
                    {status === EApprovalStatus.DRAW || status === EApprovalStatus.REJECT ? (
                        <button onClick={handleSubmit} className="button p-2 px-5 bg-success text-white rounded-md ">
                            Submit
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={handleApproved}
                                className="button p-2 px-5 bg-success text-white rounded-md "
                            >
                                Approved
                            </button>
                            <button onClick={handleReject} className="button p-2 px-5 bg-error text-white rounded-md  ">
                                Reject
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
