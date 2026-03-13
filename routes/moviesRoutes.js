import express from 'express'
import { Router } from 'express'

const { searchMovies, getMovieDetails } = require("../controllers/movieController");

//search movies
Router.get("/search", searchMovies);

//get movie details
Router.get("/movies/:id", getMovieDetails);

export default Router
