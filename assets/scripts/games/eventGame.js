
'use strict'

const api = require('./apiGames')
const ui = require('./uiGame')
const store = require('./../store.js')

const onStartGame = function (e) {
  e.preventDefault()
  $('.box').html('')
  gamer = 'x'
  $('.row').show()
  $('#dwinner').hide()
  $('#gameMess1').show().text("It's player " + gamer + ' turn.')

  api.startGame()
    .then(ui.onStartGameSuc)
    .catch(ui.onStartGameFail)
}

let gamer = 'X'

const onNewGame = function (e) {
  e.preventDefault()

  if ($(e.target).is(':empty')) {
    store.game.cells[$(event.target).data('cell-index')] = gamer
    $(e.target).text(gamer)
    if (gamer === 'x') {
      gamer = 'o'
    } else {
      gamer = 'x'
    }
    $('#gameMess1').show().text("It's player " + gamer + ' turn.')
  } else {
    $('#mgameMess').show().text('Invalid input!')
    return 'not your turn' + gamer
  }
  const board = store.game.cells
  let win
  const win1 = board[0] === board[1] && board[0] === board[2] && board[0]
  const win2 = board[3] === board[4] && board[4] === board[5] && board[3]
  const win3 = board[6] === board[7] && board[7] === board[8] && board[6]
  const win4 = board[0] === board[4] && board[4] === board[8] && board[0]
  const win5 = board[2] === board[4] && board[4] === board[6] && board[2]
  const win6 = board[1] === board[4] && board[4] === board[7] && board[1]
  const win7 = board[0] === board[3] && board[3] === board[6] && board[0]
  const win8 = board[2] === board[5] && board[5] === board[8] && board[2]
  const won = [win1, win2, win3, win4, win5, win6, win7, win8]

  if (win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8 !== '') {
    $('.row').hide()
    $('#winner').show().text(`Player ${won.length} won. To play a new game click Play Game!`)
    store.game.over = true
    $('#gameMess1').text('')
    $('#gameMess').text('')
    $('.success').text('')
    win = true
  }
  if (win === false && store.game.cells.every(e => e !== '')) {
    $('.row').hide()
    $('#winner').show().text("It's a tie! To play a new game click Play Game!")
    store.game.over = true
    $('#gameMess1').text('')
    $('#gameMess').text('')
    $('.success').text('')
  }

  const index = $(e.target).data('cell-index')
  api.newGame(index, gamer)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFail)
}

const onGetGames = function (e) {
  e.preventDefault()

  api.getGames()
    .then(ui.GetGamesSuccess)
    .catch(ui.GetGamesFail)
}

const onGameEnd = function (e) {
  e.preventDefault()
  api.getGames()
    .then(ui.onGameEndSuccess)
    .catch(ui.onGameEndFail)
}

module.exports = {
  onNewGame,
  onGetGames,
  onStartGame,
  gamer,
  onGameEnd
}
