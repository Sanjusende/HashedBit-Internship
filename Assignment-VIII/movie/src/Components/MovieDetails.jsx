// MovieDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';

// Movies data with unique IDs
const movies = [
  { id: 1, title: 'Devara', image: '/Images/DEvra_2.jpg' },
  { id: 2, title: 'Jigra', image: '/Images/Jigra.jpg' },
  { id: 3, title: 'LEGAN', image: '/Images/LEGAN.jpg' },
  { id: 4, title: 'Murder', image: '/Images/Murder.jpg' },
  { id: 5, title: 'NTR', image: '/Images/NTR.jpg' },
  { id: 6, title: 'Veda', image: '/Images/Veda.jpg' },
  // Additional movies...
];

const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from URL
  const movie = movies.find((movie) => movie.id === parseInt(id)); // Find movie by ID

  if (!movie) {
    return <p>Movie not found</p>; // Handle invalid movie ID
  }

  return (
    <div className="p-6">
      <Navbar />
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-80 object-cover mb-6 rounded"
        />
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          delectus labore asperiores veniam! Ullam culpa, ipsa reprehenderit
          quidem accusamus excepturi numquam consequuntur officiis asperiores
          ipsam aperiam molestias molestiae ea non....
        </p>
        <Link
          to={`/book-seat/${id}`}
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Book Seat
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
