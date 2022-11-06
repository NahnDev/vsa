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
import AutoSaveButton from "../../../components/common/AutoSaveButton"
import Input from "../../../components/common/Input"
import Textarea from "../../../components/common/Textarea"
import ImageUploader, { TImageUploaderProps } from "../../../components/image/ImageUploader"
import useDebounce from "../../../hooks/useDebounce"
import AssociationApi from "../../../stores/api/AssociationApi"
import TAssociation from "../../../types/TAssociation"
import TResource from "../../../types/TResource"

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
                <AutoSaveButton onClick={handleSave} loading={loading} />
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
                            <ImagePicker
                                default={data.images[0]}
                                onCompleted={(res) => {
                                    const images = [...data.images]
                                    images[0] = res._id
                                    setData({ ...data, images })
                                }}
                            />
                            <ImagePicker
                                default={data.images[1]}
                                onCompleted={(res) => {
                                    const images = [...data.images]
                                    images[1] = res._id
                                    setData({ ...data, images })
                                }}
                            />
                            <ImagePicker
                                default={data.images[2]}
                                onCompleted={(res) => {
                                    const images = [...data.images]
                                    images[2] = res._id
                                    setData({ ...data, images })
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <Label icon={faImages}>Logo</Label>
                    <div className="p-5">
                        <div className="grid grid-cols-[1fr_1fr_1fr] gap-2">
                            <ImagePicker
                                default={data.logo}
                                onCompleted={(res) => setData({ ...data, logo: res._id })}
                                className="h-40 w-40 rounded-full overflow-hidden"
                            />
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

function ImagePicker(props: { className?: string } & Pick<TImageUploaderProps, "default" | "onCompleted">) {
    console.log({ props })

    return (
        <ImageUploader
            {...props}
            className={clsx([
                "flex bg-light bg-opacity-20 justify-center items-center cursor-pointer",
                props.className,
            ])}
        />
    )
}
