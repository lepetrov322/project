"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB =  {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
let a = prompt('Один из последних просмотренных фильмов?', "");
let b = prompt('на сколько оцените его?', "");
let c = prompt('Один из последних просмотренных фильмов?', "");
let d = prompt('на сколько оцените его?', "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;