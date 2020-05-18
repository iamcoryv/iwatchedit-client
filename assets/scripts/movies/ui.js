'use strict'
const showMoviesTemplate = require('../templates/movie-listing.handlebars')
const showMovieTemplate = require('../templates/showMovie.handlebars')

const getMoviesSuccess = function (data) {
  // const jsonMovies = JSON.stringify(data)
  $('.response').text(`Got movies`)
  console.log(data)
  // $('.movies-show').html(`<p> ${jsonMovies} </p>`)
  const showMoviesHtml = showMoviesTemplate({ movie: data.movie })
  console.log(showMoviesHtml)
  $('.movies-show').html(showMoviesHtml)
}

const getMovieSuccess = function (data) {
  $('.response').text(`Got movie`)
  console.log(data)
  // $('.movies-show').html(`<p> ${jsonMovies} </p>`)
  const showMovieHtml = showMovieTemplate({ movie: data })
  console.log(showMovieHtml)
  $('.movies-show').html(showMovieHtml)
}

const findOneMovieSuccess = function (data) {
  $('.response').text(`Got movie`)
  console.log(data)
  // $('.movies-show').html(`<p> ${jsonMovies} </p>`)
  const showMovieHtml = showMovieTemplate({ movie: data.movie })
  console.log(showMovieHtml)
  $('.movies-show').html(showMovieHtml)
}

const getMovieFailure = function () {
  $('.response').text(`I couldn't get movies :(`)
}
const getMoviesFailure = function () {
  $('.response').text(`I couldn't get movie you wanted`)
}

const createMovieSuccess = function (data) {
  $('.response').text(`${data} Movie Added!`)
  $('form').trigger('reset')
}

const createMovieFailure = function (error) {
  $('.response').text('Couldnt add movie')
  console.log(error)
  $('form').trigger('reset')
}

const deleteMovieSuccess = function (data) {
  $('.response').text(`Movie ${data} deleted!`)
  $('form').trigger('reset')
  console.log('ui success triggered')
}

const deleteMovieFailure = function (error) {
  $('.response').text('Couldnt delete movie...')
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
  findOneMovieSuccess
}
