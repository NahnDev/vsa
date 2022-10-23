import React from "react"
import { Route, Routes } from "react-router-dom"
import ManagerDocPage from "./doc"
import ManagerEventPage from "./events"
import ManagerGeneralPage from "./general"
import ManagerMemberPage from "./member"
import ManagerUnitPage from "./unit"

export default function ManagerRouter() {
    return (
        <Routes>
            <Route path="/" element={<ManagerGeneralPage />} />
            <Route path="/units" element={<ManagerUnitPage />} />
            <Route path="/docs" element={<ManagerDocPage />} />
            <Route path="/members" element={<ManagerMemberPage />} />
            <Route path="/events" element={<ManagerEventPage />} />
        </Routes>
    )
}
