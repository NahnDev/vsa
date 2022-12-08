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
    const socket = useSocket()

    const handleLoad = useCallback(async () => {
        console.log(".......")

        const post = await PostApi.findOne(props._id)
        setData(post)
    }, [setData])

    useEffect(() => {
        socket.on(`post/${props._id}/like`, handleLoad)
        return () => {
            socket.off(`post/${props._id}/like`, handleLoad)
        }
    }, [handleLoad])

    useEffect(() => {
        handleLoad()
    }, [])

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
