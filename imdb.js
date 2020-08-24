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
    if (searchData.Response !== "False") {
      return searchData.Search;
    } else {
      throw new Error("not found");
    }
  }
}
