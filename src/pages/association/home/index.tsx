import { faCreativeCommons, faFacebook, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faBell, faHand, faNewspaper, faUser } from "@fortawesome/free-regular-svg-icons"
import { faBed, faRing } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React from "react"
import NewsThumbnails from "../components/NewsThumbnails"
import Slide from "./Slide"

export default function AssociationHomePage() {
    return (
        <div className="flex h-full">
            <div className="grid grid-cols-[2fr_1fr] gap-2">
                <div className="flex-[2] p-2 bg-white rounded-md  overflow-y-auto hide-scrollbar">
                    <div className="w-full h-80 rounded-md overflow-hidden">
                        <Slide></Slide>
                    </div>
                    <div className={clsx(["flex-1 flex-col   flex justify-center items-center", "p-5"])}>
                        <h1 className="font-bold p-5 text-xl text-darker">
                            CHI HỘI SINH VIÊN MỸ THÀNH PHƯỚC - ĐẠI HỌC CẦN THƠ
                        </h1>
                        <ul className="flex flex-row justify-around w-full p-5">
                            <li className={clsx(["flex flex-row gap-2 items-center", "text-facebook font-semibold "])}>
                                <FontAwesomeIcon icon={faFacebook as any} />
                                <span>Facebook</span>
                            </li>
                            <li className={clsx(["flex flex-row gap-2 items-center", "text-tiktok font-semibold"])}>
                                <FontAwesomeIcon icon={faTiktok as any} />
                                <span>Tiktok</span>
                            </li>
                            <li className={clsx(["flex flex-row gap-2 items-center", "text-twitter font-semibold"])}>
                                <FontAwesomeIcon icon={faTwitter as any} />
                                <span>Twitter</span>
                            </li>
                            <li className={clsx(["flex flex-row gap-2 items-center", "text-google font-semibold"])}>
                                <FontAwesomeIcon icon={faYoutube as any} />
                                <span>Youtube</span>
                            </li>
                        </ul>
                        <span className="text-center ">
                            Chi hội sinh viên Mỹ Thành Phước là nơi tập hợp của tất cả các sinh viên ở TP. Mỹ Tho, huyện
                            Châu Thành và huyện Tân Phước đang học tập và làm việc tại Trường Đại học Cần Thơ, có thể
                            lên trao đổi kinh nghiệm, cập nhật thông tin mới về nhân sự, công tác, hoạt động hiện nay
                            của Chi hội. Đặc biệt, tôi tạo nhóm này dành để thông báo những thông tin chính thống nhất
                        </span>
                    </div>
                </div>
                <div className="flex-1 flex flex-col p-2 bg-white rounded-md">
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
