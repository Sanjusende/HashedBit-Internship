// App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';
import BookSeat from './Components/BookSeat'; 
import Conf from './Components/BookingConfirmation';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/book-seat/:id" element={<BookSeat />} />
        <Route path="/booking-confirmation" element={<Conf/>} />
        {/* <Route path="/boo" element={<Carousel/>} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;
