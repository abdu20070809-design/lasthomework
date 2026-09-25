

const movies = [
    { title: "Аватар", genre: "фантастика", rating: 8.5, age: 12 },
    { title: "Интерстеллар", genre: "фантастика", rating: 9.0, age: 12 },
    { title: "Джокер", genre: "драма", rating: 8.4, age: 18 },
    { title: "Гарри Поттер", genre: "фэнтези", rating: 7.8, age: 6 },
    { title: "Оно", genre: "ужасы", rating: 7.3, age: 18 }
];

 movies.forEach(function (movie) {
    console.log(movie.title, "--", movie.rating);
});

const popularMovies = movies.filter(function(movie){
    return movie.rating >= 8.0;
});

const adultMovies = movies.filter(function(movie) {
    return movie.age >= 18;
});

const userMovie = prompt("Введите название фильма:");
const foundMovie = movies.find(function(movie) {
    return movie.title === userMovie;
});

if (foundMovie) {
   console.log("Фильм", foundMovie.title);
    console.log("Жанр", foundMovie.title);
    console.log("Рейтинг", foundMovie.rating);
}else{
    console.log("Фильм не найден");
    
}

const hasRating = movies.some(function(movie) {
    return movie.rating === 9.0;
});
console.log(hasRating);

const allAboveSeven = movies.every(function(movie) {
    return movie.rating > 7.0;
});
console.log(hasRating);

function  getMoviesByGenre(movies, genreName) {
    return movies.filter(function (movie) {
        return movie.genre === genreName;
    });
}
console.log(getMoviesByGenre(movies, "Фантастика"));


function checkAge(movie, userAge) {
  const targetMovie = movies.find(function(m) {
    return m.title === movie;
  });

  if (!targetMovie) {
    return "Фильм не найден";
  } else if (userAge >= targetMovie.age) {
    return "Приятного просмотра!";
  } else {
    return "Вам рано смотреть этот фильм";
  }
}

