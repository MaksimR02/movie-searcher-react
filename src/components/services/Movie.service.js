export default async function getRandomMovies() {
  return fetch('//api/v2/list_movies.json?quality=3D').then((res) =>
    res.json(),
  );
}
