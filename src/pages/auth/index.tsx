import React, { lazy } from "react"
import { Route, Routes, Link } from "react-router-dom"
import AuthLayout from "./AuthLayout"

const ForgetPage = lazy(() => import("./forget"))
const SignInPage = lazy(() => import("./login"))
const SignUpPage = lazy(() => import("./register"))

export default function AuthRouter() {
    return (
        <AuthLayout>
            <Routes>
                <Route path="/login" element={<SignInPage />}></Route>
                <Route path="/register" element={<SignUpPage />}></Route>
                <Route path="/forget" element={<ForgetPage />}></Route>
            </Routes>
        </AuthLayout>
    )
}
