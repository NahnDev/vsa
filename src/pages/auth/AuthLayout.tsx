import clsx from "clsx"
import React, { PropsWithChildren } from "react"

export default function AuthLayout(props: PropsWithChildren<{}>) {
    return (
        <div className="w-full h-screen overflow-hidden justify-center items-center flex">
            <img
                src="/assets/images/background.png"
                className={clsx(["fixed top-0 left-0 -z-50", "pointer-events-none", "w-full h-full", "opacity-50 "])}
                alt=""
            />
            <div
                className={clsx([
                    "bg-white  rounded-xl",
                    "shadow-xl",
                    "h-3/4 w-2/3",
                    "flex flex-row",
                    "overflow-hidden",
                ])}
            >
                <div className={clsx(["flex-1", "bg-lightest", "flex flex-col justify-center items-center", "p-5"])}>
                    <img src="/assets/images/logo-HSV.png" className="mix-blend-multiply overflow-hidden p-20"></img>
                    <div className={clsx(["p-5 font-bold text-third", "text-center"])}>
                        <h2 className="text-xl text-darker">HỘI SINH VIÊN TRƯỜNG ĐẠI HỌC CẦN THƠ</h2>
                        <h3 className="text-md">CAN THO UNIVERSITY UNION OF STUDENTS</h3>
                    </div>
                </div>
                <div className="w-2/5 ">{props.children}</div>
            </div>
        </div>
    )
}
