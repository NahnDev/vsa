import clsx from "clsx"
import React from "react"
import { Link } from "react-router-dom"
import Input from "../../../components/common/Input"
import Greeting from "../../../utils/Greeting"

export default function RegisterPage() {
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
                <form className="flex flex-col gap-4">
                    <Input placeholder="Email@domain.com" name="email" type="email" />
                    <Input placeholder="Nickname" name="nickname" type="email" />
                    <Input placeholder="Password" name="password" type="password" />
                    <Input placeholder="Confirm password" name="confirm" type="password" />

                    <button className={clsx(["bg-secondary  p-2 mx-10", "rounded-full", "text-white font-bold"])}>
                        Register
                    </button>
                    <div className="flex justify-center items-center">
                        <Link to={"/auth/login"}>
                            <p className="text-third">Already have an account</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
