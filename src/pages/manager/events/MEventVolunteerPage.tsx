import moment from "moment"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserThumbnail from "../../../components/user/UserThumbnail"
import EventApi from "../../../stores/api/EventApi"
import PackageApi from "../../../stores/api/PackageApi"
import VolunteerApi from "../../../stores/api/VolunteerApi"
import TPackage from "../../../types/TPackage"
import TVolunteer from "../../../types/TVolunteer"

export default function MEventVolunteerPage() {
    const { eId = "" } = useParams()
    const [volunteers, setVolunteers] = useState<TVolunteer[]>([])

    const load = async () => {
        try {
            const volunteers = await VolunteerApi.findAll({ event: eId })
            setVolunteers(volunteers)
        } catch {}
    }
    useEffect(() => {
        load()
    }, [eId])
    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-white rounded-md p-5">
                <h1 className="p-5 text-xl text-center text-dark font-bold uppercase">Danh sach tham gia</h1>
                <ul>
                    {volunteers.map((volunteer) => (
                        <Volunteer data={volunteer} key={volunteer.user}></Volunteer>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function Volunteer(props: { data: TVolunteer }) {
    const time = moment(+props.data.at).format("HH:mm DD/MM/YYYY")
    return (
        <div className="">
            <div className="flex flex-row justify-between items-center">
                <UserThumbnail _id={props.data.user} />
                <span>{time}</span>
            </div>
        </div>
    )
}
