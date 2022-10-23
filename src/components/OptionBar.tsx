import { faBell, faQuestionCircle, faUser } from "@fortawesome/free-regular-svg-icons"
import {
    faGear,
    faPersonRifle,
    faQuestion,
    faRing,
    faSignOut,
    faSignOutAlt,
    faUserAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Badge } from "@mui/material"
import clsx from "clsx"
import React from "react"
import { Link } from "react-router-dom"

export default function OptionBar() {
    return (
        <div
            className={clsx([
                "group",
                "fixed z-10 right-1",
                "-top-2 pt-2",
                "shadow-md",
                "bg-white rounded-md overflow-hidden",
                "flex flex-col justify-start",
            ])}
        >
            <Link to="/" className="w-14 h-14 rounded-full">
                <img src="/assets/images/banner.jpeg" alt="" className="" />
            </Link>
            <ul
                className={clsx([
                    "duration-500 opacity-80 h-0",
                    "group-hover:opacity-100  group-hover:h-80 ",
                    "overflow-hidden",
                    "flex flex-col items-center",
                    "gap-5",
                ])}
            >
                <li className="button">
                    <Link to="/profiles/me">
                        <FontAwesomeIcon className="text-lg text-dark" icon={faUserAlt} />
                    </Link>
                </li>

                <li className="button">
                    <FontAwesomeIcon className="text-lg text-dark" icon={faGear} />
                </li>

                <li className="button">
                    <Badge badgeContent={1} color="info">
                        <FontAwesomeIcon className="text-lg text-dark" icon={faBell} />
                    </Badge>
                </li>

                <li className="button">
                    <FontAwesomeIcon className="text-lg text-dark" icon={faSignOutAlt} />
                </li>
                <li className="button">
                    <FontAwesomeIcon className="text-lg text-dark" icon={faQuestionCircle} />
                </li>
            </ul>
        </div>
    )
}
