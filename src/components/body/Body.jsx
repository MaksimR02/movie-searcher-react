import './Body.style.css';
import '../../styles/variable-color.css';
import MovieTile from '../MovieTile/MovieTile.jsx';
import MovieList from '../MovieList/MovieList.jsx';

export default function Body() {
  return (
    <div className="container-body">
      <div className="left-side">
        <MovieTile />
        <MovieList />
      </div>
      <div className="right-side"></div>
    </div>
  );
}
