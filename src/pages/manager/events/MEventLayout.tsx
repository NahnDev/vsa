import React, { PropsWithChildren } from "react"
import MEventNavigator from "./MEventNavigator"

export default function MEventLayout(props: PropsWithChildren<{}>) {
    return (
        <div className="p-5 pl-0 overflow-y-auto flex flex-row items-start gap-5 relative">
            <div className="p-5 bg-white rounded-md flex-[4]">{props.children}</div>
            <div className="p-5 bg-white rounded-md flex-1 sticky top-0">
                <MEventNavigator />
            </div>
        </div>
    )
}
