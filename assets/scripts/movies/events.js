'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetMovies = function (event) {
  event.preventDefault()
  api.getMovies()
    .then(ui.getMoviesSuccess)
    .catch(ui.getMoviesFailure)
}

const onCreateMovie = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createMovie(formData)
    .then(ui.createMovieSuccess)
    .catch(ui.createMovieFailure)
}

module.exports = {
  onGetMovies,
  onCreateMovie
}
