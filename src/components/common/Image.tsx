import clsx from "clsx"
import React, { useState } from "react"

type TImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
export default function Image(props: TImageProps) {
    const [fullscreen, setFullscreen] = useState(false)
    return (
        <div
            onClick={() => setFullscreen(!fullscreen)}
            className={clsx([
                props.className,
                "w-full h-full",
                fullscreen && "fixed w-full h-full top-0 left-0 p-20 z-50",
                fullscreen && "bg-gray bg-opacity-80",
                fullscreen && "justify-center items-center flex",
            ])}
        >
            <img {...props} className={clsx([, fullscreen ? "h-full " : "w-full h-full"])} />
        </div>
    )
}
