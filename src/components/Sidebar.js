import React from 'react'
import sidebarImg from "../images/sidebar-img.png";
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-conatiner'>
            <img className='sidebar-image' src={sidebarImg}/>
        </div>
        <div className='sidebar-conatiner'>
            <img className='sidebar-image' src={sidebarImg}/>
        </div>
        <div className='sidebar-conatiner'>
            <img className='sidebar-image' src={sidebarImg}/>
        </div>
    </div>
  )
}
