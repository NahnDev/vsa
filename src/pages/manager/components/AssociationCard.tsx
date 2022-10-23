import React, { useState } from "react"
import "chart.js/auto"
import { faCommentAlt, faUser } from "@fortawesome/free-regular-svg-icons"
import { faUserAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import { Line } from "react-chartjs-2"
import Colors from "../../../constants/Colors"

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
export const data = {
    labels,
    datasets: [
        {
            label: "thanh vien moi",
            data: labels.map(() => Math.random() * 100),
            borderColor: Colors.primary,
            backgroundColor: Colors.primary,
        },
        {
            label: "Tuong tac",
            data: labels.map(() => Math.random() * 100),
            borderColor: Colors.success,
            backgroundColor: Colors.success,
        },
    ],
}

export default function AssociationCard() {
    return (
        <div className={clsx(["bg-white p-2"])}>
            <div className="flex flex-row items-center gap-2 p-2 rounded-full cursor-pointer border-2 border-light">
                <div className="rounded-full w-10 h-10 overflow-hidden">
                    <img src="https://cdn.pixabay.com/photo/2021/12/02/19/14/elephant-6841179__480.jpg" alt="" />
                </div>
                <div>
                    <h3 className="font-bold text-darker">Chi hoi sinh vien My Thanh Phuoc</h3>
                    <span className="flex text-sm text-dark p-0">23 123 thanh vien</span>
                </div>
                <div className="flex-1"></div>
                <div className="flex flex-row">
                    <div className="px-5">
                        <FontAwesomeIcon icon={faUserAlt} />
                        <span className="px-2">1212</span>
                    </div>
                    <div className="px-5">
                        <FontAwesomeIcon icon={faCommentAlt} />
                        <span className="px-2">1212</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row ">
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
            </div>
        </div>
    )
}
