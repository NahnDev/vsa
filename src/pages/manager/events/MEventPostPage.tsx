import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostCreator from "../../../components/post/PostCreator"
import PostManager from "../../../components/post/PostManager"
import EventApi from "../../../stores/api/EventApi"
import PackageApi from "../../../stores/api/PackageApi"
import PostApi from "../../../stores/api/PostApi"
import TPackage from "../../../types/TPackage"
import TPost from "../../../types/TPost"

export default function MEventPostPage() {
    const { aId = "", eId = "" } = useParams()
    const [posts, setPosts] = useState<TPost[]>([])

    const load = async () => {
        try {
            const posts = await PostApi.findAll({ association: aId, event: eId, admin: true })
            setPosts(posts)
        } catch {}
    }
    useEffect(() => {
        load()
    }, [eId])
    return (
        <div className="bg-lighter rounded-md p-5 h-full ">
            <div className="pb-5">
                <PostCreator />
            </div>
            <div className="flex flex-col gap-2">
                {posts.map((post) => (
                    <PostManager data={post} />
                ))}
            </div>
        </div>
    )
}
