import React, { lazy, Suspense, useEffect } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import AppLayout from "./AppLayout"
import { useUser } from "./stores/user/hooks"
import Loading from "./components/loading/Loading"

const HomePage = lazy(() => import("./pages/home"))
const ProfilePage = lazy(() => import("./pages/profile"))
const EventPage = lazy(() => import("./pages/event"))
const AuthPage = lazy(() => import("./pages/auth"))
const ManagerPage = lazy(() => import("./pages/manager"))
const AssociationPage = lazy(() => import("./pages/association"))

export default function MainRouter() {
    const { _id } = useUser()
    return (
        <BrowserRouter>
            <AppLayout>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/*" element={<HomePage />}></Route>
                        <Route path="/auth/*" element={<AuthPage />}></Route>
                        <Route path="/events/*" element={<EventPage />}></Route>
                        <Route path="/profiles/*" element={<ProfilePage />}></Route>
                        <Route path="/associations/:aId/*" element={<AssociationPage />}></Route>
                        <Route path="/associations/:aId/manager/*" element={<ManagerPage />}></Route>
                    </Routes>
                </Suspense>
            </AppLayout>
        </BrowserRouter>
    )
}
