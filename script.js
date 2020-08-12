const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};
const films = {};
for (let i=0; i < numberOfFilms; i++){
    const a = prompt('Какой фильм смотрели?', ''),
        b = +prompt('Как вы его оцените (от 0 до 10)', '');

    if (a != null && b != null && a != '' && b !='' && a.length < 50){
        personalMovieDB.movies[a] = b;
    } else {
        console.log("error");
        i--;
    }
}
if (personalMovieDB.count < 10 && personalMovieDB > 0){
    console.log("Просмотрено довольно мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель!");
} else if (personalMovieDB.count >= 30){
    console.log("Да вы киноман!");
} else {
    console.log('Произошла ошибка!');
}
    
console.log(personalMovieDB);