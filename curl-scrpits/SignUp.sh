API="https://tic-tac-toe-wdi.herokuapp.com/games"
curl "${API} sign-up"\
--include \
--request POST \
--header "Authorization: Token token=${TOKEN}"
--header "Content-Type: application/json"
--data '{
"game": {
"owner": "'"${ID}"'"
}
}'

echo`
