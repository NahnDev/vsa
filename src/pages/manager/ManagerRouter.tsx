import React from "react"
import { Route, Routes } from "react-router-dom"
import ApprovalPage from "./approval"
import ManagerDocPage from "./doc"
import ManagerEventPage from "./events"
import FinancePage from "./finance"
import ManagerGeneralPage from "./general"
import ManagerMemberPage from "./member"
import PostPage from "./post"
import StatisticalPage from "./statistical"
import ManagerUnitPage from "./unit"

export default function ManagerRouter() {
    return (
        <Routes>
            <Route path="/*" element={<ManagerGeneralPage />} />
            <Route path="/units/*" element={<ManagerUnitPage />} />
            <Route path="/docs/*" element={<ManagerDocPage />} />
            <Route path="/members/*" element={<ManagerMemberPage />} />
            <Route path="/events/*" element={<ManagerEventPage />} />
            <Route path="/posts/*" element={<PostPage />} />
            <Route path="/statistical/*" element={<StatisticalPage />} />
            <Route path="/finance/*" element={<FinancePage />} />
            <Route path="/approval/*" element={<ApprovalPage />} />
        </Routes>
    )
}
