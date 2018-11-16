# react-minimal-full-stack

[![Build Status](https://travis-ci.org/Dikvega/react-minimal.svg?branch=master)](https://travis-ci.org/Dikvega/react-minimal)
[![Greenkeeper badge](https://badges.greenkeeper.io/Dikvega/react-minimal.svg)](https://greenkeeper.io/)

This is a boilerplate to build a full stack web application using React, Node.js, Express and Webpack. It is also configured with webpack-dev-server, eslint, and babel.

Inspiration and guidance for setting this up came from [minimal-react-webpack-babel-setup](https://github.com/rwieruch/minimal-react-webpack-babel-setup) and [Simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack). 

## Features
* React 16
* Webpack 4
* Babel 7
* Express

## Installation
* `git clone git@github.com:Dikvega/react-minimal.git`
* cd react-minimal
* npm install
* npm run dev
* visit [http://localhost:3000](http://localhost:3000)


## Introduction

[Create React App](https://github.com/facebook/create-react-app) is a quick way to get started with React development and it requires no build configuration. But it completely hides the build config which makes it difficult to extend. It also requires some additional work to integrate it with an existing Node.js/Express backend application.

This is a simple full stack [React](https://reactjs.org/) application with a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) backend. Client side code is written in React and the backend API is written using Express. This application is configured with [Airbnb's ESLint rules](https://github.com/airbnb/javascript).

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.