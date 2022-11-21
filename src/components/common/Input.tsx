import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"

export type TInputProps = {
    label?: string
    leftIcon?: FontAwesomeIconProps["icon"]
    onChangeText?: (t: string) => any
    inputClassName?: string
    rounded?: boolean
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function Input(props: TInputProps) {
    return (
        <div
            className={clsx([
                "flex flex-row items-center ",
                " p-2 rounded-sm",
                "bg-lightest",
                props.rounded && "rounded-full",
                props.className,
            ])}
        >
            {props.leftIcon && <FontAwesomeIcon className="px-2" icon={props.leftIcon}></FontAwesomeIcon>}
            <input
                {...props}
                onChange={(e) => {
                    props.onChange && props.onChange(e)
                    props.onChangeText && props.onChangeText(e.target.value)
                }}
                className={clsx([
                    "flex-1 bg-[transparent] border-none px-2 ",
                    "focus:outline-none",
                    props.inputClassName,
                ])}
            />
        </div>
    )
}
