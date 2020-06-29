
'use strict'
const store = require('./../store.js')

const signUpSuc = function (response) {
  $('form').trigger('reset')
  $('#authMess').text('Sign up successfull! Hello ' + response.user.email).show(400).removeClass().addClass('success')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}
const signUpFail = function () {
  $('form').trigger('reset')
  $('#authMess').text('Sign up failed').show().removeClass().addClass('failure')
  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}
const signInSuc = function (response) {
  $('form').trigger('reset')
  $('#authMess').text('Signed in ' + response.user.email).show().removeClass(400).addClass('success')
  $('#signUp').hide()
  $('#signIn').hide()
  $('#changePassword').show()
  $('#gameOn').show()
  $('#signOut').show()
  store.user = response.user
  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}
const signInFail = function (response) {
  $('form').trigger('reset')
  $('#authMess').text('Signed in failed').show(400).addClass('failed')
  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}
const changePassSuc = function () {
  $('form').trigger('reset')
  $('#authMess').text('Password changed').show(400).removeClass().addClass('success')
  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}
const changePassFail = function () {
  $('form').trigger('reset')
  $('#authMess').text('Password change has failed').show(400).removeClass().addClass('failed')
  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}
const signOutSuc = function () {
  $('#authMess').text('GoodBye see you again.').show(400).removeClass().addClass('success')
  $('#newGame').addClass('hidden')
  $('#signup').show()
  $('#signIn').show()
  $('#changePassword').hide()
  $('.change-pw-bttn').hide()
  $('.row').hide()
  $('#signOut').hide()
  store.user.token = null
  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}
const signOutFail = function () {
  $('#authMess').text('Signed Out Failed')
  $('#authMess').removeClass().addClass('failed')
  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}
module.exports = {
  signUpSuc,
  signUpFail,
  signInSuc,
  signInFail,
  changePassSuc,
  changePassFail,
  signOutSuc,
  signOutFail

}
