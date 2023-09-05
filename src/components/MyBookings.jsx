// MyBookings.jsx
import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useBookedRooms } from './BookedRoomContext';

function MyBookings() {
  const { bookedRooms, setBookedRooms } = useBookedRooms();

  // Save booked rooms to local storage when component is rendered
  useEffect(() => {  
    const retrive = JSON.parse(localStorage.getItem('bookedRooms'));
    if(retrive){
      setBookedRooms(retrive);
    }
  }, []);
  useEffect(() => {  
    localStorage.setItem('bookedRooms', JSON.stringify(bookedRooms));
  }, [bookedRooms]);
  
  return (
    <div>
      {console.log('in last',bookedRooms)}
      <h2>Booking Confirmation</h2>
      {bookedRooms.length === 0 ? (
        <p>No rooms have been booked.</p>
      ) : (
        <div>
          <p>Your room(s) have been booked successfully!</p>
          <h3>Booked Rooms</h3>
          <ul>
            {bookedRooms.map((room) => (
              <li key={room.id}>
                <strong>Room:</strong> {room.name} <br />
                <strong>Time:</strong> {room.time}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Link to="/rooms">Back to Room List</Link>
    </div>
  );
}

export default MyBookings;
