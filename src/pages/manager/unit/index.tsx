import React from "react"
import AssociationCard from "../components/AssociationCard"

export default function ManagerUnitPage() {
    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-lightest rounded-md">
                <h1 className="p-5 text-xl text-center text-dark font-bold uppercase">Thiết lập đơn vị</h1>
                <div className="p-5 gap-2 flex flex-col">
                    <AssociationCard />
                    <AssociationCard />
                    <AssociationCard />
                    <AssociationCard />
                </div>
            </div>
        </div>
    )
}
