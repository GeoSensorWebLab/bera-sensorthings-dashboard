# BERA SensorThings API Dashboard

A dashboard for viewing SensorThings data for the [BERA Project](http://www.bera-project.org). It is a fork of the [Simple STA Dashboard](https://github.com/GeoSensorWebLab/sensorthings-dashboard) with additional info for the BERA project.

You can view the dashboard online at http://dashboard.bera-project.org.

## Requirements

* Node 6 series
* NPM 3 series

## Development Environment

The app is JavaScript and builds using [Node.js](https://nodejs.org/). To start, install the base Node packages:

    $ npm install

Now you can start the local development server:

    $ node preview.js

That's all. The server is now running at [http://localhost:4200/](http://localhost:4200/).

## Production Deployment

This web app is compatible with Heroku and Heroku-like platforms (such as Dokku). When pushed to production, a static copy of the web app will be compiled with gzip compression enabled. The static site will then be served using Express.js with cache-control enabled.

For more information on getting started with deployment, please see the [Getting Started Guide for Heroku](https://devcenter.heroku.com/start) or [Deploy Tutorial for Dokku](http://dokku.viewdocs.io/dokku/application-deployment/).

## License

This repository is licensed under the Eclipse Public License Version 1.0.

The app has a dependency on the [HighCharts graphing library](http://www.highcharts.com/), which is not free for commercial and government use. Please see the [HighSoft FAQ](https://shop.highsoft.com/faq) for more information on licensing.

## Authors

James Badger <jpbadger@ucalgary.ca>
