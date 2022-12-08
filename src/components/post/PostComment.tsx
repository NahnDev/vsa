import clsx from "clsx"
import React, { useCallback, useEffect, useState } from "react"
import { useSocket } from "../../socket"
import CommentApi from "../../stores/api/CommentApi"
import TComment from "../../types/TComment"
import TPost from "../../types/TPost"
import Comment from "./Comment"
import CommentCreator from "./CommentCreator"
import PostCreator from "./PostCreator"

export default function PostComment(props: { data: TPost }) {
    const socket = useSocket()
    const [comments, setComments] = useState<TComment[]>([])

    const load = useCallback(async () => {
        try {
            const comments = await CommentApi.findAll({ post: props.data._id })
            setComments(comments)
        } catch {}
    }, [])

    const handleComment = async (content: string) => {
        if (!content) return
        try {
            const comment = await CommentApi.create({ content, post: props.data._id })
            setComments([...comments, comment])
        } catch {}
    }

    useEffect(() => {
        load()
    }, [])

    useEffect(() => {
        socket.on(`post/${props.data._id}/comment`, load)
        return () => {
            socket.off(`post/${props.data._id}/comment`, load)
        }
    }, [load])

    return (
        <div>
            <div
                className={clsx(["-mx-2 p-2 px-5 max-h-80  flex flex-col gap-2", "overflow-y-auto overflow-x-hidden"])}
            >
                {comments.map((comment) => (
                    <Comment data={comment} />
                ))}
            </div>
            <CommentCreator onSubmit={handleComment} />
        </div>
    )
}
