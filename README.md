## Description

The static files inside `/build` are generated by webpack using uglify and treeshaking to optimize them as much as possible, the project is made with React and Redux, babel transpliles the code for the latest browsers version and axios is used for the POST requests.

The whole webapp is built on the front-end, the `server.js` file is just to deploy on Heroku using node, the entire project is made in a way that it can use whatever back-end language or technology that can serve static files.

The project is live at https://i2x-challenge-francesco.herokuapp.com/

## Requirements

* simple login page with mail and password

* POST to https://i2x-challenge.herokuapp.com/core/login/ the following credentials:

```
{
  "email" : “challenge@i2x.ai“,
  "password" : "pass123"
}
```

Response body provides a token which must be used in the next request header:
`Authorization : JWT token_value`

* Once logged in, GET the audio recordings metadata from: https://i2x-challenge.herokuapp.com/ai/recording/list/

* Display the meta information for each item within a box. The info should be rendered as:
```
{
  "final_script": “transcript text”, # as simple text
  "rating": 4, # as a star rating
  "duration": 920, # e.g. 920 seconds could be displayed as 15 minutes
  "url": “url_to_audio”, # as a playable element
  "created": “date_string” # human readable date (CET)
}
```

* Persist the JWT token such that if the user comes back later and the token is not expired, they should be able to get right inside of their account without any login required (you shouldn’t care about when the token expires).

* Additionally, the user should be able to log out from their account.


## Install
You must have npm installed in your local machine, node comes with npm so if you want you can install it from [Node official website](https://nodejs.org/en/)

clone the repo on your local machine thru the command line

`git clone https://github.com/Kornil/i2x-challenge`

and then run `npm i` to install all the dependencies needed to run this project

after that if you use a *linux OS* modify this script inside `package.json` and run `npm start`, then you can visit _localhost:8080_ on your browser to see the project.

```
"scripts": {
    "start": "NODE_ENV=development webpack-dev-server",
```

if otherwise you are using *mac OS* or a *windows OS* just open `package.json` on your editor and verify the start script matches as follows before running `npm start` to see the website on _localhost:8080_.

```
"scripts": {
    "start": "set NODE_ENV=development & webpack-dev-server",
```