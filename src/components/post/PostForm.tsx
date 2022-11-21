import clsx from "clsx"
import React, { useState } from "react"
import ReactQuill, { Quill } from "react-quill"
import { useParams } from "react-router-dom"
import PostApi from "../../stores/api/PostApi"
import Editor from "../common/Editor"

type TPostFormProps = {
    onClose?: () => any
}

export default function PostForm(props: TPostFormProps) {
    const { aId = "", eId } = useParams()
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState<ReactQuill.Value | undefined>(undefined)

    const handlePublish = async () => {
        setLoading(true)
        try {
            await PostApi.create({ content: value?.toString() || "", association: aId, event: eId })
        } finally {
            setLoading(false)
            props.onClose && props.onClose()
        }
    }

    return (
        <div className="grid grid-rows-[auto_1fr] h-full border-2 border-lightest rounded-md  ">
            <div className="flex flex-row p-4 gap-2 items-center justify-center">
                <label htmlFor="" className="text-third text-sm font-bold uppercase">
                    Đăng bài viết:
                </label>
                {/* <input type="time" className="px-5 bg-white text-darker rounded-md"></input>
                <input type="date" className="px-5 bg-white text-darker rounded-md"></input> */}
                <div className="flex-1"></div>
                <button
                    onClick={handlePublish}
                    className={clsx([
                        "button rounded-full  p-2 px-5",
                        "  bg-third  text-white text-sm font-bold uppercase",
                    ])}
                >
                    Đăng bài
                </button>
            </div>
            <div className={clsx(["overflow-hidden", loading && "hidden"])}>
                <Editor value={value} onChange={setValue} />
            </div>
        </div>
    )
}
