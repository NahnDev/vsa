import { faBars, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment"
import React from "react"
import { Link } from "react-router-dom"
import TPost from "../../types/TPost"
import TUser, { TUserRef } from "../../types/TUser"
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
    return (
        <div className="flex flex-row gap-5 items-start p-2">
            {hasAuthor ? (
                <UserThumbnail _id={props.data.sender}></UserThumbnail>
            ) : (
                <AssociationThumbnail _id={props.data.association} />
            )}
            <div className="text-sm text-dark italic">{time}</div>
            <div className="flex-1"></div>
            <ul>
                <li>
                    <button className="button">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </li>
            </ul>
        </div>
    )
}
