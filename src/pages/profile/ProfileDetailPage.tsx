import clsx from "clsx"
import React from "react"
import SocialGroup from "../../components/common/SocialGroup"

export default function ProfileDetailPage() {
    return (
        <div className="w-full min-h-screen p-5 bg-lighter  overflow-hidden">
            <div className={clsx(["bg-white rounded-md overflow-hidden", "flex flex-row"])}>
                <div className={clsx(["w-1/4 p-5", "flex flex-col", "justify-center items-center", "bg-lightest"])}>
                    <div className={clsx(["w-40 h-40 rounded-full overflow-hidden", "border-4 border-dark"])}>
                        <img
                            className="w-full h-full"
                            src="https://cdn.pixabay.com/photo/2022/10/03/02/22/seagull-7494831__480.jpg"
                            alt=""
                        />
                    </div>
                    <div className="p-5 flex flex-col justify-center items-center">
                        <h4 className="font-semibold text-lg text-dark text-center">NahnDev</h4>
                        <h5 className="font-bold text-md text-third">Le Thanh Nhan</h5>
                        <p className="text-sm text-darkless text-center w-2/3">
                            Coo gang, co gan hon nua, co gan nhieu hon nua
                        </p>
                    </div>
                    <div className="w-4/5">
                        <SocialGroup />
                    </div>
                </div>
                <div className="w-3/4">
                    <Information />
                </div>
            </div>
        </div>
    )
}

function Information() {
    return (
        <div className="p-5 px-10">
            <div>
                <div className="p-5">
                    <h4 className="font-bold text-dark text-lg">Contact info</h4>
                    <ul className="flex flex-col px-5 p-1">
                        <li>
                            <a className="text-third " href="mailto:nahn.thanhnhan@gmail.com">
                                nahn.thanhnhan@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="">0868674092</a>
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <h4 className="font-bold text-dark  text-lg">Chức danh</h4>
                    <ul className="flex flex-col px-5 p-1">
                        <li>Ủy viên bản chấp hành Mỹ Thành Phước nhiệm kỳ 2022-2023</li>
                        <li>Chi hôi phó chi hội sinh viên Mỹ Thành Phước nhiệm kỳ 2022-2023</li>
                        <li>Ủy viên phong trào Mỹ Thành Phước nhiệm kỳ 2022-2023</li>
                    </ul>
                </div>

                <div className="p-5">
                    <h4 className="font-bold text-dark  text-lg">Thong tin khac</h4>
                    <div className="flex flex-col px-5 p-1">
                        <p>
                            The Special Forces Qualification Course or, informally, the Q Course is the initial formal
                            training program for entry into the United States Army Special Forces. Phase I of the Q
                            Course is Special Forces Assessment and Selection. Wikipedia
                        </p>
                    </div>
                </div>
                <div className="p-5">
                    <h4 className="font-bold text-dark  text-lg">Chia sẻ</h4>
                    <ul className="flex flex-col px-5 p-1">
                        <li>
                            <span>The Special Forces Qualification Course or, informally - </span>
                            <a className="text-third">by Thanh Nhan</a>
                        </li>
                        <div className="border-l-2 border-primary my-5 bg-lightest">
                            <input
                                className={clsx(["p-2 bg-[transparent] w-full focus:outline-none"])}
                                placeholder="Your review"
                            />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
