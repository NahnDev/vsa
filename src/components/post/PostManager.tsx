import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostApi from "../../stores/api/PostApi"
import TPost from "../../types/TPost"
import PostContent from "./PostContent"
import PostHeader from "./PostHeader"

export type TPostProps = {
    data: TPost
    onChange?: () => any
}

export default function PostManager(props: TPostProps) {
    const handleRemove = async () => {
        await PostApi.remove(props.data._id)
        props.onChange && props.onChange()
    }
    const handlePublish = async () => {
        await PostApi.publish(props.data._id)
        props.onChange && props.onChange()
    }
    return (
        <div className="p-5 bg-white rounded-md shadow-md">
            <div className="">
                <div className="flex flex-row justify-end gap-2">
                    <button className="button p-1 px-5 bg-success text-white rounded-md" onClick={handlePublish}>
                        Publish
                    </button>
                    <button className="button p-1 px-5 bg-error text-white rounded-md" onClick={handleRemove}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
                <div>
                    <PostHeader data={props.data} />
                    <PostContent data={props.data} />
                </div>
            </div>
        </div>
    )
}
