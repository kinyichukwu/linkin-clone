import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './Firebase';

function Header() {
  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className='header'>
        <div class="header__left">
            <img src="https://www.texber.com/wp-content/uploads/2020/04/logo-Linkedin-1-84405_1080x675.png" alt="loho" />
          
            <div class="header__search">
              <SearchIcon />
              <input placeholder='Search' type="text"/>
            </div>
        </div>

        <div class="header__right">
            <HeaderOption title='Home' Icon={HomeIcon}/>
            <HeaderOption title='My Network' Icon={SupervisorAccountIcon}/>
            <HeaderOption title='Jobs' Icon={BusinessCenterIcon}/>
            <HeaderOption title='Messaging' Icon={ChatIcon}/>
            <HeaderOption title='Notifications' Icon={NotificationsIcon}/>
            <HeaderOption title='Me' onClick={logoutOfApp} avata/>
        </div>
    </div>
  )
}

export default Header