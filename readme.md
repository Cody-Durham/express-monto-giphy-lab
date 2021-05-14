[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express API Lab

For this lab, you will be creating a backend for a completed frontend
application. You will be working on an app called "GAphy" which will display
a bunch of Gifs.

![](images/gaphy.png)

The frontend application has full CRUD functionality, your job is to create the
backend code to make it functional!

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Fulfill the listed requirements.


Build out your backed in the `backend/` directory.

## Requirements

You must create an API that runs at `http://localhost:3000/gifs`. You must have
a few different routes:

| **URL** | **HTTP Verb** |  **Action**| **Description** |
|------------|-------------|------------|------------|
| /gifs         | GET       | index  | list out all gifs
| /gifs          | POST      | create | add a new gif and return a list of all gifs           
| /gifs/:gifId     | PUT | update    | update a gif and redirect to the list of all gifs
| /gifs/:gifId      | DELETE    | destroy  | delete a gif and redirect to the list of all gifs


You should have your database set up to store a collection of gifs. Your model
should have two attributes:

* a `name` for the name of a gif
* a `url` for the url of the gif

If these are named differently, you will have to change the frontend!

A seed file has been provided with a few gifs to load into your database.  But feel free to use the Giphy site to get additional gifs. Be sure to use the full URL that has the`.gif` file extension (e.g.
"https://media.giphy.com/media/3o6ozBUuLfzTCngAFi/giphy.gif").

### CORS

You must install a new package called CORS. 

```js
npm i cors
```


Then include it in your server.js

```js
const cors = require("cors")
```

Add it at the top of your middleware, google cors and the cors library docs on npm to learn more neat things you can do with it

```js
app.use(cors())
```

### Front End
It's currently written in jQuery and is already configured to request gif's from your backend server using the `http://localhost:3000/gifs` url but as of right now your server isn't configured so it won't be able to pull or add any gifs until the server has been configured.

### Tips for Getting Started

* To start, you'll want to set up all your backend folders and files (think: `db` folder, `server.js` file, etc.).
* You'll also want to run `npm init` to create a `package.json` file to manage dependencies (e.g. `express`).
* Set up your server, routes, controller, ect.
* Once you have your back end running on `http://localhost:3000/gifs`, open `index.html` on the front end to test your routes via the frontend buttons.


### Bonus - Add A Second Model

Try adding a second model that allows a user to favorite one or more giphys.

### Bonus -  Add A React Front End

Try building out a React front end that reproduces the current functionality built in jQuery.

