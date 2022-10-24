import { faFacebook, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons"
import {
    faAdd,
    faCircleInfo,
    faImages,
    faRotate,
    faShare,
    faShareNodes,
    faTag,
    faUpload,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { PropsWithChildren, useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import Input from "../../../components/common/Input"
import Textarea from "../../../components/common/Textarea"
import ImageUploader from "../../../components/ImageUploader"
import useDebounce from "../../../hooks/useDebounce"
import AssociationApi from "../../../stores/api/AssociationApi"
import TAssociation from "../../../types/TAssociation"

export default function ManagerGeneralPage() {
    const [data, bounced, setData] = useDebounce<TAssociation | undefined>(undefined, 1000)
    const [loading, setLoading] = useState(false)
    const id = useParams()["aId"] || ""

    const handleSave = () => {
        if (!bounced) return
        setLoading(true)
        AssociationApi.update(id, bounced)
            .then()
            .finally(() => setLoading(false))
    }
    const handleLoad = () => {
        setLoading(true)
        AssociationApi.findOne(id)
            .then(setData)
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        handleLoad()
    }, [])

    useEffect(() => {
        handleSave()
    }, [bounced])

    if (!data) return <div className="">Loading</div>
    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-white rounded-md p-5">
                <div className="flex flex-row justify-end px-10">
                    <button
                        className={clsx([
                            "button",
                            " flex flex-row gap-2",
                            "justify-center items-center",
                            loading ? "text-third" : "text-gray ",
                            "text-sm ",
                        ])}
                        onClick={handleSave}
                    >
                        <FontAwesomeIcon className={loading ? "animate-spin" : ""} icon={faRotate} />
                        <span>Save</span>
                    </button>
                </div>
                <h1 className="p-5 text-xl text-center text-dark font-bold uppercase">Thiết lập chung</h1>

                <div className="p-5">
                    <div className="w-1/2">
                        <div className="p-2 font-semibold">Tên đơn vị:</div>
                        <div className="px-5">
                            <Input
                                value={data.name}
                                leftIcon={faArrowAltCircleRight}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="p-2 font-semibold">Uri:</div>
                        <div className="px-5">
                            <Input
                                value={`${data.uri}`}
                                className="text-sm"
                                leftIcon={faTag}
                                onChange={(e) => setData({ ...data, uri: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="w-3/4">
                        <div className="p-2 font-semibold">Giới thiệu</div>
                        <div className="px-5">
                            <Textarea
                                value={data.introduction}
                                rows={5}
                                onChange={(e) => setData({ ...data, introduction: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <Label icon={faShareNodes}>Mạng xã hội</Label>
                    <div className="p-5">
                        <div className="p-2 text-facebook">
                            <Input
                                value={data.social?.facebook}
                                leftIcon={faFacebook as any}
                                onChange={(e) =>
                                    setData({ ...data, social: { ...(data.social || {}), facebook: e.target.value } })
                                }
                            />
                        </div>
                        <div className="p-2 text-twitter">
                            <Input
                                value={data.social?.twitter}
                                leftIcon={faTwitter as any}
                                onChange={(e) =>
                                    setData({ ...data, social: { ...(data.social || {}), facebook: e.target.value } })
                                }
                            />
                        </div>
                        <div className="p-2 text-google">
                            <Input
                                value={data.social?.youtube}
                                leftIcon={faYoutube as any}
                                onChange={(e) =>
                                    setData({ ...data, social: { ...(data.social || {}), facebook: e.target.value } })
                                }
                            />
                        </div>
                        <div className="p-2 text-tiktok">
                            <Input
                                value={data.social?.tiktok}
                                leftIcon={faTiktok as any}
                                onChange={(e) =>
                                    setData({ ...data, social: { ...(data.social || {}), facebook: e.target.value } })
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <Label icon={faImages}>Hình ảnh</Label>
                    <div className="p-5">
                        <div className="grid grid-cols-[1fr_1fr_1fr] gap-2">
                            <div>
                                <img
                                    src="https://cdn.dribbble.com/users/725005/screenshots/6206615/media/595a28aad51102946e4a956b8c351d29.png?compress=1&resize=400x300&vertical=top"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    src="https://cdn.dribbble.com/users/725005/screenshots/6206615/media/595a28aad51102946e4a956b8c351d29.png?compress=1&resize=400x300&vertical=top"
                                    alt=""
                                />
                            </div>
                            <ImagePicker />
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <Label icon={faImages}>Logo</Label>
                    <div className="p-5">
                        <div className="grid grid-cols-[1fr_1fr_1fr] gap-2">
                            <ImagePicker className="h-40 w-40 rounded-full overflow-hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Label(props: PropsWithChildren<{ icon?: FontAwesomeIconProps["icon"] }>) {
    return (
        <h4 className="font-bold text-dark">
            {props.icon && <FontAwesomeIcon className="px-2" icon={props.icon} />}
            <span>{props.children}</span>
        </h4>
    )
}

function ImagePicker(props: { className?: string }) {
    return (
        <ImageUploader
            onCompleted={(data) => data.filename}
            className={clsx([
                "flex bg-light bg-opacity-20 justify-center items-center cursor-pointer",
                props.className,
            ])}
        >
            <label htmlFor="" className="flex flex-1 flex-row gap-2 justify-center items-center text-darkless">
                <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                <span>Upload images</span>
            </label>
        </ImageUploader>
    )
}
