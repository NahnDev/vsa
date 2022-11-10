import { time } from "console"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import UserApi from "../../stores/api/UserApi"
import TUser, { TUserRef } from "../../types/TUser"
import ResourceImage from "../image/ResourceImage"

type TUserThumbnailProps = {
    _id: string
    name?: boolean
}

export default function UserThumbnail(props: TUserThumbnailProps) {
    const [data, setData] = useState<TUser | undefined>(undefined)

    const load = async () => {
        try {
            const user = await UserApi.findOne(props._id)
            setData(user)
        } catch {}
    }
    useEffect(() => {
        load()
    }, [props._id])

    if (!data) return <></>

    return (
        <Link to={`/profiles/${data._id}`} className="flex flex-row gap-2 justify-center items-center">
            <ResourceImage _id={data.avatar} alt="" className="w-10 h-10 rounded-full border-2 border-light" />
            <div>{props.name !== false && <div className="font-semibold ">{data.name}</div>}</div>
            <div className="flex-1"></div>
        </Link>
    )
}
