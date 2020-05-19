'use strict'
const showMoviesTemplate = require('../templates/movie-listing.handlebars')
const showMovieTemplate = require('../templates/showMovie.handlebars')
const api = require('./api')

const getMoviesSuccess = function (data) {
  // const jsonMovies = JSON.stringify(data)
  // console.log(data)
  // $('.movies-show').html(`<p> ${jsonMovies} </p>`)
  const showMoviesHtml = showMoviesTemplate({ movie: data.movie })
  // console.log(showMoviesHtml)
  $('.movies-show').html(showMoviesHtml)
    $('.titleList').hide()
}

const getMovieSuccess = function (data) {
  $('form').trigger('reset')
  // $('.response').text(`Got movie`)
  // console.log(data)
  // $('.movies-show').html(`<p> ${jsonMovies} </p>`)
  const showMovieHtml = showMovieTemplate({ movie: data })
  // console.log(showMovieHtml)
  $('.movies-show').html(showMovieHtml)
  $('.titleList').hide()
}

const findOneMovieSuccess = function (data) {
  $('form').trigger('reset')
  // $('.response').text(`Got movie`)
  // console.log(data)
  const showMovieHtml = showMovieTemplate({ movie: data.movie })
  console.log(showMovieHtml)
  $('.movies-show').html(showMovieHtml)
}

const getMovieFailure = function (data) {
  // $('.alert-danger').text(`I couldn't find an entry with "${data}" in it.`)
  // $('.alert-danger').show('slow').delay(4000).fadeOut()
}
const getMoviesFailure = function () {
  $('.alert-danger').text(`I couldn't find your entries.`)
  $('.alert-danger').show('slow').delay(4000).fadeOut()
}

const createMovieSuccess = function () {
  $('form').trigger('reset')
  $('.alert-dark').text(`Entry Added!`)
  $('.alert-dark').show('slow').delay(4000).fadeOut()
  api.getMovies()
    .then(getMoviesSuccess)
    .catch(getMoviesFailure)
}

const createMovieFailure = function (error) {
  $('.addMovieFailureAlert').text(`Name and Thoughts are Required`)
  $('.addMovieFailureAlert').show('slow').delay(4000).fadeOut()
  console.log(error)
  $('.card').empty()
}

const deleteMovieSuccess = function (data) {
  $('.alert-dark').text(`Entry deleted!`)
  $('.alert-dark').show('slow').delay(4000).fadeOut()
  $('form').trigger('reset')
  api.getMovies()
    .then(getMoviesSuccess)
    .catch(getMoviesFailure)
}

const updateMovieSuccess = function () {
  $('.alert-dark').text(`Entry updated!`)
  $('.alert-dark').show('slow').delay(4000).fadeOut()
  $('form').trigger('reset')
  api.getMovies()
    .then(getMoviesSuccess)
    .catch(getMoviesFailure)
}

const deleteMovieFailure = function (error) {
  $('.alert-danger').text(`I couldn't delete your entry.`)
  $('.alert-danger').show('slow').delay(4000).fadeOut()
  console.log(error)
  $('form').trigger('reset')
}

module.exports = {
  getMoviesFailure,
  getMoviesSuccess,
  createMovieFailure,
  createMovieSuccess,
  deleteMovieSuccess,
  deleteMovieFailure,
  getMovieSuccess,
  getMovieFailure,
  findOneMovieSuccess,
  updateMovieSuccess
}
