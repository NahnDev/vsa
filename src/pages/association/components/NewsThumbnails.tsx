import clsx from "clsx"
import React from "react"

export default function NewsThumbnails(props: {}) {
    return (
        <div className="p-2 py-4 ">
            <div className={clsx(["flex flex-row gap-2 justify-end items-center"])}>
                <div className="flex-1 rounded-md overflow-hidden">
                    <img src="https://cdn.pixabay.com/photo/2019/06/05/08/37/dog-4253238__480.jpg" alt="" />
                </div>
                <div className="flex-[2]">
                    <div>
                        <h1 className="text-sm text-darker font-bold">
                            Cuộc thi tìm hiểu kiến thức về PrEP tại trường Đại học Cần Thơ năm 2022
                        </h1>
                        <p className="text-xs text-gray">Ngày 29 tháng 10 năm 2022 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
