import { Badge } from "@mui/material"
import React from "react"
import Chat from "../../../components/chat"
import Input from "../../../components/common/Input"
import Post, { TPostProps } from "../../../components/post"
import PostCreator from "../../../components/post/PostCreator"

const posts: TPostProps[] = [
    {
        data: {
            _id: "1231231231",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
                images: [],
            },
            like: 912,
            share: 12,
            at: Date.now(),
        },
    },
    {
        data: {
            _id: "1231232231",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
                images: [],
            },
            like: 912,
            share: 12,
            at: Date.now(),
        },
    },
    {
        data: {
            _id: "1231sa231231",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
                images: [],
            },
            like: 912,
            share: 12,
            at: Date.now(),
        },
    },
    {
        data: {
            _id: "123123e1231",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
                images: [],
            },
            like: 912,
            share: 12,
            at: Date.now(),
        },
    },
    {
        data: {
            _id: "1231232d231",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
                images: [],
            },
            like: 912,
            share: 12,
            at: Date.now(),
        },
    },
    {
        data: {
            _id: "1231sa2312a31",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
                images: [],
            },
            like: 912,
            share: 12,
            at: Date.now(),
        },
    },
]

export default function AssociationDiscussionPage() {
    return (
        <div className="w-full  flex flex-row relative">
            <div className="flex-1 rounded-sm  ">
                <PostCreator />
                <ul>
                    <li>
                        {posts.map((post) => (
                            <Post data={post.data} key={post.data._id} />
                        ))}
                    </li>
                </ul>
            </div>
            <div className="w-2"></div>
            <div className="bg-white  rounded-md h-full w-[20em] sticky top-0 z-0">
                <section className="p-2">
                    <h4 className="font-bold">Chủ đề</h4>
                    <ul className="flex flex-row flex-wrap p-2 gap-2">
                        <li className="button rounded-full px-5 bg-third text-white">Hopj le</li>
                        <li className="button rounded-full px-5 bg-primary text-white">Su kien va hoat dong</li>
                        <li className="button rounded-full px-5 bg-secondary text-white">Tuyen tinh nguyen vien</li>
                        <li className="button rounded-full px-5 bg-success text-white">Khen thuong</li>
                    </ul>
                </section>
                <section className="p-2">
                    <h4 className="font-bold">Search</h4>
                    <div className="">
                        <Input placeholder="Search" />
                    </div>
                </section>
            </div>
        </div>
    )
}
