import clsx from "clsx"
import React, { PropsWithChildren } from "react"
import ManagerNavigator from "./ManagerNavigator"

export default function ManagerLayout(props: PropsWithChildren<{}>) {
    return (
        <div className={clsx(["grid grid-cols-[auto_1fr]", "w-screen h-screen", "bg-lighter"])}>
            <div className="p-5">
                <ManagerNavigator />
            </div>
            <div className="h-full overflow-hidden">{props.children}</div>
        </div>
    )
}
