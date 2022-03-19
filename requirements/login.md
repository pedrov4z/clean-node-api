# User Login

[Leia-me em Português (Brasil)](./login-pt_BR.md)

> ## Success case:
1. ✅ Receives a **POST** request from route **/api/login**
1. ✅ Validates required fields **email** and **password**
1. ✅ Validates if **email** field has a valid format
1. ✅ **Finds** the user matching the provided **email** and **password**
1. ✅ Generates an **access token** for the user ID
1. ✅ **Updates** user data with the generated access token
1. ✅ Returns **200** with the generated access token

> ## Exceptions:
1. ✅ Returns **404** error code if the route is not available
1. ✅ Returns **400** error code if required fields **email** or **password** were not provided
1. ✅ Returns **400** error code if provided **email** is invalid
1. ✅ Returns **401** if user credentials are invalid
1. ✅ Returns **500** error code if something goes wrong while generating the access token
1. ✅ Returns **500** error code if something goes wrong while refreshing the user's access token