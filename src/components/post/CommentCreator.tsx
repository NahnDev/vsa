import { faCommentAlt, faHand } from "@fortawesome/free-regular-svg-icons"
import {
    faChevronCircleUp,
    faCodeCommit,
    faCommentSlash,
    faFighterJet,
    faPaperPlane,
    faPlaneArrival,
    faTextHeight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { KeyboardEventHandler, useState } from "react"
import { useUser } from "../../stores/user/hooks"
import Input from "../common/Input"
import UserThumbnail from "../user/UserThumbnail"

type TCommentCreatorProps = {
    onSubmit: (value: string) => any
}

export default function CommentCreator(props: TCommentCreatorProps) {
    const [value, setValue] = useState("")

    const handleSubmit = () => {
        const content = value
        setValue("")
        props.onSubmit(content)
    }
    const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key.toUpperCase() === "ENTER") {
            handleSubmit()
        }
    }
    return (
        <div className="p-2 border-t-[1px] border-light">
            <div className="flex flex-row items-center ">
                <Input
                    onKeyDown={handleKeydown}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="flex-1 !bg-lighter"
                />
                <button onClick={handleSubmit} className="button   p-2  rounded-full">
                    <FontAwesomeIcon icon={faHand as any} />
                </button>
            </div>
        </div>
    )
}
