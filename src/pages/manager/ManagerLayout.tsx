import clsx from "clsx"
import React, { PropsWithChildren } from "react"
import ManagerNavigator from "./ManagerNavigator"

export default function ManagerLayout(props: PropsWithChildren<{}>) {
    return (
        <div className={clsx(["h-full w-full grid grid-cols-[auto_1fr]", "bg-lighter"])}>
            <div className="p-5">
                <ManagerNavigator />
            </div>
            <div className="h-full overflow-y-auto">{props.children}</div>
        </div>
    )
}
