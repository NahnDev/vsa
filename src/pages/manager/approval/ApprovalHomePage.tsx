import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { ApprovalSubmitAccess } from "../../../components/access/ApprovalAccess"
import { usePermissions } from "../../../stores/access/hooks"
import ApprovalApi from "../../../stores/api/ApprovalApi"
import TApproval from "../../../types/TApproval"
import ApprovalCard from "./ApprovalCard"

export default function ApprovalHomePage() {
    const { aId = "" } = useParams()
    const [approvals, setApprovals] = useState<TApproval[]>([])
    const permission = usePermissions()

    const handleCreate = async () => {
        const approval = await ApprovalApi.create({ association: aId })
        setApprovals([approval, ...approvals])
    }

    const handleLoad = async () => {
        if (permission.approval) {
            const data = await ApprovalApi.findAll({ association: aId })
            setApprovals(data)
        } else if (permission.manager.unit) {
            const data = await ApprovalApi.submitted({ association: aId })
            setApprovals(data)
        }
    }

    useEffect(() => {
        handleLoad()
    }, [])

    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-white rounded-md min-h-full p-5">
                <h1 className="p-5 text-xl text-center text-dark font-bold uppercase">Phê duyệt</h1>
                <div className="flex flex-row justify-end p-5">
                    <div className="">
                        <ApprovalSubmitAccess>
                            <button
                                onClick={handleCreate}
                                className={clsx([
                                    "flex flex-row justify-center items-center",
                                    "button",
                                    "gap-2 p-2 px-5",
                                    " text-white bg-success",
                                    " rounded-md",
                                ])}
                            >
                                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                <span>Phê duyệt mới</span>
                            </button>
                        </ApprovalSubmitAccess>
                    </div>
                </div>
                <div className="mt-2 ">
                    <h3 className="text-darker font-bold p-2">Các yêu cầu phê duyệt:</h3>
                    <ul className="flex flex-col p-2 px-5 gap-2">
                        {approvals.map((approval) => (
                            <li className="">
                                <ApprovalCard data={approval} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
