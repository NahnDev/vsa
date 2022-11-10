import clsx from "clsx"
import React, { ChangeEvent, KeyboardEvent, useRef, useState } from "react"

export type TTextareaResizableProps = {
    onChangeText?: (t: string) => any
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export default function TextareaResizable(props: TTextareaResizableProps) {
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const [height, setHeight] = useState("auto")

    const handleChange = function (e: ChangeEvent<HTMLTextAreaElement>) {
        if (!inputRef.current) return
        const target = e.target as HTMLTextAreaElement
        setHeight(`${target.scrollHeight}px`)
    }

    return (
        <textarea
            {...props}
            style={{ ...props.style, height }}
            onChange={(e) => {
                handleChange(e)
                props.onChange && props.onChange(e)
                props.onChangeText && props.onChangeText(e.target.value)
            }}
            className={clsx([
                "rounded-[1em] p-4 py-2",
                "bg-lightest",
                "focus:outline-none resize-none",
                props.className,
            ])}
            ref={inputRef}
        />
    )
}
