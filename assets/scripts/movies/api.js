'use strict'

const store = require('../store')
const config = require('../config')

const updateMovie = (data) => {
  return $.ajax({
    url: config.apiUrl + '/movies/' + data.id,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getMovies = () => {
  return $.ajax({
    url: config.apiUrl + '/movies',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createMovie = data => {
  return $.ajax({
    url: config.apiUrl + '/movies',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data),
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const findOneMovie = id => {
  return $.ajax({
    url: config.apiUrl + '/movies/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteMovie = id => {
  return $.ajax({
    url: config.apiUrl + '/movies/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getMovies,
  createMovie,
  findOneMovie,
  updateMovie,
  deleteMovie
}
