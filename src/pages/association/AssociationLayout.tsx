import clsx from "clsx"
import React, { PropsWithChildren } from "react"
import AssociationNavigator from "./AssociationNavigator"

export default function AssociationLayout(props: PropsWithChildren<{}>) {
    return (
        <div className={clsx(["w-full h-screen", "grid grid-cols-[auto_1fr]", "overflow-hidden", " bg-lighter"])}>
            <div className="p-5 ">
                <AssociationNavigator />
            </div>
            <div className="p-5 pl-0 overflow-y-scroll">{props.children}</div>
        </div>
    )
}
