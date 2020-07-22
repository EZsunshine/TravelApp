# FEND Capstone - Travel App

## Project Instructions

This repo is the code for the project `FEND Capstone - Travel App`. The project
contains webpack configurations, express server which connect to 3 different
3-Party-APIs to get the necessary data. The code was produced as the
requirements were understood in the development guide and project requirements.

The goal of this project is to give you practice with:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls
- all learned techniques

## Development

Don't forget to run `npm i` in the beginning to install all needed modules.

To start development you simply run `npm start` for running the server and
`npm run build-dev` to run the webpack-dev-server for the UI part.

Additionally I recommend to run in a separate terminal window `npm t -- --watch`
to run the test suits in parallel in watch-mode. So you're able to see if you
break core functionality.

Please enhance the test cases if you add functionality

## Running with the 3-Party-APIs

* [Geonames API](http://www.geonames.org/export/web-services.html) - Geographical database from which the location data is pulled
* [Weatherbit API](https://www.weatherbit.io/api) - Weather API for weatherforcast within 16 days.
* [Pixabay API](https://pixabay.com/api/docs/) - RESTful interface for searching and retrieving free images and videos

## Extend Options
Incorporate icons into forecast.
Allow user to Print their trip and/or export to PDF.
