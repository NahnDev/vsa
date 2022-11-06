import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"

export type TInputProps = {
    label?: string
    leftIcon?: FontAwesomeIconProps["icon"]
    onChangeText?: (t: string) => any
    inputClassName?: string
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
export default function Textarea(props: TInputProps) {
    return (
        <div className={clsx(["flex flex-row items-center", props.className])}>
            {props.leftIcon && <FontAwesomeIcon className="p-2" icon={props.leftIcon}></FontAwesomeIcon>}
            <textarea
                {...props}
                onChange={(e) => {
                    props.onChange && props.onChange(e)
                    props.onChangeText && props.onChangeText(e.target.value)
                }}
                className={clsx([
                    "flex-1",
                    "rounded-[1em] p-4 py-2 ",
                    "bg-lightest",
                    "focus:outline-none resize-none",
                    props.inputClassName,
                ])}
            />
        </div>
    )
}
