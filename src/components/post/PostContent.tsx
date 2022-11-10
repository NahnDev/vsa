import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"
import TPost from "../../types/TPost"

export default function PostContent(props: { data: TPost }) {
    const [expand, setExpand] = useState(true)
    const contentRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if ((contentRef.current?.clientHeight || 0) > 200) {
            setExpand(false)
        }
    }, [props.data.content])

    return (
        <div className="p-5">
            <div
                className={clsx("overflow-hidden ql-editor", [expand ? "h-auto" : "h-[200px]"])}
                ref={contentRef}
                dangerouslySetInnerHTML={{ __html: props.data.content }}
            ></div>
            {!expand && (
                <div>
                    <button onClick={() => setExpand(true)} className="button text-sm text-darkless">
                        Xem chi tiết
                    </button>
                </div>
            )}
        </div>
    )
}
