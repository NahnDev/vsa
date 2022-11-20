import React from "react"
import { Routes, Route } from "react-router-dom"
import ApprovalDetailPage from "./ApprovalDetailPage"
import ApprovalHomePage from "./ApprovalHomePage"

export default function ApprovalRouter() {
    return (
        <Routes>
            <Route path="*" element={<ApprovalHomePage />}></Route>
            <Route path="/:apId*" element={<ApprovalDetailPage />}></Route>
        </Routes>
    )
}
