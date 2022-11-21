import React, { useEffect, useState } from "react"
import AssociationCard from "../../components/association/AssociationCard"
import AssociationApi from "../../stores/api/AssociationApi"
import TAssociation from "../../types/TAssociation"

export default function HomePage() {
    const [associations, setAssociations] = useState<TAssociation[]>([])

    const handleLoad = async () => {
        const associations = await AssociationApi.findAll({})
        setAssociations(associations)
    }
    useEffect(() => {
        handleLoad()
    }, [])

    return (
        <div className="bg-lightest min-h-full">
            <div className="flex flex-cols flex-wrap p-2 gap-2">
                {associations.map((association) => (
                    <AssociationCard data={association} key={association._id} />
                ))}
            </div>
        </div>
    )
}
