import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';

function Post({displayName, username, verified, text, image, avatar}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar
                src = {avatar}
            />
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>{displayName}
                    <span className = "post__headerSpecial">
                                {verified && <VerifiedIcon className = "post__badge" />}
                                @{username}
                            </span>
                    </h3>
                </div>
                <div className = 'post__headerDescription'>
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt="" />
            <div className='post__footer'>
                <ChatBubbleOutlineOutlinedIcon />
                <RepeatOutlinedIcon />
                <FavoriteBorderOutlinedIcon />
                <PublishOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default Post