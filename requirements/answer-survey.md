# Answer poll

[Leia-me em Português (Brasil)](./answer-survey-pt_BR.md)

> ## Success case:
1. ⛔️ Receives a **PUT** request from route **/api/surveys/{survey_id}/results**
2. ⛔️ Validates if the request was sent with an access token
3. ⛔️ Validates if the request body contains a valid answer
4. ⛔️ Creates a poll result with the given data
5. ⛔️ Returns 200 with the poll result

> ## Exceptions:
1. ⛔️ Returns 404 error code if the route is not available
2. ⛔️ Returns 403 error code if an access token is not provided
3. ⛔️ Returns 400 error code if the request body contains invalid data
4. ⛔️ Returns 500 error code if something goes wrong while generating the poll result