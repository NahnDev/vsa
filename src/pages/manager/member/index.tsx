import { faPlus, faSearch, faTrash, faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dialog, Modal } from "@mui/material"
import clsx from "clsx"
import React, { PropsWithChildren, useEffect, useState } from "react"
import { useDrop } from "react-dnd"
import { useParams } from "react-router-dom"
import Input from "../../../components/common/Input"
import MemberCard from "../../../components/member/MemberCard"
import AssociationApi from "../../../stores/api/AssociationApi"
import MemberApi from "../../../stores/api/MemberApi"
import RoleApi from "../../../stores/api/RoleApi"
import TMember from "../../../types/TMember"
import TPermission from "../../../types/TPermission"
import TRole, { TCreateRoleDto } from "../../../types/TRole"
import UserCard from "../../association/components/UserCard"

export default function ManagerMemberPage() {
    const { aId = "" } = useParams()
    const [roles, setRoles] = useState<TRole[]>([])
    const [members, setMembers] = useState<TMember[]>([])

    const handleLoad = async () => {
        const roles = await RoleApi.findAll({ association: aId })
        const members = await AssociationApi.findAllMember(aId)
        console.log({ roles })
        console.log({ members })

        setRoles(roles)
        setMembers(members)
    }

    const handleUpdateRole = async (member: TMember, role: TRole) => {
        await MemberApi.updateOne(member._id, { role: role._id })
        handleLoad()
    }
    const handleRemove = async (member: TMember) => {
        await MemberApi.remove(member._id)
        handleLoad()
    }

    useEffect(() => {
        handleLoad()
    }, [aId])

    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-white rounded-sm">
                <h1 className="p-5 text-xl text-center text-dark font-bold uppercase">Thanh vien</h1>
                <div className="p-5 flex flex-row justify-between">
                    <Input leftIcon={faSearch} className="!rounded-full w-80" placeholder="tim kiem thanh vien" />
                    <RoleCreator />
                </div>
                <div className="">
                    <div className="flex-1 flex flex-col">
                        <section className="flex flex-col">
                            {[
                                ...roles,
                                {
                                    name: "Khong phan vai tro",
                                    permission: initialPermission,
                                    _id: "",
                                    association: aId,
                                },
                            ].map((role) => {
                                return (
                                    <RoleZone
                                        data={role}
                                        key={role._id}
                                        onDrop={(member) => handleUpdateRole(member, role)}
                                    >
                                        {members
                                            .filter((el) => (role._id ? el.role === role._id : !el.role))
                                            .map((member) => (
                                                <MemberCard onDelete={() => handleRemove(member)} data={member} />
                                            ))}
                                    </RoleZone>
                                )
                            })}
                        </section>
                    </div>
                    <div className="flex-[2]"></div>
                </div>
            </div>
        </div>
    )
}

const initialPermission: TPermission = {
    approval: false,
    doc: false,
    event: false,
    finance: false,
    general: false,
    member: false,
    post: false,
    unit: false,
}

function RoleZone(props: PropsWithChildren<{ data: TRole; onDrop: (member: TMember) => any }>) {
    const [collected, dropRef] = useDrop(() => ({ accept: "Member", drop: props.onDrop }), [props.onDrop])
    return (
        <div ref={dropRef} className="p-5 ">
            <div className="bg-lightest">
                <RoleThumbnail data={props.data} />
                <div className="flex flex-col  gap-1 p-2 mx-5 pb-10">{props.children}</div>
            </div>
        </div>
    )
}

function RoleCreator() {
    const { aId = "" } = useParams()
    const [shown, setShown] = useState(false)
    const [dto, setDto] = useState<TCreateRoleDto>({
        name: "",
        association: aId,
        permission: initialPermission,
    })

    const handleChangePermission = (key: keyof TPermission) => {
        setDto({
            ...dto,
            permission: {
                ...dto.permission,
                [key]: !dto.permission[key],
            },
        })
    }
    const handleCreate = async () => {
        const role = await RoleApi.create(dto)
        setShown(false)
        setDto({
            name: "",
            association: aId,
            permission: initialPermission,
        })
    }
    return (
        <div className="flex flex-row justify-end items-center ">
            <div className={clsx(["flex flex-row gap-2"])}>
                <button className="button rounded-full p-1 px-5 bg-darkless text-white" onClick={() => setShown(true)}>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <FontAwesomeIcon icon={faPlus} />
                        <span>Them vai tro</span>
                    </div>
                </button>
                <div className={clsx(["relative", shown ? "" : "overflow-hidden !hidden"])}>
                    <div className="fixed w-screen h-screen left-0 top-0 grid grid-cols-2">
                        <div className="bg-dark opacity-25" onClick={() => setShown(false)}></div>
                        <div className="bg-white shadow-md">
                            <h1 className="font-bold p-5 text-lg text-center">Them vai tro</h1>
                            <div className="p-5">
                                <div className="flex flex-row p-5 gap-2">
                                    <Input
                                        onChangeText={(name) => setDto({ ...dto, name })}
                                        className="flex-1"
                                        placeholder="Ten vai tro"
                                    ></Input>
                                    <button
                                        onClick={handleCreate}
                                        className="button bg-success text-white p-2 px-5 rounded-md"
                                    >
                                        Tao vai tro
                                    </button>
                                </div>
                                <ul>
                                    <li className="p-5">
                                        <h6 className="px-5 py-2 font-bold">Phan quyen</h6>
                                        <ul className="px-5 flex flex-col gap-5">
                                            <li className="">
                                                <Checkbox
                                                    onClick={() => handleChangePermission("general")}
                                                    label="Cai dat chung"
                                                    value={dto.permission.general}
                                                />
                                            </li>
                                            <li className="">
                                                <Checkbox
                                                    onClick={() => handleChangePermission("unit")}
                                                    label="Quan ly don vi"
                                                    value={dto.permission.unit}
                                                />
                                            </li>
                                            <li className="">
                                                <Checkbox
                                                    onClick={() => handleChangePermission("event")}
                                                    label="quan ly su kien hoat dong"
                                                    value={dto.permission.event}
                                                />
                                            </li>
                                            <li className="">
                                                <Checkbox
                                                    onClick={() => handleChangePermission("doc")}
                                                    label="Quan ly tai lieu"
                                                    value={dto.permission.doc}
                                                />
                                            </li>
                                            <li className="">
                                                <Checkbox
                                                    onClick={() => handleChangePermission("member")}
                                                    label="Quan ly thanh vien"
                                                    value={dto.permission.member}
                                                />
                                            </li>
                                            <li className="">
                                                <Checkbox
                                                    onClick={() => handleChangePermission("post")}
                                                    label="Quan ly bai viet"
                                                    value={dto.permission.post}
                                                />
                                            </li>
                                            <li className="">
                                                <Checkbox
                                                    onClick={() => handleChangePermission("finance")}
                                                    label="Quan ly kinh phi"
                                                    value={dto.permission.finance}
                                                />
                                            </li>
                                            <li className="">
                                                <Checkbox
                                                    onClick={() => handleChangePermission("approval")}
                                                    label="Quan ly yeeu cau"
                                                    value={dto.permission.approval}
                                                />
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Checkbox(props: { label: string; value: boolean; onClick?: () => any }) {
    return (
        <div className="flex flex-row gap-2 justify-start items-center button hover:scale-100">
            <Input type="checkbox" checked={props.value} onClick={props.onClick} />
            <span onClick={props.onClick}>{props.label}</span>
        </div>
    )
}

function RoleThumbnail(props: { data: TRole }) {
    return (
        <div className="p-5 justify-between flex flex-row">
            <div className=" flex flex-row items-center ">
                <FontAwesomeIcon icon={faUserGraduate} />
                <span className="px-2">{props.data.name}</span>
            </div>
            <div className="">
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    )
}
