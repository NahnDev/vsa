import React, { useCallback, useEffect, useState } from "react"
import { useSocket } from "../../socket"
import PostApi from "../../stores/api/PostApi"
import TPost from "../../types/TPost"
import TProps from "../../types/TProps"
import PostActions from "./PostActions"
import PostComment from "./PostComment"
import PostContent from "./PostContent"
import PostHeader from "./PostHeader"

export type TPostProps = {
    _id: TPost["_id"]
}

export default function Post(props: TPostProps) {
    const [data, setData] = useState<TPost | null>(null)
    const [deleted, setDeleted] = useState(false)
    const socket = useSocket()

    const handleLoad = useCallback(async () => {
        console.log(".......")

        const post = await PostApi.findOne(props._id)
        setData(post)
    }, [setData])
    const handleDeleted = () => {
        setDeleted(true)
    }

    useEffect(() => {
        socket.on(`post/${props._id}/like`, handleLoad)
        socket.on(`post/${props._id}/deleted`, handleDeleted)
        return () => {
            socket.off(`post/${props._id}/like`, handleLoad)
            socket.off(`post/${props._id}/deleted`, handleDeleted)
        }
    }, [handleLoad])

    useEffect(() => {
        handleLoad()
    }, [])

    if (deleted) return <></>
    if (!data) return <></>
    return (
        <div className="p-2">
            <div className="p-2 bg-white rounded-md">
                <PostHeader data={data} />
                <PostContent data={data} />
                <PostActions data={data} />
                <PostComment data={data} />
            </div>
        </div>
    )
}
