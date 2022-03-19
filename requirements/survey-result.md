# Survey results

[Leia-me em Português (Brasil)](./survey-result-pt_BR.md)

> ## Success case:
1. ⛔️ Receives a **GET** request from route **/api/surveys/{survey_id}/results**
1. ⛔️ Validates if the request was sent with an **access token**
1. ⛔️ Returns **200** with the poll result

> ## Exceções:
1. ⛔️ Returns **404** error code if the route is not available
1. ⛔️ Returns **403** error code if an access token is not provided
1. ⛔️ Returns **500** error code if something goes wrong while collecting poll data