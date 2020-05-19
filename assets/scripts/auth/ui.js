'use strict'

const store = require('../store')

const signUpSuccess = data => {
  $('form').trigger('reset')
}

const signUpFailure = error => {
  console.log(error)
  $('.alert-danger').text('Couldnt sign up, try again.')
  $('.alert-danger').show('slow').delay(4000).fadeOut()
}

const signInSuccess = data => {
  console.log(data)
  store.user = data.user
  $('form').trigger('reset')
  $('.alert-dark').text('Signed in succesfully!')
  $('.alert-dark').show('slow').delay(4000).fadeOut()
  $('#sign-in-modal').modal('toggle')
}

const signInFailure = error => {
  console.log(error)
}

const changePasswordSuccess = data => {
  $('form').trigger('reset')
  $('.alert-dark').text('Password changed succesfully!')
  $('.alert-dark').show('slow').delay(4000).fadeOut()
  $('#change-password-modal').modal('toggle')
}

const changePasswordFailure = () => {
  $('.alert-danger').text('Cant change password, maybe you had a typo.')
  $('.alert-danger').show('slow').delay(4000).fadeOut()
}

const signOutSuccess = data => {
  store.user.token = null
  $('.card').empty()
  $('#sign-in-modal').modal('toggle')
}

const signOutFailure = () => {
  $('.alert-danger').text('Cant sign out.')
  $('.alert-danger').show('slow').delay(4000).fadeOut()
}

// reset values?
$('').val('')

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess
}
