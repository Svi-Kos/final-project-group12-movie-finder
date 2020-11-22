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

        return results;
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
