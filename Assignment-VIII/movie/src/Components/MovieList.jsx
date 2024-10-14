import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import Navbar from './Navbar';
import Contact from './Contact';

// Movies data with unique IDs
const movies = [
  { id: 1, title: 'Devara', image: './Images/DEvra_2.jpg' },
  { id: 2, title: 'Jigra', image: './Images/Jigra.jpg' },
  { id: 3, title: 'LEGAN', image: '/Images/LEGAN.jpg' },
  { id: 4, title: 'Murder', image: '/Images/Murder.jpg' },
  { id: 5, title: 'NTR', image: '/Images/NTR.jpg' },
  { id: 6, title: 'Veda', image: '/Images/Veda.jpg' },

  { id: 7, title: 'Devara', image: './Images/DEvra_2.jpg' },
  { id: 8, title: 'Jigra', image: './Images/Jigra.jpg' },
  { id: 9, title: 'LEGAN', image: '/Images/LEGAN.jpg' },
  { id: 10, title: 'Murder', image: '/Images/Murder.jpg' },
  { id: 11, title: 'NTR', image: '/Images/NTR.jpg' },
  { id: 12, title: 'Veda', image: '/Images/Veda.jpg' },
  // Add more unique movies here
];

const MovieList = () => {
  return (
    <div className=''>

      <Navbar />
      <Carousel />

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Title Section */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              MOVIES
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 text-semibold md:text-lg">
              Explore the latest movies in our collection.
            </p>
          </div>

          {/* Movie Grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
            {movies.map((movie) => (
              <div key={movie.id} className="w-full max-w-xs mx-auto">
                <div className="mb-2 h-40 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
                  <img
                    src={movie.image || './Images/CTRL.jpg'}
                    alt={movie.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="text-center">
                  <div className="font-bold text-indigo-500 md:text-lg">{movie.title}</div>
                  <p className="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
                    Movie description goes here.
                  </p>

                  {/* View Details Link */}
                  <div className="flex justify-center">
                    <Link
                      to={`/movies/${movie.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact/>
    </div>
    
  );
};

export default MovieList;
