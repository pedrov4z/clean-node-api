# User Signup

[Leia-me em Português (Brasil)](./signup-pt_BR.md)

> ## Success case:
1. ✅ Receives a **POST** request from route **/api/signup**
2. ✅ Validates required fields **name**, **email**, **password** and **passwordConfirmation**
3. ✅ Validates **password** with **passwordConfirmation**
4. ✅ Validates if **email** field has a valid format
5. ✅ Validates if an user already exists with the provided email
6. ✅ Generates a hashed password
7. ✅ Creates the user account
8. ✅ Generates an access token for the user ID
9. ✅ Updates user data with the generated access token
10. ✅ Returns 200 with the user's access token

> ## Exceptions:
1. ✅ Returns 404 error code if the route is not available
2. ✅ Returns 400 error code if required fields **name**, **email**, **password** or **passwordConfirmation** were not provided by the client
3. ✅ Returns 400 error code if **password** and **passwordConfirmation** don't match
4. ✅ Returns 400 error code if provided **email** is invalid
5. ✅ Returns 403 error code if provided **email** is already in use
6. ✅ Returns 500 error code if something goes wrong while hashing the password
7. ✅ Returns 500 error code if something goes wrong while creating the user account
8. ✅ Returns 500 error code if something goes wrong while generating the access token
9. ✅ Returns 500 error code if something goes wrong while updating the user data