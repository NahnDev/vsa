import { faFolder } from "@fortawesome/free-regular-svg-icons"
import { faDirections, faFileCirclePlus, faFolderPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"

export default function ManagerDocPage() {
    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-white rounded-md p-5">
                <h1 className="p-5 text-xl text-center text-dark font-bold uppercase">tai lieu va van kien</h1>
                <div className="p-5">
                    <div className="flex flex-row gap-2 rounded-md overflow-hidden">
                        <div className="bg-white flex-[3] px-5 justify-center items-center">
                            <div className="flex flex-row">
                                <h2 className="font-bold  p-2">Collections</h2>
                                <div className="flex-1"></div>
                                <div className="flex-1 flex justify-center items-center gap-5">
                                    <FontAwesomeIcon icon={faFolderPlus} />
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </div>

                            <div className="p-2">
                                <Collection />
                                <Collection />
                                <Collection />
                            </div>
                        </div>
                        <div className="bg-lightest flex-[5]">
                            <h2 className="font-bold  p-2">Resources</h2>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Collection() {
    return (
        <div>
            <div className={clsx(["p-1 flex flex-row items-center", "cursor-pointer button"])}>
                <FontAwesomeIcon className="px-2" icon={faFolder} />
                <span>Trung thu 2020</span>
            </div>
        </div>
    )
}
