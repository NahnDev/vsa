import React, { PropsWithChildren } from "react"
import { usePermissions } from "../../stores/access/hooks"
import TAccessPermissions from "../../types/TAccessPermissions"

export type TAccessProps = PropsWithChildren<{
    checker: (permission: TAccessPermissions) => boolean
}>

export default function Access(props: TAccessProps) {
    const permissions = usePermissions()

    return <>{props.checker(permissions) && props.children}</>
}

export function AccessHOC(checker: TAccessProps["checker"]) {
    return (props: any) => Access({ checker, ...props })
}
