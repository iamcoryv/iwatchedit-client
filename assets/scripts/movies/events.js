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

const onDeleteMovie = function () {
  console.log('event triggered')
  const id = $('.remove-movie').data('id')
  console.log(id)
  api.deleteMovie(id)
    .then(ui.deleteMovieSuccess)
    .catch(ui.deleteMovieFailure)
}

module.exports = {
  onGetMovies,
  onCreateMovie,
  onDeleteMovie
}
