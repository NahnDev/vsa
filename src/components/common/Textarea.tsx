import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"

export type TInputProps = { label?: string; leftIcon?: FontAwesomeIconProps["icon"] } & React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
>
export default function Textarea(props: TInputProps) {
    return (
        <div className="flex flex-row items-center">
            {props.leftIcon && <FontAwesomeIcon className="p-2" icon={props.leftIcon}></FontAwesomeIcon>}
            <textarea
                {...props}
                className={clsx([
                    "flex-1",
                    "rounded-[1em] p-4 py-2 ",
                    "bg-lightest",
                    "focus:outline-none resize-none",
                    props.className,
                ])}
            />
        </div>
    )
}
