import { faFacebook, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"
import { Link } from "react-router-dom"
import TSocial from "../../types/TSocial"
import Input from "./Input"

type TSocialGroupProps = {
    edit?: boolean
    value?: TSocial
    onChange?: (v: TSocial) => any
}

export default function SocialGroup(props: TSocialGroupProps) {
    return (
        <ul className={clsx(["flex justify-around", " p-5 gap-2", "container", props.edit ? "flex-col" : "flex-row"])}>
            <li className={clsx(["flex flex-row gap-2 items-center", "text-facebook font-semibold", "button"])}>
                <a href={props.value?.facebook || "#"}>
                    <FontAwesomeIcon icon={faFacebook as any} />
                </a>
                {props.edit && (
                    <Input
                        rounded
                        value={props.value?.facebook || ""}
                        onChangeText={(facebook) => props.onChange && props.onChange({ ...props.value, facebook })}
                        className="!bg-lighter !py-1 font-normal text-sm flex-1"
                    />
                )}
            </li>
            <li className={clsx(["flex flex-row gap-2 items-center", "text-tiktok font-semibold", "button"])}>
                <a href={props.value?.tiktok || "#"}>
                    <FontAwesomeIcon icon={faTiktok as any} />
                </a>
                {props.edit && (
                    <Input
                        rounded
                        value={props.value?.tiktok || ""}
                        onChangeText={(tiktok) => props.onChange && props.onChange({ ...props.value, tiktok })}
                        className="!bg-lighter !py-1 font-normal text-sm flex-1"
                    />
                )}
            </li>
            <li className={clsx(["flex flex-row gap-2 items-center", "text-twitter font-semibold", "button"])}>
                <a href={props.value?.twitter || "#"}>
                    <FontAwesomeIcon icon={faTwitter as any} />
                </a>
                {props.edit && (
                    <Input
                        rounded
                        value={props.value?.twitter || ""}
                        onChangeText={(twitter) => props.onChange && props.onChange({ ...props.value, twitter })}
                        className="!bg-lighter !py-1 font-normal text-sm flex-1"
                    />
                )}
            </li>
            <li className={clsx(["flex flex-row gap-2 items-center", "text-google font-semibold", "button"])}>
                <a href={props.value?.youtube || "#"}>
                    <FontAwesomeIcon icon={faYoutube as any} />
                </a>
                {props.edit && (
                    <Input
                        rounded
                        value={props.value?.youtube || ""}
                        onChangeText={(youtube) => props.onChange && props.onChange({ ...props.value, youtube })}
                        className="!bg-lighter !py-1 font-normal text-sm flex-1"
                    />
                )}
            </li>
        </ul>
    )
}
