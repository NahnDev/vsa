import { faFacebook, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"

export default function SocialGroup() {
    return (
        <ul className={clsx(["flex flex-row justify-around", " p-5 gap-2", "container"])}>
            <li className={clsx(["flex flex-row gap-2 items-center", "text-facebook font-semibold", "button"])}>
                <FontAwesomeIcon icon={faFacebook as any} />
            </li>
            <li className={clsx(["flex flex-row gap-2 items-center", "text-tiktok font-semibold", "button"])}>
                <FontAwesomeIcon icon={faTiktok as any} />
            </li>
            <li className={clsx(["flex flex-row gap-2 items-center", "text-twitter font-semibold", "button"])}>
                <FontAwesomeIcon icon={faTwitter as any} />
            </li>
            <li className={clsx(["flex flex-row gap-2 items-center", "text-google font-semibold", "button"])}>
                <FontAwesomeIcon icon={faYoutube as any} />
            </li>
        </ul>
    )
}
