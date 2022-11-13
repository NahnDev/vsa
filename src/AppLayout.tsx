import React, { PropsWithChildren } from "react"
import OptionBar from "./components/OptionBar"
import SideNavigator from "./components/SideNavigator"

export default function AppLayout(props: PropsWithChildren<{}>) {
    return (
        <div className="grid grid-cols-[auto_1fr] h-screen w-screen overflow-hidden">
            <div className="">
                <SideNavigator />
                <OptionBar />
            </div>
            <div className="overflow-hidden">{props.children}</div>
        </div>
    )
}
