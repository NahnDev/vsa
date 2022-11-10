import React from "react"
import { Route, Routes } from "react-router-dom"
import MEventMainPage from "./MEventMainPage"
import MEventUpdatePage from "./MEventManagerPage"

export default function MEventRouter() {
    return (
        <div className="pl-0 h-full overflow-y-auto">
            <Routes>
                <Route path="/*" element={<MEventMainPage />} />
                <Route path="/:eId/*" element={<MEventUpdatePage />} />
            </Routes>
        </div>
    )
}
