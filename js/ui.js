//Create new ui object
class UI {
    constructor() {

    }

    //Method to display search results in UI
    displayResult(img, title, date, rate) {

        //create html template
        const searchHTML = `<div class="col-md-4">
        <div class="card searchCard">
            <div class="card-body text-center">
                <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2${img}" class="searchPic">
            </div>
            <div class="card-footer">
                <h4>${title}</h4>
                <p><span class="director">Director: </span>${date}</p>
                <p><span class="starring">Starring: </span>${rate}</p>
                <button class="btn btn-sm btn-success">Add to collection</button>
                <button class="btn btn-sm btn-warning">Add to wishlist</button>
            </div>
        </div>
    </div>`;

    //Append search results to search container
    searchContainer.insertAdjacentHTML("beforeend", searchHTML);

    }
}