import { faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { CSSProperties, PropsWithChildren, useEffect, useRef, useState } from "react"
import ResourceApi from "../../stores/api/ResourceApi"
import TResource from "../../types/TResource"
import ResourceImage from "./ResourceImage"

export type TImageUploaderProps = {
    label?: string
    className?: string
    style?: CSSProperties
    disable?: boolean
    default?: TResource["_id"]
    onCompleted?: (data: TResource) => any
    onLoading?: (status: boolean) => any
    onReject?: (err: any) => any
}

export default function ImageUploader(props: PropsWithChildren<TImageUploaderProps>) {
    const [resource, setResource] = useState<TResource | undefined>(undefined)
    const [file, setFile] = useState<File | null>(null)
    const inpRef = useRef<HTMLInputElement>(null)

    const handleUpload = () => {
        props.onLoading && props.onLoading(true)
        if (file)
            ResourceApi.upload(file)
                .then((data) => {
                    setResource(data)
                    props.onCompleted && props.onCompleted(data)
                })
                .catch((e) => {
                    props.onReject && props.onReject(e)
                })
                .finally(() => {
                    props.onLoading && props.onLoading(false)
                })
    }
    useEffect(() => {
        if (file) handleUpload()
    }, [file])

    useEffect(() => {
        if (!props.default) return
        ResourceApi.findOne(props.default).then(setResource)
    }, [])

    const src = (process.env.REACT_APP_API_URL || "") + resource?.uri
    return (
        <div
            onClick={() => inpRef.current?.click()}
            className={clsx([
                "flex flex-1 overflow-hidden",
                props.disable ? "pointer-events-none" : "",
                props.className,
            ])}
            style={props.style}
        >
            <div className="hidden">
                <input
                    ref={inpRef}
                    type="file"
                    name="file"
                    className=""
                    onChange={(e) => setFile((e.target.files || [])[0])}
                    accept="image/png, image/gif, image/jpeg"
                />
            </div>
            {!resource ? (
                <label
                    htmlFor=""
                    className="flex flex-1 flex-row gap-2 justify-center items-center text-darkless select-none"
                >
                    <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                    <span>{props.label ?? "Upload images"}</span>
                </label>
            ) : (
                <img src={src} className={clsx(["w-full"])} />
            )}
        </div>
    )
}
