import clsx from "clsx"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EventApi from "../../../stores/api/EventApi"
import TEvent from "../../../types/TEvent"
import EventPoster from "../components/EventPoster"

export default function EventMainPage() {
    const { aId = "" } = useParams()
    const [events, setEvents] = useState<TEvent[]>([])
    const load = () => {
        EventApi.findAll({ association: aId }).then((events) => setEvents(events))
    }
    useEffect(() => {
        load()
    }, [aId])

    return (
        <div className="h-full  -mr-5">
            <div className={clsx(["flex flex-row flex-wrap -my-2 items-stretch"])}>
                {events.map((event) => {
                    return (
                        <div className=" md:basis-1/2 lg:basis-1/3  p-2">
                            <EventPoster data={event} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
