//UI variables
//Get launch button
const launchBtn = document.querySelector(".btn-launch");
//Get landing section
const landingSection = document.querySelector(".landing");
//Get main section
const mainSection = document.querySelector(".main");
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
const wishlistContainer = document.querySelector(".wishlistItemContainer");
//Init new movie object
const movie = new Movie();
//Init new UI object
const ui = new UI();
//Init new storage object
const storage = new Storage();
//collection object
let movieObject = {};
//Initiate id variables to pass into add item
let collectionId;
let wishlistId;

//Load items in storage and display in UI
document.addEventListener("DOMContentLoaded", () => {
    storage.displayItemsInUI();
});


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
                id: result.id,
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
                storage.addToLocalStorageCollection(movieObject);
                console.log(movieObject);
                ui.createItem(movieObject.id, movieObject.title, movieObject.rating, movieObject.tagline, movieObject.poster, movieObject.backdrop, movieObject.overview, movieObject.runtime, movieObject.budget, collectionContainer);
            } else if(e.target.classList.contains("wishlistBtn")){
                //make http request and handle data
                storage.addToLocalStorageWishlist(movieObject);
                console.log(movieObject);
                ui.createItem(movieObject.id, movieObject.title, movieObject.rating, movieObject.tagline, movieObject.poster, movieObject.backdrop, movieObject.overview, movieObject.runtime, movieObject.budget, wishlistContainer);
            }

        })

}

//Function to remove item from collection or wishlist
removeItem = (e) => {
    //remove item from UI
    e.target.parentElement.parentElement.remove();
};

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
    //Check user has clicked add to collection button
    if(e.target.classList.contains("collectionBtn")){
        //make http request and handle data
        collectionId = e.target.previousElementSibling.textContent;
        addItem(e, collectionId);
    }
});

//Event listener for Add to wishlist button
searchContainer.addEventListener("click", e => {
    //Check user has clicked add to collection button
    if(e.target.classList.contains("wishlistBtn")){
        //make http request and handle data
        wishlistId = e.target.previousElementSibling.previousElementSibling.textContent;
        addItem(e, wishlistId);
    }

    
})

//Event listener for remove from collection button
collectionContainer.addEventListener("click", e => {
    //Check user has clicked remove button
    if(e.target.classList.contains("removeBtn")){
        //remove item
        removeItem(e);
        //Remove from local storage
        let idNumber = Number(e.target.previousElementSibling.textContent);
        storage.removeFromLocalStorage(idNumber);
    }
});

//Event listener for remove from wishlist button or add to collection button
wishlistContainer.addEventListener("click", e => {
    //Check user has clicked remove button
    if(e.target.classList.contains("removeBtn")){
        //remove item
        removeItem(e);
        //Remove from local storage
        let idNumber = Number(e.target.previousElementSibling.textContent);
        storage.removeFromLocalStorage(idNumber);
    
    } 
    //Check user clicked add to collection button
    else if(e.target.classList.contains("addBtn")) {
        //Insert item into collection
        collectionContainer.insertAdjacentHTML("beforeend", e.target.parentElement.parentElement.innerHTML);
        //Remove item from wishlist
        removeItem(e);
        //Remove from wishlist local storage
        let idNumber = Number(e.target.nextElementSibling.textContent);
        storage.removeFromLocalStorage(idNumber);

        //add to collection local storage
        storage.addToLocalStorageCollection(movieItem);
    }

    
})

//Event listener for clear button
clearBtn.addEventListener("click", e => {
    //Prevent default button behaviour
    e.preventDefault();
    //Clear search results
    searchContainer.innerHTML = "";
});

//To open app
launchBtn.addEventListener("click", () => {
    landingSection.style.display = "none";
    mainSection.style.display = "block";
})