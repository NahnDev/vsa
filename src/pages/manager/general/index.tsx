import { faFacebook, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons"
import {
    faAdd,
    faCircleInfo,
    faImages,
    faShare,
    faShareNodes,
    faTag,
    faUpload,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { PropsWithChildren, useRef } from "react"
import Input from "../../../components/common/Input"
import Textarea from "../../../components/common/Textarea"

export default function ManagerGeneralPage() {
    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-white rounded-md p-5">
                <h1 className="p-5 text-xl text-center text-dark font-bold uppercase">Thiết lập chung</h1>
                <div className="p-5">
                    <div className="w-1/2">
                        <div className="p-2 font-semibold">Tên đơn vị:</div>
                        <div className="px-5">
                            <Input value="Chi hội sinh viên Mỹ Thành Phước" leftIcon={faArrowAltCircleRight} />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="p-2 font-semibold">Uri:</div>
                        <div className="px-5">
                            <Input value={`@${"CHSV.MYTHANHPHUOC"}`} className="text-sm" leftIcon={faTag} />
                        </div>
                    </div>
                    <div className="w-3/4">
                        <div className="p-2 font-semibold">Giới thiệu</div>
                        <div className="px-5">
                            <Textarea
                                value="Chi hội sinh viên Mỹ Thành Phước là nơi tập hợp của tất cả các sinh viên ở TP. Mỹ Tho, huyện Châu Thành và huyện Tân Phước đang học tập và làm việc tại Trường Đại học Cần Thơ, có thể lên trao đổi kinh nghiệm, cập nhật thông tin mới về nhân sự, công tác, hoạt động hiện nay của Chi hội. Đặc biệt, tôi tạo nhóm này dành để thông báo những thông tin chính thống nhất"
                                rows={5}
                            />
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <Label icon={faShareNodes}>Mạng xã hội</Label>
                    <div className="p-5">
                        <div className="p-2 text-facebook">
                            <Input
                                value="http://facebook.com/groups/chsv.my.thanh.phuoc.dhct"
                                leftIcon={faFacebook as any}
                            />
                        </div>
                        <div className="p-2 text-twitter">
                            <Input
                                value="http://twitter.com/groups/chsv.my.thanh.phuoc.dhct"
                                leftIcon={faTwitter as any}
                            />
                        </div>
                        <div className="p-2 text-google">
                            <Input
                                value="http://youtube.com/chanels/chsv.my.thanh.phuoc.dhct"
                                leftIcon={faYoutube as any}
                            />
                        </div>
                        <div className="p-2 text-tiktok">
                            <Input value="http://tiktok.com//chsv.my.thanh.phuoc.dhct" leftIcon={faTiktok as any} />
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <Label icon={faImages}>Hình ảnh</Label>
                    <div className="p-5">
                        <div className="grid grid-cols-[1fr_1fr_1fr] gap-2">
                            <div>
                                <img
                                    src="https://cdn.dribbble.com/users/725005/screenshots/6206615/media/595a28aad51102946e4a956b8c351d29.png?compress=1&resize=400x300&vertical=top"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    src="https://cdn.dribbble.com/users/725005/screenshots/6206615/media/595a28aad51102946e4a956b8c351d29.png?compress=1&resize=400x300&vertical=top"
                                    alt=""
                                />
                            </div>
                            <ImagePicker />
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <Label icon={faImages}>Logo</Label>
                    <div className="p-5">
                        <div className="grid grid-cols-[1fr_1fr_1fr] gap-2">
                            <ImagePicker className="h-40 w-40 rounded-full overflow-hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Label(props: PropsWithChildren<{ icon?: FontAwesomeIconProps["icon"] }>) {
    return (
        <h4 className="font-bold text-dark">
            {props.icon && <FontAwesomeIcon className="px-2" icon={props.icon} />}
            <span>{props.children}</span>
        </h4>
    )
}

function ImagePicker(props: { className?: string }) {
    const ref = useRef<HTMLInputElement>(null)

    return (
        <div
            className={clsx([
                "flex bg-light bg-opacity-20 justify-center items-center cursor-pointer",
                props.className,
            ])}
            onClick={() => ref.current?.click()}
        >
            <label htmlFor="" className="flex flex-1 flex-row gap-2 justify-center items-center text-darkless">
                <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                <span>Upload images</span>
            </label>
            <input className="hidden" ref={ref} type="file" accept=".png,.jpeg"></input>
        </div>
    )
}
