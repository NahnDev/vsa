import { faBars, faGear, faRemove, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import moment from "moment"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import PostApi from "../../stores/api/PostApi"
import TPost from "../../types/TPost"
import TUser, { TUserRef } from "../../types/TUser"
import Access from "../access/Access"
import AssociationThumbnail from "../association/AssociationThumbnail"
import UserThumbnail from "../user/UserThumbnail"

type TPostHeaderProps = {
    data: TPost
}

export default function PostHeader(props: TPostHeaderProps) {
    // const name = props.data.sender.name
    // const avatar = props.data.sender.avatar
    const time = moment(props.data.at).format("HH:SS DD/MM/YYYY")
    const hasAuthor = !!props.data.sender

    const handleDelete = async () => {
        await PostApi.remove(props.data._id)
    }
    const [toolShown, setToolShown] = useState(false)
    const handleOpenTool = () => {}
    return (
        <div className="flex flex-row gap-5 items-start p-2">
            {hasAuthor ? (
                <UserThumbnail _id={props.data.sender} sub={time}></UserThumbnail>
            ) : (
                <AssociationThumbnail _id={props.data.association} />
            )}
            {/* <div className="text-sm text-dark italic">{time}</div> */}
            <div className="flex-1"></div>
            <ul>
                <li className="relative">
                    <button className="button" onClick={() => setToolShown(!toolShown)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div
                        onBlur={() => setToolShown(false)}
                        className={clsx([
                            "absolute bg-white shadow-lg shadow-gray  rounded-md w-60 p-2 right-0",
                            toolShown ? "" : "hidden",
                        ])}
                    >
                        <Access checker={(permission) => permission.post}>
                            <button onClick={handleDelete} className="button p-1 text-error flex flex-row items-center">
                                <FontAwesomeIcon className="px-5" icon={faTrash} />
                                <span>Xoá bài đăng</span>
                            </button>
                        </Access>
                    </div>
                </li>
            </ul>
        </div>
    )
}
