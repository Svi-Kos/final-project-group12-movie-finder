const BASE_URL = 'https://api.themoviedb.org/3/movie';

function fetchMovie(movie_id) {
  const url = `${BASE_URL}/${movie_id}?api_key=14d97542ae4a62e821967220e1ab473a&language=en-US`;
  return fetch(url)
    .then(list => list.json())
    .catch(error => {
      console.log(error);
    });
}

export default { fetchMovie };
