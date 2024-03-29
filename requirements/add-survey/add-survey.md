# Create poll

[Leia-me em Português (Brasil)](./add-survey-pt_BR.md)

> ## Success case:
1. ✅ Receives a **POST** request from route **/api/surveys**
1. ✅ Validates if the request was made by an user with **admin** role
1. ✅ Validates required fields **question** and **answers**
1. ✅ **Creates** a poll with the provided data
1. ✅ Returns **204**

> ## Exceptions:
1. ✅ Returns **404** error code if the route is not available
1. ✅ Returns **403** error code if the user doesn't have the required role
1. ✅ Returns **400** error code if **question** or **answers** are not provided
1. ✅ Returns **500** error code if something goes wrong while generating the poll