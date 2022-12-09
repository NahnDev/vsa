import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faChartBar, faCheckCircle, faNoteSticky } from "@fortawesome/free-regular-svg-icons"
import {
    faArrowLeft,
    faBackspace,
    faCalendar,
    faFileText,
    faForward,
    faHeart,
    faHeartPulse,
    faHomeAlt,
    faImage,
    faMessage,
    faUserGraduate,
    faUsers,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"
import { Link, LinkProps, RouteProps, useLocation, useRoutes } from "react-router-dom"
import Access, { TAccessProps } from "../../components/access/Access"
import NavLink, { TNavLinkProps } from "../../components/common/NavLink"
import AssociationSelector from "./components/AssociationSelector"

const LINKS: (TNavLinkProps & { access: TAccessProps["checker"] })[] = [
    {
        access: (p) => p.general || p.manager?.unit,
        to: "./",
        icon: faHomeAlt,
        label: "Thiết lập chung",
        checker: /\/manager\/?$/,
    },
    {
        access: (p) => p.unit,
        to: "./units",
        icon: faNoteSticky,
        label: "Đơn vị",
        checker: /\/manager\/units/,
    },
    {
        access: (p) => p.event,
        to: "./events",
        icon: faNoteSticky,
        label: "Sự kiện, hoạt động",
        checker: /\/manager\/events/,
    },
    {
        access: (p) => p.doc,
        to: "./docs",
        icon: faImage,
        label: "Tài liệu",
        checker: /\/manager\/docs/,
    },
    {
        access: (p) => p.member || p.manager?.unit,
        to: "./members",
        icon: faUsers,
        label: "Thành viên",
        checker: /\/manager\/members/,
    },
    {
        access: (p) => p.post,
        to: "./posts",
        icon: faFileText,
        label: "Bài viết",
        checker: /\/manager\/posts/,
    },
    // {
    //     to: "./finance",
    //     icon: faChartBar,
    //     label: "Kinh phí",
    //     checker: /\/manager\/finance/,
    // },
    {
        access: (p) => p.approval || p.manager?.unit,
        to: "./approval",
        icon: faCheckCircle,
        label: "Phê duyệt",
        checker: /\/manager\/approval/,
    },
]
export default function ManagerNavigator() {
    const handleBack = () => window.history.back()

    return (
        <div className="h-full w-[300px]">
            <div className={clsx(["shadow-md h-full", "rounded-md", "p-5 bg-white", "flex flex-col"])}>
                <span className="flex flex-row items-center justify-center p-2 gap-2">
                    <img className="w-5 h-5" src="/assets/images/logo.png" />
                    <h4 className="bold italic text-third">VSA Admin System</h4>
                </span>
                <div className="pb-4">{/* <AssociationSelector /> */}</div>

                <ul className={clsx(["flex flex-col gap-2"])}>
                    {LINKS.map((props) => (
                        <Access checker={props.access}>
                            <NavLink {...props}></NavLink>
                        </Access>
                    ))}
                </ul>
                <div className="flex-1"></div>
                <ul className="flex flex-row justify-around">
                    <li className="button text-dark" onClick={handleBack}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </li>
                    <li className="button text-third">{/* <FontAwesomeIcon icon={faMessage} /> */}</li>
                    <li className="button text-secondary">{/* <FontAwesomeIcon className="" icon={faHeart} /> */}</li>
                </ul>
            </div>
        </div>
    )
}
