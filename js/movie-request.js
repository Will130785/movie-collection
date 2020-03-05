//Create new Movie class
class Movie {
    constructor(movie) {
        this.movie = movie;

    }

    //Create asynchronous method to make http request for search
    async getMovie(movie) {
        this.movie = movie;
        //Fetch data and save to variable
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=89181403ff7b2c9c67f78df3c5c2a8db&query=${this.movie}`);

        //Convert returned data to javascript and save in variable
        const responseData = await response.json();

        //Return the converted data
        return responseData;
    }

    //Create asynchronous function to make http request for adding to collection or wishlist
    async addMovie(id) {

        this.id = id;
        //Fetch data and save to variable
        const addResponse = await fetch(`https://api.themoviedb.org/3/movie/${this.id}?api_key=89181403ff7b2c9c67f78df3c5c2a8db`);

        //Convert returned data to javascript and save in variable
        const addResponseData = await addResponse.json();

        //Return the converted data
        return addResponseData;
    }
}