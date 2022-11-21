import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostCreator from "../../../components/post/PostCreator"
import PostManager from "../../../components/post/PostManager"
import PostApi from "../../../stores/api/PostApi"
import TPost from "../../../types/TPost"

export default function PostPage() {
    const { aId = "" } = useParams()
    const [posts, setPosts] = useState<TPost[]>([])

    const handleLoad = async () => {
        const posts = await PostApi.findAll({ association: aId, admin: true })
        setPosts(posts)
    }

    useEffect(() => {
        handleLoad()
    }, [])

    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="p-2">
                <PostCreator />
            </div>
            <div className="bg-lighter rounded-md p-5">
                <div className="grid grid-cols-2 gap-2">
                    {posts.map((post) => (
                        <PostManager onChange={handleLoad} data={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}
