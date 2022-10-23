import React from "react"
import { Route, Routes } from "react-router-dom"

export default function EventPage() {
    return (
        <Routes>
            <Route path="/:id" element={<div />} />
        </Routes>
    )
}
