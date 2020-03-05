//Create new Movie class
class Movie {
    constructor() {

    }

    //Create asynchronous method to make http request
    async getMovie() {
        //Fetch data and save to variable
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=89181403ff7b2c9c67f78df3c5c2a8db&query=snatch`);

        //Convert returned data to javascript and save in variable
        const responseData = await response.json();

        //Return the converted data
        return responseData;
    }
}