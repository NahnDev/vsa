import clsx from "clsx"
import moment from "moment"
import React from "react"
import TMessage from "../../types/TMessage"

export type TMessageProps = {
    me?: boolean
    data: TMessage
}

export default function Message(props: TMessageProps) {
    const time = moment(props.data.at).format("hh:mm:ss a")
    const name = props.data.sender.name
    const avatar = props.data.sender.avatar
    return (
        <div className={clsx(["p-2", "flex", props.me ? "flex-row-reverse" : "flex-row"])}>
            <div className="">
                <div className={clsx(["rounded-xl", "mx-2 p-2 px-5", props.me ? "bg-primary" : "bg-third"])}>
                    <div className="text-white">{props.data.content.text}</div>
                </div>
                <div className={clsx(["flex", " gap-1 p-1", props.me ? " flex-row-reverse" : " flex-row"])}>
                    <img className="w-2 h-2 rounded-full overflow-hidden" src={avatar} alt="" />
                    <div className="text-sm text-darkless font-semibold">{name}</div>
                    <div className="text-sm text-darkless font-semibold"> - </div>
                    <div className="text-sm text-darkless">{time}</div>
                </div>
            </div>
            <div className="w-10"></div>
        </div>
    )
}
