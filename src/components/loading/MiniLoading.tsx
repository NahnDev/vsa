import React from "react"

export default function MiniLoading() {
    return (
        <div className="w-full h-full relative">
            <div className="w-full h-full flex justify-center items-center  absolute">
                <span className="loader2 mini"></span>
            </div>
        </div>
    )
}
