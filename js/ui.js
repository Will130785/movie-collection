//Create new ui object
class UI {
    constructor() {

    }

    //Method to display search results in UI
    displayResult(img, title, date, rate, id) {

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
                <p class="id">${id}</p>
                <button class="btn btn-sm btn-success collectionBtn">Add to collection</button>
                <button class="btn btn-sm btn-warning wishlistBtn">Add to wishlist</button>
            </div>
        </div>
    </div>`;

    //Append search results to search container
    searchContainer.insertAdjacentHTML("beforeend", searchHTML);

    }

    //Method to display collection item in ui
    createItem(id, title, rate, tag, poster, back, desc, run, budg, container) {

        //create html variable and insert data
        const collectionHTML = `
        <div class="card collectionItem">
            <div class="card-head itemHeader p-3">
                <div class="row">
                    <div class="col-md-6">
                        <h3>${title}</h3>
                    </div>
                    <div class="col-md-3">
                        <h3>${rate}</h3>
                    </div>
                    <div class="col-md-3">
                        <p>${tag}</p>
                    </div>
                </div>
            </div>
            <div class="card-body itemBody p-3">
                <div class="row">
                    <div class="col-md-4">
                        <div class="itemPic">
                            <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster}" class="cover" alt="Poster image">
                        </div>
                    </div>
                    <div class="col-md-8">
                        
                    </div>
                </div>
                <div class="row p-3 card-det">
                    <p class="itemDescription mt-5">${desc}</p>
                    <p>Runtime: <span class="runtime">${run}</span> mins</p>
                    <p>Budget: $<span class="budget">${budg}</span></p>
                </div>
            </div>
            <div class="card-footer itemFooter">
                <button class="btn btn-lg btn-success addBtn">Add to collection</button>
                <div class="id">${id}</div>
                <button class="btn btn-lg btn-danger removeBtn">Remove movie</button>
            </div>

        </div>
        `

        //Insert html into UI
        container.insertAdjacentHTML("beforeend", collectionHTML)
    }
}