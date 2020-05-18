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

const onFindOneMovie = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  // const sendData = JSON.stringify(formData._id)
  // console.log(sendData._id)
  api.findOneMovie(formData._id)
    .then(ui.findOneMovieSuccess)
    .catch(ui.findOneMovieFailure)
}

const onDeleteMovie = function () {
  console.log('event triggered')
  const id = $('.remove-movie').data('id')
  console.log(id)
  api.deleteMovie(id)
    .then(ui.deleteMovieSuccess)
    .catch(ui.deleteMovieFailure)
}

const onSearchMovies = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const makeLower = formData.name.toLowerCase()
  console.log(makeLower)
  api.getMovies(makeLower)
    .then(data => {
      for (let i = 0; i < data.movie.length; i++) {
        console.log(data.movie[i].name)
        if (data.movie[i].name.includes(makeLower)) {
          console.log('YESS')
          ui.getMovieSuccess(data.movie[i])
        } else {
          console.log('NOOOO')
        }
      }
    })
    .then(console.log)
    // .then(data => data.movie.forEach(el => {
    //   console.log(el)
    // }))
    // .then(movie => {
    //   for (let i = 0; i < movie.length; i++) {
    //
    //   }
    // })
}

module.exports = {
  onGetMovies,
  onCreateMovie,
  onDeleteMovie,
  onSearchMovies,
  onFindOneMovie
}
