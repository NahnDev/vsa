import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Dropdown from "../../../components/common/Dropdown"
import Input from "../../../components/common/Input"
import EventApi from "../../../stores/api/EventApi"
import TEvent from "../../../types/TEvent"
import EventCard from "../components/EventCard"

export default function MEventMainPage() {
    const { aId = "" } = useParams()
    const [events, setEvents] = useState<TEvent[]>([])

    const handleCreate = async () => {
        EventApi.create({ association: aId }).then().finally()
    }
    const load = async () => {
        try {
            const data = await EventApi.findAll({ association: aId })
            setEvents(data)
        } catch {}
    }

    useEffect(() => {
        load()
    }, [aId])

    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-white rounded-md p-5">
                <h1 className="p-5 text-xl text-center text-dark font-bold uppercase">Sự kiện và hoạt động</h1>
                <div className="p-5 flex flex-col gap-2">
                    <div className="flex flex-row">
                        <div className="flex flex-row flex-1 justify-between items-center">
                            <div className="flex flex-row p-2">
                                <div className="flex-1"></div>
                                <div>
                                    <Dropdown data={data} onSelected={(value) => {}}></Dropdown>
                                </div>
                            </div>

                            <div className="flex flex-row p-2">
                                <div className="flex-1"></div>
                                <button
                                    onClick={handleCreate}
                                    className={clsx([
                                        "button ",
                                        "bg-third p-2 px-5 rounded-full",
                                        "text-sm font-bold text-white",
                                        "flex flex-row items-center gap-2",
                                    ])}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                    <span>Tạo sự kiện mới</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        {events.map((event) => (
                            <EventCard data={event} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        label: "2020-2021",
        value: { _id: "1312" },
    },
    {
        label: "2018-2019",
        value: { _id: "1312" },
    },
    {
        label: "2019-2020",
        value: { _id: "1312" },
    },
    {
        label: "2021-2021",
        value: { _id: "1312" },
    },
]
