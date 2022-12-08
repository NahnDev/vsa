import { faIdCard } from "@fortawesome/free-regular-svg-icons"
import { faPhone, faEnvelope, faCode, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import AutoSaveButton from "../../components/common/AutoSaveButton"
import Input from "../../components/common/Input"
import SocialGroup from "../../components/common/SocialGroup"
import Textarea from "../../components/common/Textarea"
import TextareaResizable from "../../components/common/TextareaResizable"
import ImageUploader from "../../components/image/ImageUploader"
import useDebounce from "../../hooks/useDebounce"
import UserApi from "../../stores/api/UserApi"
import { useUser } from "../../stores/user/hooks"
import TUser, { TUpdateUserDto } from "../../types/TUser"

export default function ProfileDetailPage() {
    const { _id: uId = "" } = useUser()
    const { uId: paramId = "" } = useParams()
    const pId = useMemo(() => (paramId == "me" ? uId : paramId), [paramId])

    const [edit, setEdit] = useState(uId === pId)
    const [saving, setSaving] = useState(false)
    const [user, setUser] = useState<TUser | undefined>(undefined)
    const [dto, debounced, setDto] = useDebounce<TUpdateUserDto>({}, 3000)

    const handleSave = async () => {
        setSaving(true)
        try {
            await UserApi.updateOne(pId, dto)
        } finally {
            setSaving(false)
        }
    }
    const handleLoad = async () => {
        const data = await UserApi.findOne(pId)
        setUser(data)
    }
    useEffect(() => {
        handleLoad()
    }, [pId])

    useEffect(() => {
        handleSave()
    }, [debounced])

    if (!user) return <></>
    console.log(user._id)

    return (
        <div className="w-full min-h-screen p-5 bg-lighter  overflow-hidden">
            <div className={clsx(["bg-white rounded-md overflow-hidden", "flex flex-row"])}>
                <div className={clsx(["w-1/4 p-5", "flex flex-col", "justify-center items-center", "bg-lightest"])}>
                    <div
                        className={clsx([
                            "w-40 h-40 rounded-full overflow-hidden",
                            "border-4 border-dark",
                            "flex items-center justify-center",
                        ])}
                    >
                        <ImageUploader
                            disable={!edit}
                            default={dto.avatar ?? user.avatar}
                            onCompleted={(data) => {
                                setDto({ ...dto, avatar: data._id })
                            }}
                        />
                    </div>
                    <div className="p-5 flex flex-col items-center justify-center">
                        <h4 className="font-semibold text-lg text-dark text-center">{user.name}</h4>

                        <Input
                            rounded
                            readOnly={!edit}
                            placeholder="Tên đầy đủ của bạn"
                            value={dto.fullName ?? user.fullName}
                            onChangeText={(fullName) => setDto({ ...dto, fullName })}
                            className="font-bold text-md text-third"
                            inputClassName="!text-center"
                        ></Input>
                        <TextareaResizable
                            readOnly={!edit}
                            value={dto.introduce ?? user.introduce}
                            placeholder="Hãy giới thiệu về bản thân với mọi người"
                            onChangeText={(introduce) => setDto({ ...dto, introduce })}
                            className="text-sm  text-darkless  w-full text-center"
                        />
                    </div>
                    <div className="w-full">
                        <SocialGroup
                            value={{ ...user.social, ...dto.social }}
                            edit={edit}
                            onChange={(social) => setDto({ ...dto, social })}
                        />
                    </div>
                </div>
                <div className="w-3/4">
                    {edit && <AutoSaveButton onClick={handleSave} loading={saving} className="p-5" />}
                    <div className="p-5 px-10">
                        <div>
                            <div className="p-5">
                                <h4 className="font-bold text-dark text-lg">Contact info</h4>
                                <ul className="flex flex-col px-5 p-1">
                                    <li className="flex flex-row gap-2 items-center">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <a className="text-third " href="mailto:nahn.thanhnhan@gmail.com">
                                            {user.email}
                                        </a>
                                    </li>
                                    <li className="flex flex-row gap-2 items-center">
                                        <FontAwesomeIcon icon={faPhone} />
                                        <Input
                                            rounded
                                            readOnly={!edit}
                                            placeholder="Số điện thoại của bạn"
                                            className="!bg-[transparent] -mx-4"
                                            value={dto.phone ?? user.phone}
                                            onChangeText={(phone) => setDto({ ...dto, phone })}
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-dark text-lg">Contact info</h4>
                                <ul className="flex flex-col px-5 p-1">
                                    <li className="flex flex-row gap-2 items-center">
                                        <FontAwesomeIcon icon={faIdCard} />
                                        <Input
                                            rounded
                                            readOnly={!edit}
                                            placeholder="Mã số sinh viên"
                                            className="!bg-[transparent]"
                                            value={dto.code ?? user.code}
                                            onChangeText={(phone) => setDto({ ...dto, phone })}
                                        />
                                    </li>
                                    <li className="flex flex-row gap-2 items-center">
                                        <FontAwesomeIcon icon={faHome} />
                                        <Input
                                            rounded
                                            readOnly={!edit}
                                            placeholder="Địa chỉ"
                                            className="!bg-[transparent] "
                                            value={dto.address ?? user.address}
                                            onChangeText={(phone) => setDto({ ...dto, phone })}
                                        />
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="p-5">
                                <h4 className="font-bold text-dark  text-lg">Chức danh</h4>
                                <ul className="flex flex-col px-5 p-1">
                                    <li>Ủy viên bản chấp hành Mỹ Thành Phước nhiệm kỳ 2022-2023</li>
                                    <li>Chi hôi phó chi hội sinh viên Mỹ Thành Phước nhiệm kỳ 2022-2023</li>
                                    <li>Ủy viên phong trào Mỹ Thành Phước nhiệm kỳ 2022-2023</li>
                                </ul>
                            </div>

                            <div className="p-5">
                                <h4 className="font-bold text-dark  text-lg">Thong tin khac</h4>
                                <div className="flex flex-col px-5 p-1">
                                    <p>
                                        The Special Forces Qualification Course or, informally, the Q Course is the
                                        initial formal training program for entry into the United States Army Special
                                        Forces. Phase I of the Q Course is Special Forces Assessment and Selection.
                                        Wikipedia
                                    </p>
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-dark  text-lg">Chia sẻ</h4>
                                <ul className="flex flex-col px-5 p-1">
                                    <li>
                                        <span>The Special Forces Qualification Course or, informally - </span>
                                        <a className="text-third">by Thanh Nhan</a>
                                    </li>
                                    <div className="border-l-2 border-primary my-5 bg-lightest">
                                        <input
                                            className={clsx(["p-2 bg-[transparent] w-full focus:outline-none"])}
                                            placeholder="Your review"
                                        />
                                    </div>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
