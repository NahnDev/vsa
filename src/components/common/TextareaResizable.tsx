import clsx from "clsx"
import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react"

export type TTextareaResizableProps = {
    rounded?: boolean
    onChangeText?: (t: string) => any
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export default function TextareaResizable(props: TTextareaResizableProps) {
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const [height, setHeight] = useState("auto")

    const handleResize = function () {
        if (!inputRef.current) return
        const target = inputRef.current as HTMLTextAreaElement
        setHeight(`${target.scrollHeight}px`)
    }
    useEffect(() => {
        handleResize()
    }, [])

    return (
        <textarea
            {...props}
            style={{ ...props.style, height }}
            onChange={(e) => {
                handleResize()
                props.onChange && props.onChange(e)
                props.onChangeText && props.onChangeText(e.target.value)
            }}
            className={clsx([
                " p-4 py-2 rounded-sm",
                "bg-lightest",
                "focus:outline-none resize-none",
                props.rounded && "rounded-[1em]",
                props.className,
            ])}
            ref={inputRef}
        />
    )
}
