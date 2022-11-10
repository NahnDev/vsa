import { faCheckCircle, faCircle, faFolder } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import moment from "moment"
import React, { useRef, useState } from "react"
import { useDrag, useDrop } from "react-dnd"
import Colors from "../../constants/Colors"
import EDndType from "../../enums/EDndType"
import PackageApi from "../../stores/api/PackageApi"
import TPackage from "../../types/TPackage"

export type TPackageProps = {
    data: TPackage
    selected?: boolean
    onClick?: () => any
}
export default function Package(props: TPackageProps) {
    const colorRef = useRef<HTMLInputElement>(null)
    const [color, setColor] = useState(props.data.color)
    const [name, setName] = useState(props.data.name)
    const time = moment(props.data.at).format("DD MMM YYYY hh:mm:ss a")

    const [edit, setEdit] = useState(false)
    // drag and drop file and folter
    const [dragProps, dragRef] = useDrag({ type: EDndType.FOLDER, item: props.data })
    const [dropProps, dropRef] = useDrop({
        accept: [EDndType.FOLDER, EDndType.FILE],
        drop: (item) => {
            console.log({ item })
        },
    })

    const handleBlur = async () => {
        console.log("handleBlur")
        await PackageApi.updateOne(props.data._id, { name, color })
    }
    return (
        <div ref={dropRef} {...(dropProps as any)}>
            <div ref={dragRef} {...(dragProps as any)}>
                <div onClick={props.onClick} className="bg-white cursor-pointer">
                    <div
                        className={clsx([
                            "flex flex-row items-center",
                            " border-l-4",
                            " select-none m-2 p-2 gap-2",
                            "cursor-pointer",
                        ])}
                        style={{ borderColor: color }}
                    >
                        <div
                            onClick={() => colorRef.current?.click()}
                            className={clsx([
                                "w-8 h-8 mx-2",
                                "rounded-full ",
                                "text-white ",
                                "flex items-center justify-center",
                            ])}
                            style={{ backgroundColor: color }}
                        >
                            <FontAwesomeIcon icon={faFolder} />
                            <input
                                className="h-0 w-0 overflow-hidden"
                                ref={colorRef}
                                onChange={(e) => setColor(e.target.value)}
                                type="color"
                                onBlurCapture={handleBlur}
                            ></input>
                        </div>
                        <div className="flex flex-col flex-1">
                            <input
                                className={clsx([
                                    "text-md font-bold focus:outline-none ",
                                    edit ? "bg-lightest" : "bg-white select-none cursor-pointer",
                                ])}
                                onBlur={() => {
                                    setEdit(false)
                                    handleBlur()
                                }}
                                onDoubleClick={(e) => {
                                    const target = e.target as HTMLInputElement
                                    setEdit(true)
                                    target.focus()
                                    target.setSelectionRange(0, name.length)
                                }}
                                readOnly={!edit}
                                defaultValue={name}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                            <span className="text-sm text-darkless"> {time}</span>
                        </div>
                        <div className="">
                            {props.selected ? (
                                <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
                            ) : (
                                <FontAwesomeIcon icon={faCircle} className="text-gray" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
