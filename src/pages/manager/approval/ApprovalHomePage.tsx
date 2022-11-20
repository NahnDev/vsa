import React from "react"
import ApprovalCard from "./ApprovalCard"

export default function ApprovalHomePage() {
    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-white rounded-md min-h-full p-5">
                <h1 className="p-5 text-xl text-center text-dark font-bold uppercase">Phê duyệt</h1>

                <div className="mt-2 ">
                    <h3 className="text-darker font-bold p-2">Các yêu cầu phê duyệt:</h3>
                    <ul className="flex flex-col p-2 px-5 gap-2">
                        <li className="">
                            <ApprovalCard />
                        </li>
                        <li className="">
                            <ApprovalCard />
                        </li>

                        <li className="">
                            <ApprovalCard />
                        </li>

                        <li className="">
                            <ApprovalCard />
                        </li>

                        <li className="">
                            <ApprovalCard />
                        </li>

                        <li className="">
                            <ApprovalCard />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
