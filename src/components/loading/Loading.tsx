import React from "react"
import "./styles.css"

export default function Loading() {
    return (
        <div className="w-full h-full relative">
            <div className="w-full h-full flex justify-center items-center  absolute">
                <span className="loader"></span>
            </div>
            <div className="w-full h-full flex justify-center items-center  absolute">
                <span className=" loader2"></span>
            </div>
        </div>
    )
}
