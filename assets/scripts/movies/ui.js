'use strict'

const getMoviesSuccess = function (data) {
  const jsonMovies = JSON.stringify(data)
  $('.response').text(`Got movies`)
  $('.movies-show').html(`<p> ${jsonMovies} </p>`)
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
