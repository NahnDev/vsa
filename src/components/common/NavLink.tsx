import { FontAwesomeIconProps, FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import { useLocation, Link } from "react-router-dom"

export type TNavLinkProps = {
    to: string
    label: string
    icon: FontAwesomeIconProps["icon"]
    checker: RegExp
    className?: string
}

export default function NavLink(props: TNavLinkProps) {
    const pathname = useLocation().pathname
    const active = props.checker.test(pathname)

    return (
        <li
            className={clsx([
                "flex flex-row items-center p-1",
                "cursor-pointer select-none",
                "text-dark pl-4",
                " hover:scale-105   duration-200 ",
                active && "text-secondary border-l-2 border-secondary pl-4",
                props.className,
            ])}
        >
            <Link to={props.to} className="flex-1">
                <FontAwesomeIcon className="text-sm w-10" icon={props.icon} />
                <span className="text-sm font-bold">{props.label}</span>
            </Link>
        </li>
    )
}
