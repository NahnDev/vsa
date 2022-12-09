import React, { lazy, useEffect } from "react"
import { Route, Routes, Link, useParams } from "react-router-dom"
import AccessActions from "../../stores/access/actions"
import { useAppDispatch } from "../../stores/hooks"
import AssociationDiscussionPage from "./discussion"
import AssociationEventPage from "./event"
import AssociationMemberPage from "./members"
import AssociationResourcePage from "./resource"
const AssociationHomePage = lazy(() => import("./home"))

export default function AssociationRouter() {
    return (
        <Routes>
            <Route path="/" element={<AssociationHomePage />}></Route>
            <Route path="/events/*" element={<AssociationEventPage />}></Route>
            <Route path="/picture/*" element={<AssociationResourcePage />}></Route>
            <Route path="/members/*" element={<AssociationMemberPage />}></Route>
            <Route path="/discussion/*" element={<AssociationDiscussionPage />}></Route>
        </Routes>
    )
}
