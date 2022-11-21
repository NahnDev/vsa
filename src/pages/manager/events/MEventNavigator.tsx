import { faFile, faUser } from "@fortawesome/free-regular-svg-icons"
import { faDatabase, faGear } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import NavLink from "../../../components/common/NavLink"

const pages = [
    {
        to: "./",
        icon: faGear,
        label: "Thiết lập",
        checker: /\/$/,
    },
    {
        to: "./volunteers",
        icon: faUser,
        label: "Đăng ký tham gia",
        checker: /\/volunteers/,
    },
    {
        to: "./posts",
        icon: faFile,
        label: "Bài viết",
        checker: /\/posts/,
    },
    {
        to: "./resources",
        icon: faDatabase,
        label: "Tài nguyên",
        checker: /\/resources/,
    },
]

export default function MEventNavigator() {
    return (
        <div className="">
            {pages.map((props) => (
                <NavLink {...props} className="" />
            ))}
        </div>
    )
}
