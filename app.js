const search = document.querySelector(".search-bar");

const rarbgBt = document.querySelector(".rarbg");

const subBt = document.querySelector(".subs");

const imdb = new IMDB();
const ui = new UI();

search.addEventListener(
  "input",
  debounce((e) => {
    const text = e.target.value;
    ui.clearMovie();
    ui.showLoader();
    if (text !== "") {
      imdb
        .getMovies(text)
        .then((movies) => {
          ui.hideLoader()
          ui.showMovies(movies);
        })
        .catch((err) =>{
          ui.hideLoader();
          ui.showErr(err.message)
        } );
    } else {
      ui.clearMovie();
    }
  }, 450)
);

document.querySelector(".container").addEventListener("click", (e) => {
  if (e.target.classList.contains("show-btn")) {
    search.value = "";
    const id = e.target.getAttribute("imdbID");
    imdb
      .getMovie(id)
      .then((movie) => {
        ui.clearMovie();
        ui.showMovie(movie);
      })
      .catch((err) => ui.showErr(err.message));
  }
});

document.querySelector("nav").addEventListener("click", () => ui.clearMovie());

function debounce(callback, delay) {
  let interval;
  return function (e) {
    clearInterval(interval);
    interval = setTimeout(() => callback(e), delay);
  };
}
