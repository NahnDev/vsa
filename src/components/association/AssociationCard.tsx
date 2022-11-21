import React from "react"
import Slide from "../../pages/association/home/Slide"
import TAssociation from "../../types/TAssociation"
import AssociationThumbnail from "./AssociationThumbnail"

export default function AssociationCard(props: { data: TAssociation }) {
    return (
        <div className="relative w-80 p-2">
            <div className=" bg-white overflow-hidden rounded-md shadow-md">
                <div className="">
                    <div className="overflow-hidden" style={{ aspectRatio: 2 }}>
                        <Slide images={props.data.images} />
                    </div>
                    <div className="p-5">
                        <div className="flex flex-row justify-start">
                            <AssociationThumbnail _id={props.data._id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
