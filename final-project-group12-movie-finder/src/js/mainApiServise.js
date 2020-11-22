import GenresApiService from './apiGenresName';
import ApiService from './apiService';

const genresNameApi = new GenresApiService();
const moviesApiService = new ApiService();

export default class MainApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.resultsPerPage = 12;
  }
  fetchMoviesTrend() {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=14d97542ae4a62e821967220e1ab473a&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
    return fetch(url)
      .then(r => r.json())
      .then(({ results }) => {
        this.incrementPage();
        results.length = this.resultsPerPage;
        console.log(results);

        return results;
      })
      .then((results) => {
        const replacedData = genresNameApi.fetchGenresName()
          .then((genres) => {
            return replaceGenresIdsToNames(genres, results);
            
          });
       
        return replacedData;

      });
      // .then((replacedData) => {
      //   const dataResult = moviesApiService.fetchMovies()
      //     .then((results) => {
      //       return sliceDate();
      //     })
      //   return dataResult;
      // });
   
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
    //  console.log(genre_names)
    return { ...otherProps, genre_names };
  });
}

// function sliceDate(release_date) {
//   const data_years = release_date.slice(0, 4);
  
//   return console.log(data_years);
// }
