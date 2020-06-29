'use strict'
const store = require('./../store.js')

const getGameSuccess = function (response) {
  $('#gameMess').text(`Here how you hold up! Games Played:${response.games.length}`)
  $('#gameMess1').hide()
}

const getGameFail = function (response) {
  $('#gameMess').text(`Sorry! unable to request game.`)
}

const startGameSuccess = function (response) {
  $('#gameMess').text('New Game!')
  $('.row').show()
  store.game = response.game
  store.games = response.games
}

const startGameFail = function (response) {
  $('gameMess').text('Oh No! unale to get game')
}

const newGameSuccess = function (response) {
  $('#gameMess').text('good move')
}

const newGameFail = function (response) {
  $('#gameMess').text("can't be there")
}

module.exports = {
  getGameSuccess,
  getGameFail,
  newGameSuccess,
  newGameFail,
  startGameSuccess,
  startGameFail
}
