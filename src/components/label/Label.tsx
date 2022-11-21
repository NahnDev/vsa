import clsx from "clsx"
import React, { PropsWithChildren } from "react"

export default function Label(
    props: PropsWithChildren<{ className?: string; value: string; labelClassName?: string }>
) {
    return (
        <div className={clsx(["relative ", props.className])}>
            {props.children}
            <span
                className={clsx([
                    "flex justify-center items-center",
                    "absolute -top-[0.5em] -right-[0.5em]",
                    "rounded-full",
                    "text-xs h-[1.5em] w-[1.5em]",
                    "bg-success text-white",
                    props.labelClassName,
                ])}
            >
                {props.value}
            </span>
        </div>
    )
}
