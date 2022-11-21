import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons"
import {
    faArrowLeft,
    faBackspace,
    faCalendar,
    faForward,
    faHeart,
    faHeartPulse,
    faHomeAlt,
    faImage,
    faMessage,
    faUsers,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { useEffect, useState } from "react"
import { Link, LinkProps, RouteProps, useLocation, useParams, useRoutes } from "react-router-dom"
import NavLink, { TNavLinkProps } from "../../components/common/NavLink"
import ResourceImage from "../../components/image/ResourceImage"
import Image from "../../components/image/ResourceImage"
import AssociationApi from "../../stores/api/AssociationApi"
import { useUser } from "../../stores/user/hooks"
import TAssociation from "../../types/TAssociation"
import AssociationChat from "./AssociationChat"

const LINKS: TNavLinkProps[] = [
    {
        to: "./",
        icon: faHomeAlt,
        label: "Trang chủ",
        checker: /\/+$/,
    },
    {
        to: "./discussion",
        icon: faNoteSticky,
        label: "Thảo luận",
        checker: /\/discussion/,
    },
    {
        to: "./events",
        icon: faNoteSticky,
        label: "Sự kiện, hoạt động",
        checker: /\/events/,
    },
    // {
    //     to: "./picture",
    //     icon: faImage,
    //     label: "Hình ảnh, tài nguyên",
    //     checker: /\/picture$/,
    // },
    {
        to: "./members",
        icon: faUsers,
        label: "Thành viên",
        checker: /\/members/,
    },
]
export default function AssociationNavigator() {
    const handleBack = () => window.history.back()
    const { _id: uId = "" } = useUser()
    const { aId = "" } = useParams()
    const [data, setData] = useState<TAssociation | undefined>(undefined)
    const [joined, setJoined] = useState(false)

    const handleJoin = async () => {
        await AssociationApi.join(aId)
        setJoined(true)
    }
    const handleLeave = () => {}
    const handleFollow = () => {}

    useEffect(() => {
        AssociationApi.findAllMember(aId).then((members) =>
            setJoined(members.findIndex((id) => id.user === uId) !== -1)
        )
        AssociationApi.findOne(aId || "").then(setData)
    }, [aId])

    return (
        <div className="h-full w-[300px]">
            <div className={clsx(["shadow-md h-full", "rounded-md", "p-5 bg-white", "flex flex-col"])}>
                <div className="p-2">
                    <div className={clsx(["p-5 h-40 overflow-hidden", " flex justify-center items-center"])}>
                        <ResourceImage _id={data?.logo} className="h-full rounded-full" alt="" />
                    </div>
                    <div>
                        <h6 className="text-xs uppercase text-dark">@{data?.uri}</h6>
                        <h1 className="text-lg font-bold uppercase text-darker">{data?.name}</h1>
                    </div>
                    <ul className={clsx(["flex flex-row justify-end gap-2 p-2 "])}>
                        {joined ? (
                            <li>
                                <button
                                    onClick={handleJoin}
                                    className={clsx([
                                        "bg-error",
                                        "p-1 px-4",
                                        "rounded-full flex items-center justify-center",
                                        "button",
                                    ])}
                                >
                                    <span className="text-xs font-bold text-white">Leave</span>
                                </button>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <button
                                        onClick={handleJoin}
                                        className={clsx([
                                            "bg-primary",
                                            "p-1 px-4",
                                            "rounded-full flex items-center justify-center",
                                            "button",
                                        ])}
                                    >
                                        <span className="text-xs font-bold text-white">Join</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={clsx([
                                            "bg-success",
                                            "p-1 px-4",
                                            "rounded-full flex items-center justify-center",
                                            "button",
                                        ])}
                                    >
                                        <span className="text-xs font-bold text-white">Follow</span>
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                <ul className={clsx(["flex flex-col gap-2"])}>
                    {LINKS.map((props) => (
                        <NavLink {...props}></NavLink>
                    ))}
                </ul>
                <div className="flex-1"></div>
                <ul className="flex flex-row justify-around">
                    <li className="button text-dark" onClick={handleBack}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </li>
                    <li className="button text-third">
                        <FontAwesomeIcon icon={faMessage} />
                    </li>
                    <li className="button text-secondary">
                        <FontAwesomeIcon className="" icon={faHeart} />
                    </li>
                </ul>
            </div>
            <AssociationChat />
        </div>
    )
}
