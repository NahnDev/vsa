import React, { Component } from "react"
import Slider from "react-slick"
import ResourceImage from "../../../components/image/ResourceImage"

export default function Slide(props: { images: string[] }) {
    return (
        <div className="w-full overflow-hidden">
            <Slider autoplay autoplaySpeed={5000} speed={500} infinite>
                {props.images.map((image) => (
                    <div key={image}>
                        <ResourceImage _id={image} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
