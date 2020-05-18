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
  $('.findOneMovie').on('submit', movieEvents.onFindOneMovie)
  $('.movies-show').on('click', '.remove-movie', movieEvents.onDeleteMovie)
  // $('.movies-show').on('click', '.update-movie', )

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

  $('#searchMovie').on('submit', movieEvents.onSearchMovies)

  $('.movies-show').on('click', '.update-movie', data => {
    // $('notyetmodal').show()
    const id = $('.update-movie').data('id')
    $('#updateTitle').attr('placeholder', id)
  })

  // $('.movies-show').on('click', '.update-movie', movie => {
  //   // $('notyetmodal').show()
  //   console.log(movie)
  //   const currentId = $('.update-movie').data('id')
  //   console.log(currentId)
  //   $('#updateTitle').attr('placeholder', '.card-header')
  //   $('#updateThoughts').attr('placeholder', 'hi')
  // })

})
