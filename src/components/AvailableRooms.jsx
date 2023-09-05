import React, { useState } from 'react'
import './AvailableRooms.css';
import { Link } from 'react-router-dom';
import RoomData from './RoomData';
function AvailableRooms() {
  const [rooms,setrooms] = useState();

  
return (
  <div>
      <h2>Available Rooms</h2>
      <ul>
        {RoomData.map((room) => (
          <li key={room.id}>
            {room.available ? (
              <Link to={`/rooms/${room.id}`}>{room.name}</Link>
            ) : (
              <span>{room.name} (Booked)</span>
            )}
          </li>
        ))}
      </ul>
    </div>

  )
}

export default AvailableRooms