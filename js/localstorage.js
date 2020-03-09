//Add to local storage
//Initiate storage variables
let collection;
let wishlist;
let movieItem;

//Storage class
class Storage {
    constructor() {

    }

    //Method to display items in local storage
    displayItemsInUI() {
        //Check storage for data
        if(localStorage.getItem("wishlist") === null || localStorage.getItem("collection") === null) {
            //If empty return empty array
            collection = [];
            wishlist = [];
        } else {
            //If storage contains data, return that data
            wishlist = JSON.parse(localStorage.getItem("wishlist"));
            collection = JSON.parse(localStorage.getItem("collection"));
        }

        if(wishlist) {
            wishlist.forEach(item => {
                ui.createItem(item.id, item.title, item.rating, item.tagline, item.poster, item.backdrop, item.overview, item.runtime, item.budget, wishlistContainer);
            });
        }

        if(collection) {
            collection.forEach(item => {
                ui.createItem(item.id, item.title, item.rating, item.tagline, item.poster, item.backdrop, item.overview, item.runtime, item.budget, collectionContainer)
            })
        }

    }

    //Method to add collection items to local storage
    addToLocalStorageCollection(item) {

        //Check storage for data
        if(localStorage.getItem("collection") === null) {
            //If empty return empty array
            collection = [];
        } else {
            //If storage contains data, return that data
            collection = JSON.parse(localStorage.getItem("collection"));
        }
        //Push item to storage array
        collection.push(item);
        //Set back to local storage
        localStorage.setItem("collection", JSON.stringify(collection));
    }

    //Method to add wishlist item to local storage
    addToLocalStorageWishlist(item) {

        //Check storage for data
        if(localStorage.getItem("wishlist") === null) {
            //If empty return empty array
            wishlist = [];
        } else {
            //If storage contains data, return that data
            wishlist = JSON.parse(localStorage.getItem("wishlist"));
        }
        //Push item to storage array
        wishlist.push(item);
        //Set back to local storage
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    //Method to remove collection item from local storage
    removeFromLocalStorage(id) {
        console.log(id);
        //Check storage for data
        if(localStorage.getItem("wishlist") === null || localStorage.getItem("collection") === null) {
            //If empty return empty array
            collection = [];
            wishlist = [];
        } else {
            //If storage contains data, return that data
            wishlist = JSON.parse(localStorage.getItem("wishlist"));
            collection = JSON.parse(localStorage.getItem("collection"));
        }

        collection.forEach((item, index) => {
            if(item.id === id) {
                collection.splice(index, 1);
                movieItem = item;
            }
        });

        wishlist.forEach((item, index) => {
            if(item.id === id) {
                wishlist.splice(index, 1);
                movieItem = item;
            }

        });

        localStorage.setItem("collection", JSON.stringify(collection));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

    }
}