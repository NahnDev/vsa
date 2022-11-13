import { faRotate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"

export default function AutoSaveButton(props: { loading: boolean; onClick: () => any; className?: string }) {
    return (
        <div className={clsx(["flex flex-row justify-end px-10", props.className])}>
            <button
                className={clsx([
                    "button",
                    " flex flex-row gap-2",
                    "justify-center items-center",
                    props.loading ? "text-gray" : "text-success ",
                    "text-sm ",
                ])}
                onClick={props.onClick}
            >
                <FontAwesomeIcon className={props.loading ? "animate-spin" : ""} icon={faRotate} />
                {props.loading ? <span>Đang lưu</span> : <span>Đã lưu</span>}
            </button>
        </div>
    )
}
