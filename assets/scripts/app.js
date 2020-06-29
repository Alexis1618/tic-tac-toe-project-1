'use strict'

const auth = require('./auth/events.js')
const game = require('./games/eventGame.js')

$(() => {
  $('#signUp').on('submit', auth.onSignUp)
  $('#signIn').on('submit', auth.onSignIn)
  $('#changePassword').on('submit', auth.onChangePassword)
  $('#signOut').on('submit', auth.onSignOut)
  $('.row').hide()
  $('#reset').hide()
  $('#gameOn').on('submit', game.onStartGame)
  $('.box').on('click', game.onNewGame)
  $('#changePassword').hide()
  $('#gameOn').hide()
  $('#signOut').hide()
  $('#score').on('submit', game.onGetGames).hide()
  $('.box').css('background', 'transparent')
})
