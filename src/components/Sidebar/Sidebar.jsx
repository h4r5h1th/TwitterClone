import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon 
          className='sidebar__twitterIcon'
        />
        <SidebarOptions
        active
        Icon={HomeIcon}
        text='Home'
        />
        <SidebarOptions 
        Icon={SearchIcon}
        text='Explore'
        />
        <SidebarOptions 
        Icon={NotificationsNoneOutlinedIcon}
        text='Notifications'
        />
        <SidebarOptions 
        Icon={EmailOutlinedIcon}
        text='Message'
        />
        <SidebarOptions 
        Icon={BookmarkBorderIcon}
        text='Bookmarks'
        />
        <SidebarOptions 
        Icon={ListAltOutlinedIcon}
        text='Lists'
        />
        <SidebarOptions 
        Icon={PersonOutlineOutlinedIcon}
        text='Profile'
        />
        <SidebarOptions 
        Icon={MoreHorizOutlinedIcon}
        text='More'
        />
        <Button className='sidebar__tweet'
        variant='outlined'><p>Tweet</p><h6><CreateIcon /></h6></Button>
    </div>
  )
}

export default Sidebar