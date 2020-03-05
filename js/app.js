//UI variables
//Get search input
const searchInput = document.querySelector("#searchInput");
//Get search button
const searchBtn = document.querySelector("#searchBtn");
//Get clear button
const clearBtn = document.querySelector("#clearBtn");
//Get search result container
const searchContainer = document.querySelector(".searchContainer");
//Get collection container
const collectionContainer = document.querySelector(".movieContainer");
//Get wishlist container
const wishlistContainer = document.querySelector(".wishlistContainer");
//Init new movie object
const movie = new Movie();
//Init new UI object
const ui = new UI();
//collection object
let movieObject = {};

let collectionId;
let wishlistId;


//function to make HTTP request and display search results
makeMovieRequest = e => {
    //Prevent default button behaviour
    e.preventDefault();
    //Clear previous searches
    searchContainer.innerHTML = "";

    //Call get movie function and handle the returned data
    movie.getMovie(searchInput.value)
.then(result => {
    
    console.log(result);
    //Loop through results
    result.results.forEach(function(item){

    //Capture required data
    let image = item.poster_path;
    let title = item.title;
    let date = item.release_date;
    let rating = item.vote_average;
    let id = item.id;

    //Call displayResult method and pass in extracted data
    ui.displayResult(image, title, date, rating, id);

    //Clear search input
    searchInput.value = "";

    });

    
    
});

}

//Function to add item to wishlist or collection
addItem = (e, id) => {
    movie.addMovie(id)
        .then(result => {
            console.log(result);
            //Add data to movie object
            movieObject = {
                title: result.title,
                rating: result.vote_average,
                tagline: result.tagline,
                poster: result.poster_path,
                backdrop: result.backdrop_path,
                overview: result.overview,
                runtime: result.runtime,
                budget: result.budget
            };

            if(e.target.classList.contains("collectionBtn")){
                //make http request and handle data
                
                console.log(movieObject);
                ui.createItem(movieObject.title, movieObject.rating, movieObject.tagline, movieObject.poster, movieObject.backdrop, movieObject.overview, movieObject.runtime, movieObject.budget, collectionContainer);
            } else if(e.target.classList.contains("wishlistBtn")){
                //make http request and handle data
                
                console.log(movieObject);
                ui.createItem(movieObject.title, movieObject.rating, movieObject.tagline, movieObject.poster, movieObject.backdrop, movieObject.overview, movieObject.runtime, movieObject.budget, wishlistContainer);
            }


            
            //call displayCollectionItem method and pass in data from movieObject
            // ui.createItem(movieObject.title, movieObject.rating, movieObject.tagline, movieObject.poster, movieObject.backdrop, movieObject.overview, movieObject.runtime, movieObject.budget);

        })

}

//Event listener for search button
searchBtn.addEventListener("click", makeMovieRequest);
//Event listener for enter press
searchInput.addEventListener("keypress", e => {
    //Check that enter key is pressed
    if(e.keyCode === 13) {
        //Make movie request
        makeMovieRequest(e);
    }

});

//Event listener for Add to collection button
searchContainer.addEventListener("click", e => {
    console.log(e.target.previousElementSibling.textContent);
    //Check user has clicked add to collection button
    if(e.target.classList.contains("collectionBtn")){
        //make http request and handle data
        collectionId = e.target.previousElementSibling.textContent;
        addItem(e, collectionId);
    }
});

//Event listener for Add to wishlist button
searchContainer.addEventListener("click", e => {
    console.log(e.target.previousElementSibling.textContent);
    //Check user has clicked add to collection button
    if(e.target.classList.contains("wishlistBtn")){
        //make http request and handle data
        wishlistId = e.target.previousElementSibling.previousElementSibling.textContent;
        addItem(e, wishlistId);
    }

    
})

//Event listener for clear button
clearBtn.addEventListener("click", e => {
    //Prevent default button behaviour
    e.preventDefault();
    //Clear search results
    searchContainer.innerHTML = "";
})