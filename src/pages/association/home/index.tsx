import { faCreativeCommons, faFacebook, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faBell, faHand, faNewspaper, faUser } from "@fortawesome/free-regular-svg-icons"
import { faBed, faRing } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Colors from "../../../constants/Colors"
import AssociationApi from "../../../stores/api/AssociationApi"
import TAssociation from "../../../types/TAssociation"
import NewsThumbnails from "../components/NewsThumbnails"
import Slide from "./Slide"

export default function AssociationHomePage() {
    const color = Colors.primary
    const { aId = "" } = useParams()
    const [data, setData] = useState<TAssociation | undefined>(undefined)

    useEffect(() => {
        AssociationApi.findOne(aId).then(setData)
    }, [aId])

    if (!data) return <div></div>
    return (
        <div className="flex h-full w-full">
            <div className="flex-1 grid grid-cols-[1fr] gap-2">
                <div className="flex-[2] p-2 bg-white rounded-md  overflow-y-auto hide-scrollbar">
                    <div className="w-full rounded-md overflow-hidden" style={{ aspectRatio: 2 }}>
                        <Slide images={data.images}></Slide>
                    </div>
                    <div className={clsx(["flex-1 flex-col   flex justify-center items-center", "p-5"])}>
                        <h1 className=" font-bold p-5 text-3xl text-secondary uppercase ">{data.name}</h1>
                        <span className="text-center ">{data.introduction}</span>
                        <ul className="flex flex-row justify-around w-full p-5">
                            <li>
                                <a
                                    href={data.social.facebook}
                                    className={clsx([
                                        "flex flex-row gap-2 items-center",
                                        "text-facebook font-semibold ",
                                    ])}
                                >
                                    <FontAwesomeIcon icon={faFacebook as any} />
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={data.social.tiktok}
                                    className={clsx(["flex flex-row gap-2 items-center", "text-tiktok font-semibold"])}
                                >
                                    <FontAwesomeIcon icon={faTiktok as any} />
                                    <span>Tiktok</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={data.social.twitter}
                                    className={clsx(["flex flex-row gap-2 items-center", "text-twitter font-semibold"])}
                                >
                                    <FontAwesomeIcon icon={faTwitter as any} />
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={data.social.youtube}
                                    className={clsx(["flex flex-row gap-2 items-center", "text-google font-semibold"])}
                                >
                                    <FontAwesomeIcon icon={faYoutube as any} />
                                    <span>Youtube</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 flex-col p-2 bg-white rounded-md hidden">
                    <h4 className="py-2 ">
                        <FontAwesomeIcon className="text-success" icon={faNewspaper} />
                        <span className="px-2 font-semibold text-success">Hoạt động của chúng tôi</span>
                    </h4>
                    <ul>
                        <li>
                            <NewsThumbnails />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
