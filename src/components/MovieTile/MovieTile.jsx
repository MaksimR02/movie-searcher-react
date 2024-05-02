import './MovieTile.style.css';

export default function MovieTile({ data }) {
  const posterSrc = data?.medium_cover_image;

  return <img src={posterSrc} alt=""></img>;
}
