# MyReads Project

## Introduction:

- This is the "MyReads" React app for udacity's react course. It contains 2 pages, the first simulates a library containing 3 shelves (Currently Reading, Want to Read, Read). The second is a search page wich searches the backend for books according to a query provided by the user (only certain search terms provided by udacity will work on this project).

- It utilizes a backend and an API (BooksAPI) provided by Udacity.

### Features:

#### Consists of 5 components:

- App.js: Main component which utilizes BrowserRouter to navigate between the main and search pages.

- Page.js: This is the main page of the app which houses the bookshelves and has a button linking to the search page.

- Search.js: This is the search page which has an input field for the user to enter their query.

- BookShelf.js: The BookShelf component whose title determines which Book component will be stored in it.

- Book.js: The Book component has an image, a title and authors. Each book also has a drop down menu to choose the appropriate shelf said book should be stored in.


