import clsx from "clsx"
import React from "react"
import EventPoster from "../components/EventPoster"

export default function EventMainPage() {
    return (
        <div className="h-full  -mr-5">
            <div className={clsx(["flex flex-row flex-wrap -my-2"])}>
                <div className=" md:basis-1/2 lg:basis-1/3  p-2">
                    <EventPoster />
                </div>
                <div className=" md:basis-1/2 lg:basis-1/3  p-2">
                    <EventPoster />
                </div>
                <div className=" md:basis-1/2 lg:basis-1/3  p-2">
                    <EventPoster />
                </div>
                <div className=" md:basis-1/2 lg:basis-1/3  p-2">
                    <EventPoster />
                </div>
                <div className=" md:basis-1/2 lg:basis-1/3  p-2">
                    <EventPoster />
                </div>
                <div className=" md:basis-1/2 lg:basis-1/3  p-2">
                    <EventPoster />
                </div>
                <div className=" md:basis-1/2 lg:basis-1/3  p-2">
                    <EventPoster />
                </div>
                <div className=" md:basis-1/2 lg:basis-1/3  p-2">
                    <EventPoster />
                </div>
                <div className=" md:basis-1/2 lg:basis-1/3  p-2">
                    <EventPoster />
                </div>

                <div className=" md:basis-1/2 lg:basis-1/3  p-2">
                    <EventPoster />
                </div>
            </div>
        </div>
    )
}
