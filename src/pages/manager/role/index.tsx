import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import TRole from "../../../types/TRole"

export default function RolePage() {
    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-white rounded-md p-5">
                <div className="flex flex-row flex-1">
                    <div className="flex-1 flex flex-col">
                        <h4 className="font-bold text-darker">Vai trò:</h4>
                        <ul className="flex flex-col">
                            {roles.map((role) => {
                                return <RoleThumbnail data={role} key={role._id} />
                            })}
                        </ul>
                    </div>
                    <div className="flex-[2]"></div>
                </div>
            </div>
        </div>
    )
}

function RoleThumbnail(props: { data: TRole }) {
    return (
        <div className="p-5">
            <div className=" flex flex-row items-center ">
                <FontAwesomeIcon icon={faUserGraduate} />
                <span className="px-2">{props.data.name}</span>
            </div>
        </div>
    )
}

const roles: TRole[] = [
    { _id: "12312", name: "Administrator", association: "1", user: "1", permission: { manager: true } },
]
