import React, { useEffect } from 'react'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
import { useSelector } from 'react-redux'

const Home = () => {
    const { isLoggedIn } = useSelector(state => state.user)
    const { mainPosts } = useSelector(state => state.post)

    return (
        <>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c} post={c} />
                )
            })}
        </>
    )
}

export default Home