import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import moment from "moment"
import React, { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import Input from "../../../components/common/Input"
import AuthApi from "../../../stores/api/AuthApi"
import { useAppDispatch } from "../../../stores/hooks"
import UserActions from "../../../stores/user/actions"
import { TLoginDto } from "../../../types/TUser"
import Greeting from "../../../utils/Greeting"

export default function LoginPage() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [dto, setDto] = useState<TLoginDto>({ email: "", password: "" })
    const [error, setError] = useState<Error | null>(null)

    const handleLogin = async () => {
        setLoading(true)
        try {
            await dispatch(UserActions.login(dto))
            navigate("/")
        } catch (e) {
            setError(e as Error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className={clsx(["p-5 h-full", "flex flex-col"])}>
            <div className="text-third">
                <h4 className={clsx([" font-light"])}>Hello!</h4>
                <h6 className={clsx([" font-bold text-lg uppercase"])}>{Greeting.generate()}</h6>
            </div>
            <div className={clsx(["flex flex-col flex-1", "justify-center", loading && "pointer-events-none"])}>
                <h1 className={clsx(["justify-center items-center flex py-10"])}>
                    <span className="text-third font-bold px-1">Login </span> with your account
                </h1>
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <Input
                        placeholder="email@domain.com"
                        value={dto.email}
                        onChange={(e) => setDto({ ...dto, email: e.target.value })}
                        name="email"
                        type="email"
                    />
                    <Input
                        placeholder="password"
                        name="password"
                        type="password"
                        value={dto.password}
                        onChange={(e) => setDto({ ...dto, password: e.target.value })}
                    />
                    <div className="text-error flex flex-row items-center gap-2 text-sm pl-10">
                        <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
                        <span>{error?.message}</span>
                    </div>
                    <div className="flex justify-end items-center">
                        <Link to={"/auth/forget"}>
                            <p className="text-third text-sm">Forget password?</p>
                        </Link>
                    </div>
                    <button
                        className={clsx(["button", "bg-third p-2 mx-10", "rounded-full", "text-white font-bold"])}
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <div className="flex justify-center items-center">
                        <Link to={"/auth/register"}>
                            <p className="text-third">Create account</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
