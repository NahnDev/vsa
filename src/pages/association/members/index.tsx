import React, { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import Input from "../../../components/common/Input"
import AssociationApi from "../../../stores/api/AssociationApi"
import TMember from "../../../types/TMember"
import TUser from "../../../types/TUser"
import UserCard from "../components/UserCard"

export default function AssociationMemberPage() {
    const { aId = "" } = useParams()
    const [members, setMembers] = useState<TMember[]>([])
    const handleLoad = async () => {
        const members = await AssociationApi.findAllMember(aId)
        setMembers(members)
    }
    useEffect(() => {
        handleLoad()
    }, [])

    return (
        <div className="pl-0 h-full overflow-y-auto">
            <div className="bg-white rounded-md min-h-full p-5">
                <div className="flex flex-row justify-end">
                    {/* <Input className="!rounded-full w-80" placeholder="tim thanh vien bang ten" /> */}
                </div>
                <div>
                    <ul className="flex flex-row">
                        {members.map((member) => (
                            <li key={member._id}>
                                <UserCard _id={member.user} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
