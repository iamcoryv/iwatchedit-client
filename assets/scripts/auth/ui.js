'use strict'

const store = require('../store')

const signUpSuccess = data => {
  $('form').trigger('reset')
  $('#sign-up-modal').modal('toggle')
  $('#sign-in-modal').modal('toggle')
}

const signUpFailure = error => {
  console.log(error)
  $('.signUpFailureAlert').text('Account exists, or passwords do not match.')
  $('.signUpFailureAlert').show('slow').delay(4000).fadeOut()
}

const signInSuccess = data => {
  console.log(data)
  store.user = data.user
  $('form').trigger('reset')
  $('.alert-dark').text('Signed in succesfully!')
  $('.alert-dark').show('slow').delay(4000).fadeOut()
  $('#sign-in-modal').modal('toggle')
  $('.modalError').empty()
}

const signInFailure = error => {
  console.log(error)
  $('.signInFailureAlert').text('Wrong Credentials')
  $('.signInFailureAlert').show('slow').delay(3000).fadeOut()
}

const changePasswordSuccess = data => {
  $('form').trigger('reset')
  $('.alert-dark').text('Password changed succesfully!')
  $('.alert-dark').show('slow').delay(4000).fadeOut()
  $('#change-password-modal').modal('toggle')
}

const changePasswordFailure = () => {
  $('.chPwFailureAlert').text('Cant change password, maybe you had a typo.')
  $('.chPwFailureAlert').show('slow').delay(4000).fadeOut()
}

const signOutSuccess = data => {
  store.user.token = null
  // $('.card').empty()
  $('.movies-show').html('')
  $('#sign-in-modal').modal('toggle')
  $('.titleList').show()
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
