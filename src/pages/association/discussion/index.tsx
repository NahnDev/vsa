import { Badge } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Chat from "../../../components/chat"
import Input from "../../../components/common/Input"
import Post, { TPostProps } from "../../../components/post"
import PostCreator from "../../../components/post/PostCreator"
import PostApi from "../../../stores/api/PostApi"
import TPost from "../../../types/TPost"

export default function AssociationDiscussionPage() {
    const { aId = "" } = useParams()
    const [posts, setPosts] = useState<TPost[]>([])
    const load = async () => {
        try {
            const posts = await PostApi.findAll({ association: aId })
            setPosts(posts)
        } finally {
        }
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <div className="w-full  flex flex-row relative">
            <div className="flex-1 rounded-sm  ">
                <PostCreator />
                <ul>
                    <li>
                        {posts.map((post) => (
                            <Post data={post} key={post._id} />
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
