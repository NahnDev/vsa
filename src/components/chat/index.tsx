import clsx from "clsx"
import React, { useState } from "react"
import ChatContent from "./ChatContent"
import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"

type TChatProps = {
    onHeaderPress: () => any
}
export default function Chat(props: TChatProps) {
    return (
        <div className="w-full grid grid-rows-[auto_1fr] ">
            <ChatHeader onClick={props.onHeaderPress} />
            <div className={clsx(["h-[70vh]", "overflow-hidden grid grid-rows-[1fr_auto]"])}>
                <div className={" overflow-y-auto"}>
                    <ChatContent></ChatContent>
                </div>
                <ChatInput></ChatInput>
            </div>
        </div>
    )
}
