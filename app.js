const search = document.querySelector(".search-bar");

const rarbgBt = document.querySelector(".rarbg");

const subBt = document.querySelector(".subs");

const imdb = new IMDB();
const ui = new UI();
search.addEventListener("keyup", (e) => {
  const text = e.target.value;
  ui.clearMovie();
  if (text !== "") {
    imdb
      .getMovies(text)
      .then((movies) => {
        ui.showMovies(movies);
      })
      .catch((err) => console.log(err.message));
  } else {
    ui.clearMovie();
  }
});

document.querySelector(".container").addEventListener("click", (e) => {
  if (e.target.classList.contains("show-btn")) {
    search.value = "";
    const id = e.target.getAttribute("imdbID");
    imdb
      .getMovie(id)
      .then((movie) => {
        ui.showMovie(movie);
      })
      .catch((err) => console.log(err.message));
  }
});

document.querySelector("nav").addEventListener("click", () => ui.clearMovie());