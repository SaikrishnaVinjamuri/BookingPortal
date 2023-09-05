import React from 'react'
import {Link} from "react-router-dom"
import './Header.css';

const Header = () => {
  return (
    <div className='Container'>
      <div className='link_route_bar'>
        <Link to="/" className='link_route'>Home</Link>
        <Link to="/rooms" className='link_route'>all rooms</Link>
        <Link to="/myBookings" className='link_route'>My bookings</Link>  
      </div>  
    </div>      
  )
}

export default Header