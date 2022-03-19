# Answer poll

[Leia-me em Português (Brasil)](./answer-survey-pt_BR.md)

> ## Success case:
1. ⛔️ Receives a **PUT** request from route **/api/surveys/{survey_id}/results**
1. ⛔️ Validates if the request was sent with an access token
1. ⛔️ Validates **survey_id** parameter
1. ⛔️ Validates if the request body contains a valid **answer**
1. ⛔️ **Creates** a poll result if it doesn't already exists
1. ⛔️ **Updates** the poll result if it exists
1. ⛔️ Returns **200** with the poll result

> ## Exceptions:
1. ⛔️ Returns **404** error code if the route is not available
1. ⛔️ Returns **403** error code if an access token is not provided
1. ⛔️ Returns **403** error code if an invalid survey_id is provided
1. ⛔️ Returns **400** error code if the request body contains invalid data
1. ⛔️ Returns **500** error code if something goes wrong while generating the poll result
1. ⛔️ Returns **500** error code if something goes wrong while updating the poll result
1. ⛔️ Returns **500** error code if something goes wrong while loading the poll