import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { useState } from "react"
import PostForm from "./PostForm"

export default function PostCreator() {
    const [open, setOpen] = useState(false)
    return (
        <div className="px-2">
            <div onClick={() => setOpen(true)} className="flex flex-row items-center p-2 gap-2 bg-white rounded-md">
                <div
                    className={clsx([
                        "button w-10 h-10",
                        "text-white bg-primary",
                        " rounded-md",
                        "flex items-center justify-center",
                    ])}
                >
                    <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
                </div>
                <div className="bg-lighter text-dark rounded-md p-2 px-5 flex-1">
                    <label htmlFor="">Tạo bài viết của bản</label>
                </div>
            </div>
            <div
                onClick={() => setOpen(false)}
                className={clsx([
                    open ? "flex" : "hidden",
                    "fixed  top-0 left-0 z-50",
                    " bg-dark bg-opacity-50",
                    " h-screen w-screen",
                    "flex justify-center pt-10",
                ])}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={clsx(["shadow-md shadow-light rounded-md", " h-[80vh] w-[50vw]", " bg-white"])}
                >
                    <PostForm onClose={() => setOpen(false)} />
                </div>
            </div>
        </div>
    )
}
