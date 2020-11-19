export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.resultsPerPage = 12;
  }
  fetchMovies() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=14d97542ae4a62e821967220e1ab473a&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
    return fetch(url)
      .then(r => r.json())
      .then(({ results }) => {
        this.incrementPage();
<<<<<<< Updated upstream
        results.length = this.resultsPerPage;

=======
        // if (this.searchQuery === 'hello') {
        //   results.length = this.resultsPerDesctopPage;
        // } else if (this.searchQuery === 'sun') {
        //   results.length = this.resultsPerTabletPage;
        // } else {
        //   results.length = this.resultsPerMobilePage;
        // }
        results.length = this.resultsPerPage;
        this.resultsPerPage = 12;
>>>>>>> Stashed changes
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
