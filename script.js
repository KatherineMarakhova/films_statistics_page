"use strict";

let numberOfFilms;
function start() {                  //Кол-во фильмов
    while (numberOfFilms == null || numberOfFilms=='' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {           //DataBase
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

function rememberMyFilms() {        //Ввод фильмов и их рейтинг
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
}
rememberMyFilms();

function detectPersonalLevel() {    //Вывод по кол-ву фильмов
    if (personalMovieDB.count < 10 && personalMovieDB.count > 0){
        console.log("Просмотрено довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель!");
    } else if (personalMovieDB.count >= 30){
        console.log("Да вы киноман!");
    } else {
        console.log('Произошла ошибка!');
    }
}
detectPersonalLevel();

function showMyDB(privat){ //Вывод DataBase в случае не приватного аккаута клиента
    if(!privat){
        console.log(personalMovieDB);
    }
    else{
        console.log('It is not available content');
    }
}
showMyDB(personalMovieDB.private);

function writeYourGenres(){
    for(let i=0; i<3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
    }
}
writeYourGenres();