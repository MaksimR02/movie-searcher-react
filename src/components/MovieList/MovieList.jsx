import MovieTile from '../MovieTile/MovieTile';
import getRandomMovies from '../services/Movie.service.js';
import { useEffect, useState } from 'react';

export default function () {
  const [movies, setMovies] = useState(null);
  // TODO: check how do data fetching from the company correctly
  // TODO: разаобраться с кодом ниже
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRandomMovies();
      setMovies(response.data.movies);
    };
  }, []);

  return (
    <div className="container-tile">
      {movies.map((item) => (
        <MovieTile data={item}></MovieTile>
      ))}
    </div>
  );
}
