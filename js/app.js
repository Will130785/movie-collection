//UI variables
//Get search input
const searchInput = document.querySelector("#searchInput");
//Get search button
const searchBtn = document.querySelector("#searchBtn");
//Get search result container
const searchContainer = document.querySelector(".searchContainer");

//Init new movie object
const movie = new Movie();
//Init new UI object
const ui = new UI();

//Call get movie function and handle the returned data
movie.getMovie()
.then(result => {
    
    console.log(result);
    //Loop through results
    result.results.forEach(function(item){
    //Capture required data
    let image = item.poster_path;
    let title = item.title;
    let date = item.release_date;
    let rating = item.vote_average;

    //Call displayResult method and pass in extracted data
    ui.displayResult(image, title, date, rating);

    });

    
    
});