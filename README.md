# movie-collection<br>
A movie collection and search application<br><br>
The application allows the user to search for a movie by the title. A request is then made to the Movie Database API and returns the first 20 results, which are then displayed in the UI.<br><br>
The user can then choose to add a movie to their collection or wishlist. When the user clicks to add to one of the lists another request is made using the movies unique id and returns more detail about the chosen movie along with displaying it in the corresponding area of the UI.<br><br>
When the user adds a movie to the collection or wishlist, the data is also persisted to local storage. The movies that are in local storage will be displayed in the UI upon the application being loaded.
