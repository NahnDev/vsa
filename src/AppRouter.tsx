import React, { Suspense, useEffect } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import AppLayout from "./AppLayout"
import ManagerPage from "./pages/manager"
import AssociationRouter from "./pages/association"
import AuthRouter from "./pages/auth"
import EventPage from "./pages/event"
import ProfilePage from "./pages/profile"
import HomePage from "./pages/home"
import { useUser } from "./stores/user/hooks"

export default function MainRouter() {
    const { _id } = useUser()

    return (
        <Suspense fallback={<div />}>
            <BrowserRouter>
                <AppLayout>
                    <Routes>
                        <Route path="/*" element={<HomePage />}></Route>
                        <Route path="/auth/*" element={<AuthRouter />}></Route>
                        <Route path="/events/*" element={<EventPage />}></Route>
                        <Route path="/profiles/*" element={<ProfilePage />}></Route>
                        <Route path="/associations/:aId/*" element={<AssociationRouter />}></Route>
                        <Route path="/associations/:aId/manager/*" element={<ManagerPage />}></Route>
                    </Routes>
                </AppLayout>
            </BrowserRouter>
        </Suspense>
    )
}
