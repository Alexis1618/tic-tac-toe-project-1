const api = require('./api')
const ui = require('./ui')

// require getFormFields:
const getFormFields = require('../../../lib/get-form-fields.js')

const onSingIn= function (event) {
  console.log(event)
  // Call the api function
@ -14,6 +17,17 @@ const onSignin = function (event) {
    .catch(ui.onSignin)
}

const onSignup = function (event) {
  console.log(event)
  // stop the form submit from trying to make a GET request by refreshing the page
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)
}
const onDelete = function (event)
event.preventDefault()

const form = event.target
const data = getFormFields(form)
console.log(data)

const onChangePassword = function (event)
event.preventDefault()

const form = event.target
const data = getFormFields(form)
console.log(data)
//{book;{tile: 'my title, author:'the author, id:
'018uy3508h0b9ygy'}}

api.booksCreate(data)
.then(ui.createSuccess)
.catch(ui.createFailure)





module.exports = {
onSingIn=onSignIn
onSignup=onSignup
onDelete=onDelete
}
