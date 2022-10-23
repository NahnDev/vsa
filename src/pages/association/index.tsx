import React, { lazy } from "react"
import AssociationLayout from "./AssociationLayout"
import AssociationRouter from "./AssociationRouter"

export default function AssociationPage() {
    return (
        <AssociationLayout>
            <AssociationRouter />
        </AssociationLayout>
    )
}
