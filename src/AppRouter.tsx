import React, { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./AppLayout"
import ManagerPage from "./pages/manager"
import AssociationRouter from "./pages/association"
import AuthRouter from "./pages/auth"
import EventPage from "./pages/event"
import ProfilePage from "./pages/profile"

export default function MainRouter() {
    return (
        <Suspense fallback={<div />}>
            <BrowserRouter>
                <AppLayout>
                    <Routes>
                        <Route path="/auth/*" element={<AuthRouter />}></Route>
                        <Route path="/events/*" element={<EventPage />}></Route>
                        <Route path="/profiles/*" element={<ProfilePage />}></Route>
                        <Route path="/associations/*" element={<AssociationRouter />}></Route>
                        <Route path="/associations/manager/*" element={<ManagerPage />}></Route>
                    </Routes>
                </AppLayout>
            </BrowserRouter>
        </Suspense>
    )
}
