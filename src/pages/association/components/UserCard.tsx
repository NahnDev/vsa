import { faFacebook, faGoogle, faTwitter, faViber } from "@fortawesome/free-brands-svg-icons"
import { faMailBulk, faMailForward, faMailReply } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { useEffect, useState } from "react"
import SocialGroup from "../../../components/common/SocialGroup"
import ResourceImage from "../../../components/image/ResourceImage"
import UserApi from "../../../stores/api/UserApi"
import TUser from "../../../types/TUser"

export default function UserCard(props: { _id: string }) {
    const [user, setUser] = useState<TUser | undefined>(undefined)
    const handleLoad = async () => {
        const user = await UserApi.findOne(props._id)
        setUser(user)
    }
    useEffect(() => {
        handleLoad()
    }, [])

    if (!user) return <></>

    return (
        <div className="p-2 w-[15em] h-[20em]">
            <div className="w-full h-full bg-white shadow-md rounded-md overflow-hidden flex flex-col relative">
                <div className={clsx(["py-5 pb-2 pt-10 mb-10 ", " flex justify-center items-center", "bg-third"])}>
                    <ResourceImage
                        _id={user.avatar}
                        className={clsx([
                            " h-20 w-20",
                            " rounded-full overflow-hidden ",
                            "ring-4 ring-white",
                            "-mb-10",
                        ])}
                    />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="text-md text-dark">{user.fullName}</h4>
                    <h5 className="text-sm text-gray">{user.name}</h5>
                </div>
                <SocialGroup />
                <div className="p-2 flex-1 justify-center items-">
                    <p className="text-sm text-center text-darkless">{user.introduce}</p>
                </div>

                <div className="flex flex-row items-center justify-center absolute top-1 right-1">
                    <span className=" bg-darkest bg-opacity-50 text-white  rounded-md text-xs">
                        {/* Don vi truong */}
                    </span>
                </div>
            </div>
        </div>
    )
}
