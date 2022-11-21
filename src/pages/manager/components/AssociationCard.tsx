import React, { useState } from "react"
import "chart.js/auto"
import { faCheckCircle, faCommentAlt, faUser } from "@fortawesome/free-regular-svg-icons"
import { faGear, faLock, faUserAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import { Line } from "react-chartjs-2"
import Colors from "../../../constants/Colors"
import Label from "../../../components/label/Label"
import TAssociation from "../../../types/TAssociation"
import { Link } from "react-router-dom"
import ResourceImage from "../../../components/image/ResourceImage"

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

export default function AssociationCard(props: { data: TAssociation }) {
    return (
        <div className="border-l-2 border-third">
            <div className={clsx(["bg-white p-2"])}>
                <div className="flex flex-row items-center gap-2 p-2 cursor-pointer">
                    <div className="rounded-full w-10 h-10 overflow-hidden">
                        <ResourceImage _id={props.data.logo} />
                    </div>
                    <Link to={`/associations/${props.data._id}/manager`}>
                        <h3 className="font-bold text-darker">{props.data.name}</h3>
                        <span className="flex text-sm text-dark p-0">{}</span>
                    </Link>
                    <div className="flex-1"></div>
                    <div className="flex flex-row gap-5">
                        <button className="p-2 button flex flex-row gap-2">
                            {/* <Label value="20">
                                <FontAwesomeIcon className="p-1" icon={faCheckCircle} />
                            </Label> */}
                            <span>Yêu cầu phê duyệt</span>
                        </button>
                        <button className="p-2 button">
                            <FontAwesomeIcon icon={faGear} />
                        </button>
                        <button className="p-2 button">
                            <FontAwesomeIcon icon={faLock} />
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-row ">
                <div className="p-20 flex flex-col justify-around items-center">
                    <div className="flex flex-col justify-center items-center">
                        <span className="font-bold text-2xl text-primary">1</span>
                        <span className=" uppercase text-dark">Event</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="font-bold text-2xl text-secondary">1</span>
                        <span className=" uppercase text-dark">Comment</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="font-bold text-2xl text-third">1</span>
                        <span className=" uppercase text-dark">Post</span>
                    </div>
                </div>
                <div className="flex-1 p-5 overflow-hidden">
                    <Line options={{ plugins: { legend: { position: "bottom" } } }} data={data} />
                </div>
            </div> */}
        </div>
    )
}
