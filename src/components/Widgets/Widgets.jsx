import React from 'react'
import './Widgets.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {TwitterTimelineEmbed, TwitterTweetEmbed} from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
            <SearchOutlinedIcon
            className='widgets__SearchIcon'
             />
             <input placeholder='Search Twitter'
             type = 'text' />
        </div>
        <div className='widgets__widgetContainer'>
            <h2>What's happening</h2>
        <TwitterTweetEmbed
        tweetId='1660655631940894728' />
        <TwitterTimelineEmbed
        sourceType='profile'
        screenName='Android'
        options={{height: 400}}/>
        </div>
    </div>
  )
}

export default Widgets