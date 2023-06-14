import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from '../Firebase/firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => { 
      db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot =>{
          setPosts(snapshot.docs.map(doc => doc.data()))
      })
  }, [])

  return (
    <div className='feed'>
        <div className='feed__header'>
            <h2>Home</h2>
        </div>
        <TweetBox />
        <Post 
                displayName = "Android"
                username = "Android"
                verified = "true"
                text = "Hello Welcome To My React Twitter App built with the help of React, Firebase and its responsive.... Become Android Account owner in this clone. 📌"
                image = "https://img.freepik.com/premium-vector/hello-lettering-banner-poster-sticker-concept-with-text-hello_136321-1283.jpg"
                avatar = "https://pbs.twimg.com/profile_images/1621172542386864138/hzAf9DWB_400x400.jpg"
          />
        {posts.map(post => (
          <Post 
                key = {post.text}
                displayName = {post.displayName}
                username = {post.userName}
                verified = {post.verified}
                text = {post.text}
                image = {post.image}
                avatar = {post.avatar}
          />
        ))}
    </div>
  )
}

export default Feed