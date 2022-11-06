import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Input from "../../../components/common/Input"
import { useAppDispatch } from "../../../stores/hooks"
import UserActions from "../../../stores/user/actions"
import Greeting from "../../../utils/Greeting"

export default function RegisterPage() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    const [dto, setDto] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [confirmPassword, setConfirmPassword] = useState(dto.password)

    const handleRegister = async () => {
        try {
            await dispatch(UserActions.register(dto))
            navigate("/profiles/me")
        } catch (e: any) {
            setError(e)
        }
    }

    useEffect(() => {
        if (dto.password !== confirmPassword) {
            setError(new Error("Password and confirm incorrect"))
        } else {
            setError(null)
        }
    }, [dto.password, confirmPassword])

    useEffect(() => {
        setError(null)
    }, [dto])

    return (
        <div className={clsx(["p-5 h-full", "flex flex-col"])}>
            <div className="text-secondary">
                <h4 className={clsx([" font-light"])}>Hello!</h4>
                <h6 className={clsx([" font-bold text-lg uppercase"])}>{Greeting.generate()}</h6>
            </div>
            <div className={clsx(["flex flex-col flex-1", "justify-center"])}>
                <h1 className={clsx(["justify-center items-center flex py-10 "])}>
                    <span className="text-secondary font-bold px-1">Register </span> an account
                </h1>
                <section className="flex flex-col gap-4">
                    <Input
                        onChangeText={(email) => setDto({ ...dto, email })}
                        placeholder="Email@domain.com"
                        name="email"
                        type="email"
                    />
                    <Input
                        onChangeText={(name) => setDto({ ...dto, name })}
                        placeholder="Nickname"
                        name="nickname"
                        type="text"
                    />
                    <Input
                        onChangeText={(password) => setDto({ ...dto, password })}
                        placeholder="Password"
                        name="password"
                        type="password"
                    />
                    <Input
                        onChangeText={setConfirmPassword}
                        placeholder="Confirm password"
                        name="confirm"
                        type="password"
                    />
                    <div
                        className={clsx([
                            "text-error flex flex-row items-center gap-2 text-sm pl-10",
                            error ? "" : "!hidden",
                        ])}
                    >
                        <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
                        <span>{error?.message}</span>
                    </div>
                    <button
                        onClick={handleRegister}
                        className={clsx(["bg-secondary  p-2 mx-10", "rounded-full", "text-white font-bold"])}
                    >
                        Register
                    </button>
                    <div className="flex justify-center items-center">
                        <Link to={"/auth/login"}>
                            <p className="text-third">Already have an account</p>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}
