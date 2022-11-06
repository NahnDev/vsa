import React from "react"
import { Route, Routes } from "react-router-dom"
import ProfileDetailPage from "./ProfileDetailPage"

export default function ProfilePage() {
    return (
        <Routes>
            <Route path="/:uId/*" element={<ProfileDetailPage />} />
        </Routes>
    )
}
