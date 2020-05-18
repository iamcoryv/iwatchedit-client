'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const movieEvents = require('./movies/events.js')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#movies').on('click', movieEvents.onGetMovies)
  $('#newMovie').on('submit', movieEvents.onCreateMovie)

  $('.alert').hide()


  $('.rating input:radio').attr('checked', false)
  $('.rating input').click(function () {
    $('.rating span').removeClass('checked')
    $(this).parent().addClass('checked')
  })
  $('input:radio').change(
    function () {
      const userRating = this.value
      // test alert get rid of this later, annoying and no alerts
      alert(userRating)
    })
})
