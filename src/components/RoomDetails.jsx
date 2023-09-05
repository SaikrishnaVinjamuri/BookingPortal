// RoomDetails.jsx
import React, { useState,useEffect } from 'react';
import RoomData from './RoomData';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useBookedRooms } from './BookedRoomContext';

function RoomDetails() {
  const { id } = useParams();
  const [curr,setCurr] = useState();
  const room = RoomData.find((r) => r.id === parseInt(id, 10));
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState('09:00 AM'); // Initial time selection
  const { bookedRooms, setBookedRooms } = useBookedRooms();
  // useEffect(() => {
  //   localStorage.setItem('bookedRooms', JSON.stringify(bookedRooms));
  // }, [curr]);
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);  
  };
  const handleBooking = () => {
    // Check if the room is available
    if (room && room.available) {
      // Book the room with the selected time
      room.available = false;
      room.bookedTime = new Date();
      console.log('before',bookedRooms);
      setBookedRooms([...bookedRooms, { ...room, time: selectedTime }]);
      // setCurr(room);
      console.log('after',bookedRooms)
      // Navigate to confirmation page
      navigate('/myBookings');
    }
  };
  const checkAndExpireBookings = () => {
    const currentTime = new Date();
    const updatedBookedRooms = bookedRooms.map((bookedRoom) => {
      const bookingTime = new Date(bookedRoom.bookedTime);
      const timeDifference = currentTime - bookingTime;
      const bookingExpired = timeDifference >= 30 * 60 * 1000; // 30 minutes in milliseconds
  
      // If booking has expired, release the room
      if (bookingExpired) {
        RoomData.find((r) => r.id === bookedRoom.id).available = true;
      }
  
      return bookedRoom;
    });
  
    setBookedRooms(updatedBookedRooms);
  };
  
  // Schedule the checkAndExpireBookings function to run every minute
  useEffect(() => {
    const interval = setInterval(checkAndExpireBookings, 60 * 1000); // 1 minute in milliseconds
  
    return () => clearInterval(interval);
  }, [bookedRooms]);

  return (
    <div>
      {room ? (
        <div>
          <h2>{room.name} Details</h2>
          <label htmlFor="time">Select Booking Time:</label>
          <select id="time" value={selectedTime} onChange={handleTimeChange}>
            <option value="09:00 AM">09:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            {/* Add more time options as needed */}
            <option value="05:00 PM">05:00 PM</option>
            <option value="06:00 PM">06:00 PM</option>
          </select>
          <button onClick={handleBooking}>Book Room</button>
        </div>
      ) : (
        <p>Room not found.</p>
      )}
      <Link to="/rooms">Back to Room List</Link>
    </div>
  );
}

export default RoomDetails;
