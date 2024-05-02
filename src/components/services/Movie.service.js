export default async function getRandomMovies() {
  return fetch('/api/v2/list_movies.json').then((res) => res.json());
}
