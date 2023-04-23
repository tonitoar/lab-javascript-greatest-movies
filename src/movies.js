// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// const movies = [
//     {
//       title: 'The Shawshank Redemption',
//       year: 1994,
//       director: 'Frank Darabont',
//       duration: '2h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9.3
//     },
//     {
//       title: 'The Godfather',
//       year: 1972,
//       director: 'Francis Ford Coppola',
//       duration: '2h 55min',
//       genre: ['Crime', 'Drama'],
//       score: 9.2
//     }
// ]

function getAllDirectors(moviesArray) {

   let alldirectors = moviesArray.map(movie => {
    return movie.director
   }); 

   return alldirectors
};

console.log(getAllDirectors(movies));




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    
    let StevenSpielbbergDrama = moviesArray.filter(movie => 
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    )

    return StevenSpielbbergDrama.length;  

  }
  


























// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) return 0; 


    let totalSum = moviesArray.reduce((acc, movie) => {
        return acc + movie.score;
    }, 0);

    let average = totalSum/moviesArray.length; 
    let roundedAverage= Math.round(average * 100)/100;

    return roundedAverage; 

}















// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

let dramas = moviesArray.filter(movie => movie.genre.includes("Drama"));

if (dramas.length === 0) {
    return 0; 
}


let totalSumDrama = dramas.reduce((acc, movie) => {
    return acc + movie.score;
}, 0); 


let averageDrama = (totalSumDrama / dramas.length);

let roundedAverageDrama = Math.round(averageDrama * 100)/100;

return roundedAverageDrama; 


}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}
















// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}












// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}













// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
