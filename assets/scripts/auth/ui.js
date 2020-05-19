'use strict'

const store = require('../store')

const signUpSuccess = data => {
  $('.response').text('You are all signed up! Time to log in.')
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
}

const signInFailure = error => {
  console.log(error)
  $('.response').text('Failed to sign in, try again!')
}

const changePasswordSuccess = data => {
  $('.response').text('Password changed!')
  $('form').trigger('reset')
  $('.alert-dark').text('Password changed succesfully!')
  $('.alert-dark').show('slow').delay(4000).fadeOut()
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
  $('.response').text('Sign out has failed.').css('color', 'red')
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
