import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import React, { useState } from "react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import Colors from "../../../constants/Colors"
import ReactQuill from "react-quill"
// import "react-quill/dist/quill.snow.css"
// import "react-quill/dist/quill.core.css"
import "react-quill/dist/quill.bubble.css"
import Editor from "../../../components/common/Editor"

export default function EventDetailPage() {
    return (
        <div className="w-full bg-lightest rounded-md">
            <div className={clsx(["flex flex-row p-2"])}>
                <div className="flex-1 p-2">
                    <div className={clsx("mx-auto bg-white p-5 rounded-md")}>
                        <Content />
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-2">
                    <div className="h-10"></div>
                    <div className="w-full flex justify-center">
                        <button
                            className={clsx(["button rounded-sm", " bg-secondary text-white", "p-2 px-20 m-2 mx-auto"])}
                        >
                            Đăng ký tham gia
                        </button>
                    </div>
                    <div className=" ">
                        <TimeLine />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Banner() {
    return (
        <div className="w-full h-80 overflow-hidden rounded-md ">
            <img
                className="w-full pt-[50%] -translate-y-[50%] "
                src="https://cdn.tgdd.vn/2020/08/CookRecipe/GalleryStep/dua-leo-xao-thit-ga-15.jpg"
                alt=""
            />
        </div>
    )
}

function TimeLine() {
    return (
        <div>
            <h4 className="p-2">Kế hoạch hoạt động</h4>
            <VerticalTimeline layout="1-column-left" lineColor={Colors.light}>
                <VerticalTimelineElement
                    iconClassName="bg-dark text-white"
                    icon={<FontAwesomeIcon icon={faCalendarAlt} />}
                >
                    <div className="p-2 m-0">
                        <h6 className="text-dark text-sm">Ngay 12/10/2022</h6>
                        <h4 className="text-third font-bold">Laapj kee hoach va trinh ban chap trinh ky duyet</h4>
                        <div className="p-2 text-sm">Tất cả thầy cô giáo, viên chức, người lao động.</div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconClassName="bg-dark text-white"
                    icon={<FontAwesomeIcon icon={faCalendarAlt} />}
                >
                    <div className="p-2 m-0">
                        <h6 className="text-dark text-sm">Ngay 12/10/2022</h6>
                        <h4 className="text-third font-bold">Laapj kee hoach va trinh ban chap trinh ky duyet</h4>
                        <div className="p-2 text-sm">
                            Tất cả thầy cô giáo, viên chức, người lao động, sinh viên chính qui tại trường, học viên cao
                            học, sinh viên học ngành hai, học viên Aptech và học sinh thuộc Trường đều được tham gia.
                        </div>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

function Content() {
    const [value, setValue] = useState("")
    return (
        <div className="p-2 duration-200">
            <Banner />

            <div></div>
        </div>
    )
}
