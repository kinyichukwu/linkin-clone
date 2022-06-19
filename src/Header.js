import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        <div class="header__left">
            <img src="https://www.texber.com/wp-content/uploads/2020/04/logo-Linkedin-1-84405_1080x675.png" alt="loho" />
          
            <div class="header__search">
              <SearchIcon/>
              <input type="text"/>
            </div>
        </div>

        <div class="header__right">
            <HeaderOption title='Home' Icon={HomeIcon}/>
            <HeaderOption title='My Network' Icon={SupervisorAccountIcon}/>
            <HeaderOption title='Jobs' Icon={BusinessCenterIcon}/>
            <HeaderOption title='Messaging' Icon={ChatIcon}/>
            <HeaderOption title='Notifications' Icon={NotificationsIcon}/>
            <HeaderOption title='Me' avata='https://th.bing.com/th/id/OIP.4cU5PAUUxeq5q48SwNzZjAAAAA?w=159&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
        </div>
    </div>
  )
}

export default Header