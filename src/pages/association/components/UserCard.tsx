import { faFacebook, faGoogle, faTwitter, faViber } from "@fortawesome/free-brands-svg-icons"
import { faMailBulk, faMailForward, faMailReply } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"
import SocialGroup from "../../../components/common/SocialGroup"

export default function UserCard() {
    return (
        <div className="p-2 w-[15em] h-[20em]  ">
            <div className="w-full h-full bg-white rounded-md overflow-hidden flex flex-col relative">
                <div className={clsx(["py-5 pb-2 pt-10 mb-10 ", " flex justify-center items-center", "bg-secondary"])}>
                    <img
                        className={clsx([
                            " h-20 w-20",
                            " rounded-full overflow-hidden ",
                            "ring-4 ring-white",
                            "-mb-10",
                        ])}
                        src="https://cdn.pixabay.com/photo/2019/05/14/21/50/storytelling-4203628__480.jpg"
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="text-md text-dark">Le Thanh NHan</h4>
                    <h5 className="text-sm text-gray">@NahnDev</h5>
                </div>
                <SocialGroup />
                <div className="p-2 flex-1 justify-center items-">
                    <p className="text-sm text-center text-darkless">Cố gắng, cố gắng và cố gắng hơn nửa</p>
                </div>

                <div className="flex flex-row items-center justify-center absolute top-1 right-1">
                    <span className="py-[2px] px-2 bg-darkest bg-opacity-50 text-white  rounded-md text-xs">
                        Don vi truong
                    </span>
                </div>
            </div>
        </div>
    )
}
