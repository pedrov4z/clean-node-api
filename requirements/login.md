# User Login

[Leia-me em Português (Brasil)](./login-pt_BR.md)

> ## Success case:
1. ✅ Receives a **POST** request from route **/api/login**
2. ✅ Validates required fields **email** and **password**
3. ✅ Validates if **email** field has a valid format
4. ✅ Finds the user matching the provided **email** and **password**
5. ✅ Generates an access token for the user ID
6. ✅ Updates user data with the generated access token
7. ✅ Returns 200 with the generated access token

> ## Exceptions:
1. ✅ Returns 404 error code if the route is not available
2. ✅ Returns 400 error code if required fields **email** or **password** were not provided
3. ✅ Returns 400 error code if provided **email** is invalid
4. ✅ Returns 401 if user credentials are invalid
5. ✅ Returns 500 error code if something goes wrong while generating the access token
6. ✅ Returns 500 error code if something goes wrong while refreshing the user's access token