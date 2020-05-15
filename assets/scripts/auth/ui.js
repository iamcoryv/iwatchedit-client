'use strict'

const store = require('../store')

const signUpSuccess = data => {
  $('.message').text('You are all signed up! Time to log in.')
}

const signUpFailure = error => {
  console.log(error)
  $('.message').text('Could not create user, try again')
}

const signInSuccess = data => {
  console.log(data)
  store.user = data.user
  $('.message').text('Signed in!')
}

const signInFailure = error => {
  console.log(error)
  $('.message').text('Failed to sign in, try again!')
}

const changePasswordSuccess = data => {
  $('.message').text('Password changed!')
}

const changePasswordFailure = () => {
  $('.message').text('Cant change password, maybe you had a typo.')
}

const signOutSuccess = data => {
  store.user = null
  $('.').hide()
}

const signOutFailure = () => {
  $('.message').text('Sign out has failed.').css('color', 'red')
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
