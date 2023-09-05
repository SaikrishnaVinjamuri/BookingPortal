// BookedRoomsContext.js
import React, { createContext, useContext, useState,useEffect } from 'react';

const BookedRoomsContext = createContext();

export function useBookedRooms() {
  return useContext(BookedRoomsContext);
}

export function BookedRoomsProvider({ children }) {
  const [bookedRooms, setBookedRooms] = useState([]);
  useEffect(() => {
    const storedBookedRooms = JSON.parse(localStorage.getItem('bookedRooms'));
    if (storedBookedRooms) {
      setBookedRooms(storedBookedRooms);
      console.log("in the context page",storedBookedRooms);
    }
  }, []);
  return (
    <BookedRoomsContext.Provider value={{ bookedRooms, setBookedRooms }}>
      {children}
    </BookedRoomsContext.Provider>
  );
}
