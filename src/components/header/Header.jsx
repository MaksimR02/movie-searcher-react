import './Header.style.css';
import '../../styles/variable-color.css';

export default function Header() {
  return (
    <div className="container-header">
      <h1>Movie Searcher</h1>
      <input
        className="input-search-movie"
        type="text"
        placeholder="Search movie"
      />
      <span>Login</span>
    </div>
  );
}
