'use strict'
const showMoviesTemplate = require('../templates/movie-listing.handlebars')

const getMoviesSuccess = function (data) {
  // const jsonMovies = JSON.stringify(data)
  $('.response').text(`Got movies`)
  console.log(data)
  // $('.movies-show').html(`<p> ${jsonMovies} </p>`)
  const showMoviesHtml = showMoviesTemplate({ movie: data.movie })
  console.log(showMoviesHtml)
  $('.movies-show').html(showMoviesHtml)
}

const getMoviesFailure = function () {
  $('.response').text(`I couldn't get movies :(`)
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

module.exports = {
  getMoviesFailure,
  getMoviesSuccess,
  createMovieFailure,
  createMovieSuccess
}
