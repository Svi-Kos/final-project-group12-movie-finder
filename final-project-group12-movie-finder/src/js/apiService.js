export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchMovies() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=14d97542ae4a62e821967220e1ab473a&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
    fetch(url)
      .then(r => r.json())
      .then(data => {
        this.page += 1;
      });
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
