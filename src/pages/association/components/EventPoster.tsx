import clsx from "clsx"
import React from "react"
import { Link } from "react-router-dom"

export default function EventPoster() {
    return (
        <div className="group h-[30em] overflow-hidden">
            <div className={clsx(["w-full h-full rounded-md overflow-hidden", "grid grid-row-[auto_1fr]", "bg-white"])}>
                <div className="w-full min-h-full">
                    <img
                        className=""
                        src="https://cdn.pixabay.com/photo/2020/01/25/18/48/abstract-4793146__480.jpg"
                        alt=""
                    />
                </div>
                <div className={clsx(["-mt-5", "mx-auto justify-center"])}>
                    <button className={clsx(["bg-secondary ", "py-2 px-5  rounded-sm", "text-white font-semibold"])}>
                        Đăng ký ngay
                    </button>
                </div>

                <div className={clsx(["flex flex-col p-2 overflow-hidden"])}>
                    <p className="text-third font-bold"> 10/9/2022</p>
                    <h2 className="font-bold text-xl text-secondary uppercase">Trung thu cho em 2020</h2>
                    <div className="flex-1 p-2 text-md overflow-auto hide-scrollbar">
                        Vì trung thu là tết thiếu nhi nên chi hội chúng ta có tổ chức chương trình " Trung thu cho em"
                        để dành cho các em nhỏ những khoảnh khắc vui vẻ vào dịp Tết trung thu này nhé
                    </div>
                    <Link to="./123" className=" text-sm text-dark text-center group-hover:scale-105 p-2 button">
                        Xem chi tiết
                    </Link>
                </div>
            </div>
        </div>
    )
}
