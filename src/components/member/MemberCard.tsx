import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import TMember from "../../types/TMember"
import UserThumbnail from "../user/UserThumbnail"
import { useDrag } from "react-dnd"

export default function MemberCard(props: { data: TMember; onDelete?: () => any }) {
    const [collected, dragRef] = useDrag(() => ({ type: "Member", item: props.data }))
    return (
        <div ref={dragRef} className="flex flex-row justify-between shadow-sm border-l-2 border-third bg-white p-2">
            <div className="flex flex-row justify-start">
                <UserThumbnail _id={props.data.user} />
            </div>
            <div className="flex flex-row ">
                <button className="button">
                    <FontAwesomeIcon className="text-sm text-error" onClick={props.onDelete} icon={faTrash} />
                </button>
            </div>
        </div>
    )
}
