import { faFolderPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useParams, useRoutes } from "react-router-dom"
import Colors from "../../constants/Colors"
import PackageApi from "../../stores/api/PackageApi"
import TPackage from "../../types/TPackage"
import Package from "./Package"

type TPackageColumnProps = { onTarget: (p: TPackage) => any }

export default function PackageColumn(props: TPackageColumnProps) {
    const { aId } = useParams()
    const [packages, setPackages] = useState<TPackage[]>([])
    const [loading, setLoading] = useState(false)

    const handleCreate = async () => {
        await PackageApi.create({ association: aId as string })
        await load()
    }
    const load = async () => {
        setLoading(true)
        try {
            const data = await PackageApi.findAll({ association: aId as string })
            setPackages(data)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <div className="bg-lightest h-full flex-[3] px-5 justify-center items-center">
            <div className="flex flex-row p-2">
                <h2 className="font-bold  p-2">Collections</h2>
                <div className="flex-1"></div>
                <div className="flex justify-center items-center gap-5">
                    <FontAwesomeIcon onClick={handleCreate} className="button text-third" icon={faFolderPlus} />
                    <FontAwesomeIcon className="button text-error" icon={faTrash} />
                </div>
            </div>

            <div className="p-2 ">
                {packages.map((p) => (
                    <Package onClick={() => props.onTarget(p)} data={p} key={p._id} selected={Math.random() > 0.5} />
                ))}
            </div>
        </div>
    )
}
