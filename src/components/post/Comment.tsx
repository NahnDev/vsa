import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import moment from "moment"
import React, { useState } from "react"
import TComment from "../../types/TComment"
import MiniUserThumbnail from "../user/MiniUserThumbnail"

type TCommentProps = {
    data: TComment
}
export default function Comment(props: TCommentProps) {
    const time = moment(props.data.at).format("HH:SS DD/MM/YYYY")
    return (
        <div className="p-2 ">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                    <MiniUserThumbnail _id={props.data.sender} />
                    <span className="text-xs text-dark"> - {time}</span>
                </div>
                <div className="flex flex-row">
                    <div className="w-2"></div>
                    <div className={clsx(["!bg-lighter text-darker rounded-md p-2", "flex flex-1"])}>
                        <div>{props.data.content}</div>
                    </div>
                    <div className="w-10">
                        {/* <button className="button px-5">
                            <div className="text-error text-xs flex flex-row gap-2 items-center">
                                <span>12</span>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
