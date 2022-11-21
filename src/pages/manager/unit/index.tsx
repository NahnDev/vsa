import clsx from "clsx"
import React, { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import Input from "../../../components/common/Input"
import AssociationApi from "../../../stores/api/AssociationApi"
import TAssociation from "../../../types/TAssociation"
import AssociationCard from "../components/AssociationCard"

export default function ManagerUnitPage() {
    const { aId = "" } = useParams()
    const [search, setSearch] = useState("")
    const [units, setUnits] = useState<TAssociation[]>([])
    const associations = useMemo(() => units.filter(({ name }) => new RegExp(search, "i").test(name)), [search, units])

    const handleCreate = async () => {
        const association = await AssociationApi.create({ name: search, manager: aId })
        setUnits([association, ...units])
        setSearch("")
    }

    const handleLoad = async () => {
        const units = await AssociationApi.findAll({ manager: aId })
        setUnits(units)
    }

    useEffect(() => {
        handleLoad()
    }, [])

    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-lightest rounded-md">
                <h1 className="p-5 text-xl text-center text-dark font-bold uppercase">Thiết lập đơn vị</h1>
                <div className={clsx(["flex flex-row justify-end", "p-5"])}>
                    <div
                        className={clsx([
                            "flex flex-row ",
                            "border-[1px] border-dark",
                            " rounded-full overflow-hidden",
                        ])}
                    >
                        <div className="w-80">
                            <Input onChangeText={setSearch} value={search} placeholder="Tìm kiếm hoặc tạo đơn vị" />
                        </div>
                        <button onClick={handleCreate} className="button p-2 px-5 bg-dark  hover:scale-100 ">
                            <span className="text-white">Tạo đơn vị mới</span>
                        </button>
                    </div>
                </div>
                <div className="p-5 gap-2 flex flex-col">
                    {associations.map((association) => (
                        <AssociationCard key={association._id} data={association} />
                    ))}
                </div>
            </div>
        </div>
    )
}
