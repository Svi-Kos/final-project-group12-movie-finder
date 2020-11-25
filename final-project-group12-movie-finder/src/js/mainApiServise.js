import GenresApiService from './apiGenresName';

const genresNameApi = new GenresApiService();

export default class MainApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.resultsPerPage = 12;
    this.totalPages = 1;
  }
  fetchMoviesTrend() {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=14d97542ae4a62e821967220e1ab473a&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
    return fetch(url)
      .then(r => r.json())
      .then(({ results, total_pages }) => {
        // this.incrementPage();
        results.length = this.resultsPerPage;
        this.totalPages = total_pages;
        return results;
      })
      .then((results) => {
       const replacedData = genresNameApi.fetchGenresName()
         .then((genres) => {
            return replaceGenresIdsToNames(genres, results);
         });
        // console.log(replacedData);
        return replacedData;
      });
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

function replaceGenresIdsToNames(genres, results) {
  return results.map(({ genre_ids, ...otherProps }) => {
    const genre_names = genre_ids.map((genreId) => {
      const { name } = genres.find(({ id }) => id === genreId);
      return name;
    });
    return { ...otherProps, genre_names };
  });
}
