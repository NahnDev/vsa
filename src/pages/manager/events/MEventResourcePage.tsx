import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FileColumn from "../../../components/file/FileColumn"
import PackageApi from "../../../stores/api/PackageApi"
import TPackage from "../../../types/TPackage"

export default function MEventResourcePage() {
    const { eId = "" } = useParams()
    const [packages, setPackages] = useState<TPackage[]>([])

    const load = async () => {
        try {
            const data = await PackageApi.findAll({ event: eId })
            setPackages(data)
        } catch {}
    }
    useEffect(() => {
        load()
    }, [eId])

    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-white rounded-md p-5">
                {packages.map((p) => (
                    <FileColumn package={p} key={p._id} />
                ))}
            </div>
        </div>
    )
}
