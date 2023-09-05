import React from 'react'
import { Routes, Route } from "react-router-dom";
import AvaliableRooms from './AvailableRooms';
import RoomDetails from './RoomDetails';
import NoPage from './NoPage';
import Home from './Home';
import MyBookings from './MyBookings';


function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/rooms" element={<AvaliableRooms/>}/>
            <Route path="/rooms/:id" element={<RoomDetails/>} />
            <Route path="/myBookings" element={<MyBookings/>}/>
            {/* <Route path="/time" element={<TimePage/>}/> */}
            <Route path="*" element={<NoPage/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes