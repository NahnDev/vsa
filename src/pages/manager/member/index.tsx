import { faSearch, faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"
import Input from "../../../components/common/Input"
import TRole from "../../../types/TRole"

export default function ManagerMemberPage() {
    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-white rounded-sm">
                <h1 className="p-5 text-xl text-center text-dark font-bold uppercase">Thanh vien</h1>
                <div className="p-5 flex flex-row justify-between">
                    <Input leftIcon={faSearch} className="!rounded-full w-80" placeholder="tim kiem thanh vien" />
                    <RoleCreator />
                </div>
                <div className="flex flex-row flex-1">
                    <div className="flex-1 flex flex-col">
                        <section className="flex flex-col">
                            {roles.map((role) => {
                                return <RoleThumbnail data={role} key={role._id} />
                            })}
                        </section>
                    </div>
                    <div className="flex-[2]"></div>
                </div>
            </div>
        </div>
    )
}

function RoleCreator() {
    return (
        <div className="flex flex-row justify-end items-center ">
            <div className={clsx(["flex flex-row gap-2"])}>
                <Input className="w-80 !rounded-full" placeholder="Vai tro" />
                <button className="button rounded-full p-1 px-5 bg-darkless text-white">Them vai tro</button>
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
    { _id: "12312", name: "Member", association: "1", user: "1", permission: { manager: true } },
]
