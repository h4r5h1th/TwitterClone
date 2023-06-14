import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './TweetBox.css'
import db from '../Firebase/firebase'
import { serverTimestamp } from 'firebase/firestore'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweeetImage] = useState('');

  const sendTweet = (e) =>{
    e.preventDefault();

    db.collection('posts').add({
      displayName: "Android",
      timestamp: serverTimestamp(),
      userName: 'Android',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://pbs.twimg.com/profile_images/1621172542386864138/hzAf9DWB_400x400.jpg'
    })

    setTweetMessage("")
    setTweeetImage('')
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar 
                    src = 'https://pbs.twimg.com/profile_images/1621172542386864138/hzAf9DWB_400x400.jpg'
                  />
                <input
                onChange={(e) => setTweetMessage(e.target.value)}
                value = {tweetMessage}
                type = 'text'
                placeholder="what's happening" />
            </div>
            <input
            onChange={(e) => setTweeetImage(e.target.value)}
            value={tweetImage}
            className='tweetBox__imageInput'
            placeholder='(Optional)Image URL'
            />
            <Button
            onClick ={sendTweet}
            className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox