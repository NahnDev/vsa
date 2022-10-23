import React, { PropsWithChildren } from "react"
import OptionBar from "./components/OptionBar"
import SideNavigator from "./components/SideNavigator"

export default function AppLayout(props: PropsWithChildren<{}>) {
    return (
        <div className="">
            <SideNavigator />
            <OptionBar />
            {props.children}
        </div>
    )
}
