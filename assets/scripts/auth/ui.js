'use strict'

const store = require('../store')

const signUpSuccess = data => {
  $('.response').text('You are all signed up! Time to log in.')
  $('form').trigger('reset')
}

const signUpFailure = error => {
  console.log(error)
  $('.response').text('Could not create user, try again')
}

const signInSuccess = data => {
  console.log(data)
  store.user = data.user
  $('.response').text('Signed in!')
  $('form').trigger('reset')
  $('.alert').text('Signed in succesfully!')
  $('.alert').show('slow').delay(4000).fadeOut()
}

const signInFailure = error => {
  console.log(error)
  $('.response').text('Failed to sign in, try again!')
}

const changePasswordSuccess = data => {
  $('.response').text('Password changed!')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('.response').text('Cant change password, maybe you had a typo.')
}

const signOutSuccess = data => {
  store.user = null
  $('.response').text('')
  $('.').hide()
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
