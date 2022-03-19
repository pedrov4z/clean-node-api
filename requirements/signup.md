# User Signup

[Leia-me em Português (Brasil)](./signup-pt_BR.md)

> ## Success case:
1. ✅ Receives a **POST** request from route **/api/signup**
1. ✅ Validates required fields **name**, **email**, **password** and **passwordConfirmation**
1. ✅ Validates **password** with **passwordConfirmation**
1. ✅ Validates if **email** field has a valid format
1. ✅ Validates if an **user already exists** with the provided email
1. ✅ Generates a **hashed** password
1. ✅ **Creates** the user account
1. ✅ Generates an **access token** for the user ID
1. ✅ **Updates user data** with the generated access token
1. ✅ Returns **200** with the user's access token

> ## Exceptions:
1. ✅ Returns **404** error code if the route is not available
1. ✅ Returns **400** error code if required fields **name**, **email**, **password** or **passwordConfirmation** were not provided by the client
1. ✅ Returns **400** error code if **password** and **passwordConfirmation** don't match
1. ✅ Returns **400** error code if provided **email** is invalid
1. ✅ Returns **403** error code if provided **email** is already in use
1. ✅ Returns **500** error code if something goes wrong while hashing the password
1. ✅ Returns **500** error code if something goes wrong while creating the user account
1. ✅ Returns **500** error code if something goes wrong while generating the access token
1. ✅ Returns **500** error code if something goes wrong while updating the user data