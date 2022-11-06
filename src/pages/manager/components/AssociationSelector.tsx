import React from "react"
import Dropdown from "../../../components/common/Dropdown"

export default function AssociationSelector() {
    return (
        <div className="rounded-md bg-white p-2">
            <div className=" p-2">
                <Dropdown data={data} onSelected={(value) => {}} />
            </div>
        </div>
    )
}

const data = [
    { label: "CHSV My Thanh Phuoc", value: { _id: "1212f12" } },
    { label: "CHSV Go Cong", value: { _id: "121a212" } },
    { label: "CHSV My Tho", value: { _id: "121222" } },
]
