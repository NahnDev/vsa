import { faMessage } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { useState } from "react"
import Chat from "../../components/chat"

export default function AssociationChat() {
    const [expand, setExpand] = useState(false)
    return (
        <div className="fixed bottom-0 right-5 z-10">
            {/* {!expand ? (
                <div
                    onClick={() => setExpand(true)}
                    className={clsx([
                        "mb-2  p-5 button w-15 h-15",
                        "rounded-full",
                        "bg-darker text-white",
                        "flex items-center justify-center",
                    ])}
                >
                    <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                </div>
            ) : (
                <div className={clsx(["w-[25vw]", "flex flex-col"])}>
                    <div
                        className={clsx([
                            "flex-1 overflow-hidden w-full bg-white ",
                            "rounded-t-md  border-[1px] border-light border-b-0",
                        ])}
                    >
                        <Chat onHeaderPress={() => setExpand(false)} />
                    </div>
                </div>
            )} */}
        </div>
    )
}
