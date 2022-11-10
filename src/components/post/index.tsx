import React from "react"
import TPost from "../../types/TPost"
import TProps from "../../types/TProps"
import PostActions from "./PostActions"
import PostComment from "./PostComment"
import PostContent from "./PostContent"
import PostHeader from "./PostHeader"

export type TPostProps = {
    data: TPost
}

export default function Post(props: TPostProps) {
    return (
        <div className="p-2">
            <div className="p-2 bg-white rounded-md">
                <PostHeader data={props.data} />
                <PostContent data={props.data} />
                <PostActions data={props.data} />
                <PostComment data={props.data} />
            </div>
        </div>
    )
}
