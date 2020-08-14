# MyReads Project

## App Overview

The MyReads project is a bookshelf app that allows the user to select and categorize books as either currently reading, want to read, or have read.  The project uses React to build the application and provides an API server and client library that will persist information as the user interact with the application, but only with specified search terms as documented in SEARCH_TERMS.md.

## App Functionality

The main page of the appliction displays a list of "shelves," each of which constains a number of books.  The three shelves are:
    * Currently Reading
    * Want to Read
    * Read

Each books has a control that lets the user select the shelf for that book. When the user selects a different shelf, the book is moved accordingly. The default value for the control indicates the book's current allocated shelf.

The main page also has a link to a search page -- i.e. /search -- that allows the user to find books to add to the library. The search page has a text input.  As the value of the text input changes, the books that match the query are displayed on the page, along with a control that allows the user add the book to the library. The search page also has a link to the root URL (i.e. '/'), which leads back to the main page. When the user navigates back to the main page, the books are shelved according the the user's selection on the search page.

## Project Rubric
https://review.udacity.com/#!/rubrics/918/view

## TL;DR

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for use with the app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css 
    ├── App.js 
    ├── App.test.js 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css 
    └── index.js 
```

## Backend Server

The provided backend server file [`BooksAPI.js`](src/BooksAPI.js) contains the methods used to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
