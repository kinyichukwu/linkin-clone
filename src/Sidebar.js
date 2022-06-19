import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) =>( 
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>)
    
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://github.com/kinyichukwu/Portfolio/blob/main/assets/img/about.jpg?raw=true' alt=''/>
            <Avatar className='sidebar__avata'/>
            <h2>Oselukwue Kinyichukwu</h2>
            <h4>kinyichukwuose@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>5000</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on postf</p>
                <p className='sidebar__statNumber'>5000</p>
            </div>
            
        </div>

        <div className='sidebar__button'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programing')}
                {recentItem('software')}
                {recentItem('developer')}
                {recentItem('design')}
            </div>
    </div>
  )
}

export default Sidebar