import clsx from "clsx"
import React from "react"
import { Link } from "react-router-dom"
import Input from "../../../components/common/Input"
import Greeting from "../../../utils/Greeting"

export default function ForgetPage() {
    return (
        <div className={clsx(["p-5 h-full", "flex flex-col"])}>
            <div className="text-success">
                <h4 className={clsx([" font-light"])}></h4>
            </div>
            <div className={clsx(["flex flex-col flex-1", "justify-center"])}>
                <h1 className={clsx(["justify-center items-center flex py-10"])}>
                    <span className="text-success font-bold px-1">Reset </span> your password
                </h1>
                <form className="flex flex-col gap-5">
                    <div className="flex justify-center items-center">
                        <h6 className="text-dark">Chúng tôi sẽ gửi liên kết để bạn đặt lại mật khẩu của bạn.</h6>
                    </div>
                    <Input placeholder="Email@domain.com" name="email" type="email" />
                    <button className={clsx(["bg-success p-2 mx-10", "rounded-full", "text-white font-bold"])}>
                        Send
                    </button>
                    <div className="flex justify-center items-center">
                        <Link to={"/auth/login"}>
                            <p className="text-third">Back to login page</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
