import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons"
import { faShare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { useState } from "react"
import PostApi from "../../stores/api/PostApi"
import { useUser } from "../../stores/user/hooks"
import TPost from "../../types/TPost"

type TPostActionProps = {
    data: TPost
}
export default function PostActions(props: TPostActionProps) {
    const { _id: uId } = useUser()
    const pId = props.data._id
    const [count, setCount] = useState(props.data.likes.length)
    const [liked, setLiked] = useState(props.data.likes.some((el) => uId === el))
    const handleLikeClick = async () => {
        if (liked) {
            await PostApi.unlike(pId)
            setLiked(false)
            setCount(count - 1)
        } else {
            await PostApi.like(pId)
            setLiked(true)
            setCount(count + 1)
        }
    }

    return (
        <div className="p-2 border-t-[1px] border-b-[1px] border-light">
            <ul className="flex flex-row justify-around font-bold text-sm text-darker">
                <li>
                    <button
                        onClick={handleLikeClick}
                        className={clsx(["button flex flex-1 flex-row items-center gap-2", liked ? "text-error" : ""])}
                    >
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        <span>{count} Yêu thích</span>
                    </button>
                </li>
                <li>
                    <button className="button flex flex-1  flex-row items-center gap-2">
                        <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                        <span>Bình luận</span>
                    </button>
                </li>
                <li>
                    <button className="button flex flex-1  flex-row items-center gap-2">
                        <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
                        <span>Chia sẻ</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}
