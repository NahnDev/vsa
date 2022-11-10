import { faWindowMaximize, faWindowMinimize } from "@fortawesome/free-regular-svg-icons"
import { faGear, faMaximize, faMessage, faMinimize, faRemove } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"

type TChatHeaderProps = {
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function ChatHeader(props: TChatHeaderProps) {
    return (
        <div onClick={props.onClick}>
            <div className={clsx(["border-b-[1px] border-light", "bg-darker text-white", "p-2", "flex flex-row"])}>
                <div className="flex-1">Tin nhắn</div>
                <div className="button">
                    <FontAwesomeIcon icon={faRemove} />
                </div>
            </div>
        </div>
    )
}
