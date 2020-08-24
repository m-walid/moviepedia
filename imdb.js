class IMDB {
  constructor() {
    this.key = "88a6cb56";
    this.domain = "https://omdbapi.com";
  }

  async getMovie(id) {
    const movieResp = await fetch(`${this.domain}/?apikey=${this.key}&i=${id}`);
    const movieData = await movieResp.json();
    return movieData;
  }

  async getMovies(title) {
    const searchResp = await fetch(
      `${this.domain}/?apikey=${this.key}&s=${title}`
    );
    const searchData = await searchResp.json();
    const exactSearch = await fetch(
      `${this.domain}/?apikey=${this.key}&t=${title}`
    );
    const exactData = await exactSearch.json();
    if (searchData.Response === "False" && exactData.Response === "False") {
      throw new Error("not found");
    } else {
      let movies = [];
      if (searchData.Response !== "False") movies = searchData.Search;
      if (exactData.Response !== "False") {
        if (searchData.Response !== "False") {
          if (movies[0].imdbID === exactData.imdbID) return movies;
        }
        movies.unshift(exactData);
      }
      return movies;
    }
  }
}
