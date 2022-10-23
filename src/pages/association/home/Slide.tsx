import React, { Component } from "react"
import Slider from "react-slick"

export default function Slide() {
    return (
        <div className="w-full overflow-hidden">
            <Slider autoplay autoplaySpeed={5000} speed={500} infinite>
                <div>
                    <img src={"https://cdn.pixabay.com/photo/2022/09/23/16/11/stones-7474749__480.jpg"} />
                </div>
                <div>
                    <img src={"https://cdn.pixabay.com/photo/2022/09/26/15/02/mountains-7480902__480.jpg"} />
                </div>
                <div>
                    <img src={"https://cdn.pixabay.com/photo/2022/10/03/15/07/pumpkin-7496159__480.jpg"} />
                </div>
                <div>
                    <img src={"https://cdn.pixabay.com/photo/2022/10/01/02/31/sunset-7490522__480.jpg"} />
                </div>
            </Slider>
        </div>
    )
}
