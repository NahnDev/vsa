import React, { useEffect, useState } from "react"
import ResourceApi from "../../stores/api/ResourceApi"
import TResource from "../../types/TResource"

type TImageProps = { _id?: TResource["_id"] } & React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>

export default function ResourceImage(props: TImageProps) {
    const [image, setImage] = useState<TResource | undefined>(undefined)
    const src = (process.env.REACT_APP_API_URL || "") + image?.uri

    useEffect(() => {
        if (!props._id) return
        ResourceApi.findOne(props._id).then((res) => setImage(res))
    }, [props._id])

    if (!image) return <div className="" {...props}></div>
    return <img src={src} {...props} />
}
