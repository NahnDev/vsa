import { faBell, faQuestionCircle, faUser } from "@fortawesome/free-regular-svg-icons"
import {
    faArrowCircleDown,
    faArrowTurnUp,
    faBars,
    faBarsProgress,
    faChevronCircleDown,
    faChevronCircleUp,
    faClose,
    faGear,
    faPersonRifle,
    faQuestion,
    faRing,
    faSignInAlt,
    faSignOut,
    faSignOutAlt,
    faUserAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Badge } from "@mui/material"
import clsx from "clsx"
import React from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../stores/hooks"
import UserActions from "../stores/user/actions"
import { useUser } from "../stores/user/hooks"
import Image from "./common/Image"
import ResourceImage from "./image/ResourceImage"
import MiniUserThumbnail from "./user/MiniUserThumbnail"

export default function OptionBar() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { avatar, _id: uId } = useUser()
    const logged = !!uId

    const handleLogin = () => {
        navigate("/auth/login")
    }
    const handleLogout = () => {
        dispatch(UserActions.logout())
        handleLogin()
    }

    return (
        <div
            className={clsx([
                "h-full",
                "group",
                // "fixed z-10 right-1",
                // "-top-2 pt-2",
                // "shadow-md",
                // "bg-white rounded-md overflow-hidden",
                "flex flex-col",
                "py-5",
            ])}
        >
            <ul
                className={clsx([
                    // "duration-500 opacity-80 h-0",
                    // "group-hover:opacity-100  group-hover:h-80 group-hover:py-5",
                    // "overflow-hidden",
                    "flex flex-col items-center",
                    "gap-5",
                ])}
            >
                {logged ? (
                    <>
                        <li>
                            <Link to="/profiles/me" className="w-full h-full flex items-center justify-center button">
                                <ResourceImage
                                    _id={avatar}
                                    className={clsx(["border-2 border-primary rounded-full ", "w-10 h-10"])}
                                />
                            </Link>
                        </li>

                        <li className="button">
                            <Badge badgeContent={1} color="info">
                                <FontAwesomeIcon className="text-lg text-dark" icon={faBell} />
                            </Badge>
                        </li>

                        <li onClick={handleLogout} className="button">
                            <FontAwesomeIcon className="text-lg text-dark" icon={faSignOutAlt} />
                        </li>
                        <li className="button">
                            <FontAwesomeIcon className="text-lg text-dark" icon={faGear} />
                        </li>
                    </>
                ) : (
                    <>
                        <li onClick={handleLogin} className="button">
                            <FontAwesomeIcon className="text-lg text-dark" icon={faSignInAlt} />
                        </li>
                    </>
                )}
                <li className="button">
                    <FontAwesomeIcon className="text-lg text-dark" icon={faQuestionCircle} />
                </li>
            </ul>
            <div className={clsx(["w-14 h-14", " rounded-full overflow-hidden", "flex items-center justify-center"])}>
                {/* <FontAwesomeIcon
                    className="overflow-hidden text-xl text-primary group-hover:h-0 duration-500"
                    icon={faBarsProgress}
                />
                <FontAwesomeIcon
                    className="overflow-hidden text-xl text-primary h-0 group-hover:h-[1em] duration-500"
                    icon={faChevronCircleUp}
                /> */}
            </div>
        </div>
    )
}
