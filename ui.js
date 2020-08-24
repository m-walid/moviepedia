class UI {
  constructor() {
    this.container = document.querySelector(".container");
    this.err = document.querySelector(".err");
  }
  showMovie(movie) {
    this.container.innerHTML+= `
        <div class="movie">
        <div>
          <div class="title">${movie.Title} (<span class="year">${movie.Year}</span>)</div>
          <img
            class="poster"
            src="${movie.Poster}"
            alt="${movie.Title}"
            class="poster"
          />
        </div>
        <div class="info">
          <div class="type rw"><span>${movie.Type}</span></div>
          <div class="rating rw">
            <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank"><img src="logo-imdb.svg" alt="" srcset="" /> </a><span>${movie.imdbRating}</span>
            <div class="votes rw">Votes: <span>${movie.imdbVotes}</span></div>
          </div>

          <div class="runtime rw">Runtime: <span>${movie.Runtime}</span></div>
          <div class="genre rw">Genre: <span>${movie.Genre}</span></div>
          <div class="rated rw">Rated <span>${movie.Rated}</span></div>
          <div class="realesed rw">Release Date: <span>${movie.Released}</span></div>
          <div class="actors rw">
            Actors:
            <span>
            ${movie.Actors}
            </span>
          </div>
          <div class="language rw">Language: <span>${movie.Language}</span></div>
          <div class="country rw">Country: <span>${movie.Country}</span></div>
          <div class="plot rw">
          ${movie.Plot}
          </div>
        </div>
      </div>
      <div class="download">
        <a href="https://rarbgaccess.org/torrents.php?imdb=${movie.imdbID}&order=seeders&by=DESC" target="_blank" class="rarbg">rarbg</a>
        <a href="https://subscene.com/subtitles/searchbytitle?query=${movie.Title}" target="_blank" class="subs">subscene</a>
      </div>`;
    setTimeout(
      () => document.querySelector(".movie").classList.add("show-movies"),
      1
    );
  }

  clearMovie() {
    this.container.innerHTML = '<div class="loader"></div>';
  }

  showMovies(movies) {
    const moviesContainer = document.createElement("div");
    moviesContainer.classList.add("movies-container");

    movies.forEach((movie) => {
      moviesContainer.innerHTML += `
      <div class="movie-card ">
          <img
            src="${movie.Poster}"
            alt="${movie.Title}"
            class="sm-poster"
          />
          <div class="sm-title">${movie.Title}</div>
          <div class="sm-year">${movie.Year}</div>
          <div class="sm-type"><span>${movie.Type}</span></div>
          <button imdbID="${movie.imdbID}" class="show-btn">show</button>
        </div>
      `;
    });
    this.container.appendChild(moviesContainer);
    let i = 100;
    setTimeout(
      () =>
        document.querySelectorAll(".movie-card").forEach((card) => {
          card.style.transitionDelay = `${i}ms`;
          i += 100;
          card.classList.add("show-movies");
        }),
      1
    );
  }

  showLoader() {
    document.querySelector(".loader").style.display = "block";
  }

  hideLoader() {
    document.querySelector(".loader").style.display = "none";
  }

  showErr(msg) {
    this.err.textContent = msg;
    this.err.style.display = "block";
    setTimeout(() => (this.err.style.display = "none"), 2000);
  }
}
