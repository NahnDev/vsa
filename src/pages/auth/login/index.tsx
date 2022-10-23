import clsx from "clsx"
import moment from "moment"
import React from "react"
import { Link } from "react-router-dom"
import Input from "../../../components/common/Input"
import Greeting from "../../../utils/Greeting"

export default function LoginPage() {
    return (
        <div className={clsx(["p-5 h-full", "flex flex-col"])}>
            <div className="text-third">
                <h4 className={clsx([" font-light"])}>Hello!</h4>
                <h6 className={clsx([" font-bold text-lg uppercase"])}>{Greeting.generate()}</h6>
            </div>
            <div className={clsx(["flex flex-col flex-1", "justify-center"])}>
                <h1 className={clsx(["justify-center items-center flex py-10"])}>
                    <span className="text-third font-bold px-1">Login </span> with your account
                </h1>
                <form className="flex flex-col gap-4">
                    <Input placeholder="email@domain.com" name="email" type="email" />
                    <Input placeholder="password" name="password" type="password" />
                    <div className="flex justify-end items-center">
                        <Link to={"/auth/forget"}>
                            <p className="text-third text-sm">Forget password?</p>
                        </Link>
                    </div>
                    <button className={clsx(["bg-third p-2 mx-10", "rounded-full", "text-white font-bold"])}>
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
