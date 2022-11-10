import React from "react"
import { Route, Routes } from "react-router-dom"
import EventMainPage from "./main"
import EventManagerPage from "./manager"

export default function EventRouter() {
    return (
        <Routes>
            <Route path="/:eId/*" element={<EventMainPage />} />
            <Route path="/:eId/manager/*" element={<EventManagerPage />} />
        </Routes>
    )
}
