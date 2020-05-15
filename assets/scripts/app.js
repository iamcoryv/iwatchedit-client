'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#movies').on('click', events.onGetMovies)
  $('#newMovie').on('submit', events.onCreateMovie)

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
