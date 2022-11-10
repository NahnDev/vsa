import React from "react"
import TFile from "../../types/TFile"
import { FileIcon, defaultStyles, DefaultExtensionType, FileIconProps } from "react-file-icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import moment from "moment"
import { faDownload, faHistory } from "@fortawesome/free-solid-svg-icons"

export type TFileProps = {
    data: TFile
    selected?: boolean
    onClick?: () => any
}
export default function File(props: TFileProps) {
    const name = props.data.name
    const type = props.data.mineType.replace(/^.*\//, "") || "tex"
    const time = moment(+props.data.at).format("DD MMM YYYY hh:mm:ss a")
    const href = "http://localhost:8080/" + props.data.uri
    return (
        <div className="">
            <a href={href} className="grid grid-cols-[auto_auto_1fr_auto_auto] w-full items-center gap-5 bg-white p-2">
                <div className="">
                    {props.selected ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
                    ) : (
                        <FontAwesomeIcon icon={faCircle} className="text-gray" />
                    )}
                </div>
                <div className="w-5 h-5">
                    <FileIcon extension={type} {...(defaultStyles as any)[type]} />
                </div>
                <div className="">{name}</div>
                <div>
                    <span className="text-gray text-xs">{time}</span>
                </div>
                <div className="flex flex-row gap-5 text-sm">
                    <FontAwesomeIcon className="button text-third" icon={faDownload} />
                </div>
            </a>
        </div>
    )
}
