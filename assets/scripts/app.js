'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const movieEvents = require('./movies/events.js')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-in-modal').modal('show')
  $('.alert').hide()
  // auth
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // movie
  $('#movies').on('click', movieEvents.onGetMovies)
  $('#newMovie').on('submit', movieEvents.onCreateMovie)
  $('.findOneMovie').on('submit', movieEvents.onFindOneMovie)
  $('.movies-show').on('click', '.remove-movie', movieEvents.onDeleteMovie)

  // modal toggles
  $('#sign-up').on('submit', function () {
    $('#sign-up-modal').modal('toggle')
  })

  //search function
  $('.searchMovie').on('submit', movieEvents.onSearchMovies)

  // update stuff
  $('.updateMovie').on('submit', movieEvents.onUpdateMovie)
  $('.movies-show').on('click', '.update-movie', event => {
    const id = $(event.target).data('id')
    $('#idForm').attr('value', id)
    $('.update-modal-title').text(`Update entry ${id}`)
  })
  $('update-close-modal').on('click', function () {
    $('form').trigger('reset')
  })
})
