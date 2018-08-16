# MyReads Project

This is my take on the MyReads project for the Udacity FEWD Nanodegree course. I decided to build it based on the [starter repository](https://github.com/udacity/reactnd-project-myreads-starter) provided.

This is a React app that manages shelves for books that the user either:
1. is `currently reading`
2. `wants to read`
3. has already `read`

The user can add more books through a search function, where the results are taken from the provided API, which simulates a database.
Other libraries used include [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) and [prop-types](https://github.com/facebook/prop-types).
The code has been checked to adhere to the [Project Rubric](https://review.udacity.com/#!/rubrics/918/view) in terms of functionalities, as well as checked for styling to adhere to Udacity's practises.

## How to test
This app can be easily tested in 3 steps:
1. Clone this repository on your machine, open the terminal and `cd` into its folder
2. run `npm install`
3. run `npm start`

The app will be available on your browser at address `localhost:3000`

## Components structure
The following tree structure is a preview of the parent-children relations for the React components
```bash
├── App
│   ├── BooksList
│       ├── BooksList
│           ├── BooksShelf #3x
│               ├── Book #each array.map entry
│                   ├── BookMenu
│   ├── SearchBook
│       ├── Book #each array.map entry
│           ├── BookMenu
```

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
