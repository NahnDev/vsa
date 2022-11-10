import { time } from "console"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import UserApi from "../../stores/api/UserApi"
import TUser, { TUserRef } from "../../types/TUser"
import ResourceImage from "../image/ResourceImage"

type TUserThumbnailProps = {
    _id: string
}

export default function MiniUserThumbnail(props: TUserThumbnailProps) {
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
            <ResourceImage _id={data.avatar} alt="" className="w-5 h-5 rounded-full border-2 border-light" />
            <div>
                <div className="font-semibold text-sm">{data.name}</div>
            </div>
        </Link>
    )
}
