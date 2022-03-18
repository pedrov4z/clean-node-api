# List polls

[Leia-me em Português (Brasil)](./surveys-pt_BR.md)

> ## Success case:
1. ✅ Receives a **GET** request from route **/api/surveys**
2. ✅ Validates if the request was sent with an access token
3. ✅ Returns 204 if there are no available polls
4. ✅ Returns 200 with the list of available polls

> ## Exceptions:
1. ✅ Returns 404 error code if the route is not available
2. ✅ Returns 403 error code if an access token is not provided
3. ✅ Returns 500 error code if something goes wrong while collecting poll data