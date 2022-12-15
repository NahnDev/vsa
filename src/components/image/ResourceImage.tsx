import clsx from "clsx"
import React, { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import ResourceApi from "../../stores/api/ResourceApi"
import TResource from "../../types/TResource"
import Loading from "../loading/Loading"
import MiniLoading from "../loading/MiniLoading"

type TImageProps = { _id?: TResource["_id"]; containerClassName?: string } & React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>

export default function ResourceImage(props: TImageProps) {
    const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading")
    const [image, setImage] = useState<TResource | undefined>(undefined)
    const src = (process.env.REACT_APP_API_URL || "") + image?.uri

    useEffect(() => {
        if (!props._id) return
        ResourceApi.findOne(props._id).then((res) => setImage(res))
    }, [props._id])

    if (!image) return <div className="" {...props}></div>
    return (
        <div className={clsx(["relative", props.containerClassName])}>
            {/* {status === "error" && <div {...props} className={clsx(["bg-gray", props.className])} />} */}
            <div
                {...props}
                className={clsx([
                    "absolute w-full h-full p-0 overflow-hidden",
                    props.className,
                    status !== "loading" && "hidden",
                ])}
            >
                <MiniLoading />
            </div>
            <img
                onLoad={() => setStatus("loaded")}
                onError={() => setStatus("error")}
                src={src}
                {...props}
                className={clsx([props.className, status === "loaded" ? "" : "opacity-0"])}
            />
        </div>
    )
}
