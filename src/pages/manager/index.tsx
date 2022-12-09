import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import AccessActions from "../../stores/access/actions"
import { useAppDispatch } from "../../stores/hooks"
import ManagerLayout from "./ManagerLayout"
import ManagerRouter from "./ManagerRouter"

export default function ManagerPage() {
    const dispatch = useAppDispatch()
    const { aId = "" } = useParams()
    useEffect(() => {
        console.log("aid change")

        dispatch(AccessActions.load({ association: aId }))
    }, [aId])
    return (
        <ManagerLayout>
            <ManagerRouter />
        </ManagerLayout>
    )
}
