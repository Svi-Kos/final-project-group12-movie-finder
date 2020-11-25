export default class MainApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.resultsPerPage = 12;
    this.totalPages = 1;
  }
  fetchMoviesTrend() {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=14d97542ae4a62e821967220e1ab473a&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
    return fetch(url)
      .then(r => r.json())
<<<<<<< Updated upstream
      .then(({ results }) => {
        // this.incrementPage();
        results.length = this.resultsPerPage;
        console.log(results);

        return results;
=======
      .then(({ results, total_pages }) => {
        // this.incrementPage();
        results.length = this.resultsPerPage;
        this.totalPages = total_pages;
// console.log(results);
        return results;
      })
      .then((results) => {
       const replacedData = genresNameApi.fetchGenresName()
         .then((genres) => {
            return replaceGenresIdsToNames(genres, results);
         });
        return replacedData;
>>>>>>> Stashed changes
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
