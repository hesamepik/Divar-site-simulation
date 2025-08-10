import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getpost } from 'services/user'
import Loader from '../module/Loader'

function Postlist() {
    const { data, isLoading } = useQuery(["my-post-list"], getpost)

    if (isLoading) return <Loader />

    return (
        <div>
            <h3>لیست پست‌ها</h3>
            {
                data.data.posts ? (
                    data.data.posts.map(post => (
                        <div key={post._id}>
                            <img src={`http://localhost:3400/${post.images[0]}`} alt="" />
                            <div>
                                <p>{post.options?.title}</p>
                                <span>{post.options?.content}</span>
                            </div>
                            <div>
                                <p>{post.createdAt}</p>
                                <span>{post.amount} تومان</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>هیچ پستی پیدا نشد</p>
                )
            }
        </div>
    )
}

export default Postlist
