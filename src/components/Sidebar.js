import React from 'react'
// import assets from '../assets'
import img from "../assets/images/sidebar-img.png"

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-conatiner'>
        <img className='sidebar-image' src={img} alt="/" />
      </div>
      <div className='sidebar-conatiner'>
        <img className='sidebar-image' src={img} alt="/" />
      </div>
      <div className='sidebar-conatiner'>
        <img className='sidebar-image' src={img} alt="/" />
      </div>
    </div>
  )
}
