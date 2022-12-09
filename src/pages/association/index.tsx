import React, { lazy, useEffect } from "react"
import { useParams } from "react-router-dom"
import AccessActions from "../../stores/access/actions"
import { useAppDispatch } from "../../stores/hooks"
import AssociationLayout from "./AssociationLayout"
import AssociationRouter from "./AssociationRouter"

export default function AssociationPage() {
    const dispatch = useAppDispatch()
    const { aId = "" } = useParams()
    useEffect(() => {
        console.log("aid change")
        dispatch(AccessActions.load({ association: aId }))
    }, [aId])
    return (
        <AssociationLayout>
            <AssociationRouter />
        </AssociationLayout>
    )
}
