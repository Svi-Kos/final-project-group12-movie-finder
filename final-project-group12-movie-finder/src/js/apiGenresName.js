
export default class GenresApiService {

    constructor() { }
  
    fetchGenresName() {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=14d97542ae4a62e821967220e1ab473a&language=en-US&query`;
        return fetch(url)
            .then(r => r.json())
            .then(({ genres }) => {
                
                // console.log(genres);

                return genres;
            });
    }
}