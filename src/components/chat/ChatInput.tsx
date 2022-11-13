import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"
import Input from "../common/Input"

export default function ChatInput() {
    return (
        <div
            className={clsx([
                "flex flex-row justify-center items-center",
                " p-2 gap-2",
                "border-t-[1px] border-light bg-white",
            ])}
        >
            <div className="flex-1">
                <Input rounded className="bg-light" />
            </div>
            <div className="button">
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
            </div>
        </div>
    )
}
