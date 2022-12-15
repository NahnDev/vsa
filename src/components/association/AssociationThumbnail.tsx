import { time } from "console"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AssociationApi from "../../stores/api/AssociationApi"
import UserApi from "../../stores/api/UserApi"
import TAssociation from "../../types/TAssociation"
import TUser, { TUserRef } from "../../types/TUser"
import ResourceImage from "../image/ResourceImage"

type TAssociationThumbnailProps = {
    _id: string
}

export default function AssociationThumbnail(props: TAssociationThumbnailProps) {
    const [data, setData] = useState<TAssociation | undefined>(undefined)

    const load = async () => {
        try {
            const a = await AssociationApi.findOne(props._id)
            setData(a)
        } catch {}
    }
    useEffect(() => {
        load()
    }, [props._id])

    if (!data) return <></>

    return (
        <Link to={`/associations/${data._id}`} className="flex flex-row gap-2 justify-center items-center">
            <ResourceImage _id={data.logo} alt="" className="w-10 h-10 rounded-full border-2 border-primary " />
            <div className="flex-1">
                <div className="font-semibold ">{data.name}</div>
            </div>
        </Link>
    )
}
