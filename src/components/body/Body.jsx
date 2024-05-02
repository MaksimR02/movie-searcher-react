import './Body.style.css';
import '../../styles/variable-color.css';
import MovieTile from '../MovieTile/MovieTile.jsx';

export default function Body() {
  return (
    <div className="container-body">
      <div className="left-side">
        <MovieTile />
      </div>
      <div className="right-side"></div>
    </div>
  );
}
