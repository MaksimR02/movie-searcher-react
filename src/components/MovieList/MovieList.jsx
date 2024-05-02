import MovieTile from '../MovieTile/MovieTile';
import getRandomMovies from '../services/Movie.service.js';
import { useEffect, useState } from 'react';

export default function () {
  const [movies, setMovies] = useState([]);
  // TODO: check how do data fetching from the company correctly
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRandomMovies();
      setMovies(response.data.movies);
    };
    fetchData();
  }, []);

  return (
    <div className="container-tile">
      {movies.map((item, i) => (
        <MovieTile key={i} data={item}></MovieTile>
      ))}
    </div>
  );
}
