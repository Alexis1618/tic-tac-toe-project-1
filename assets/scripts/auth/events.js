'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (e) {
  e.preventDefault()
  const form = e.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuc)
    .catch(ui.signUpFail)
}

const onSignIn = function (e) {
  e.preventDefault()
  const form = e.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuc)
    .catch(ui.signInFail)
}

const onChangePassword = function (e) {
  e.preventDefault()
  const form = e.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePassSuc)
    .catch(ui.changePassFail)
}

const onSignOut = function (e) {
  e.preventDefault()
  api.signOut()
    .then(ui.signOutSuc)
    .catch(ui.signOutFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
