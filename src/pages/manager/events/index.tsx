import { faSearch } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import Dropdown from "../../../components/common/Dropdown"
import Input from "../../../components/common/Input"
import EventCard from "../components/EventCard"

export default function ManagerEventPage() {
    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-white rounded-md p-5">
                <h1 className="p-5 text-xl text-center text-dark font-bold uppercase">Sự kiện và hoạt động</h1>
                <div className="p-5 flex flex-col gap-2">
                    <div className="flex flex-row">
                        <div className="w-1/2"></div>
                        <div className="flex flex-col flex-1">
                            <div className="flex-1 p-2">
                                <Input leftIcon={faSearch} className="border-[0.1em] border-light " />
                            </div>
                            <div className="flex flex-row p-2">
                                <div className="flex-1"></div>
                                <div>
                                    <Dropdown></Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
