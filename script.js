const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

const a = prompt('Какой фильм смотрели?', ''),
      b = prompt('Как вы его оцените (от 0 до 10)', ''),
      c = prompt('Какой фильм смотрели?', ''),
      d = prompt('Как вы его оцените (от 0 до 10)', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);