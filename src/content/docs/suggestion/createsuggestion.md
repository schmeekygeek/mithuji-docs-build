---
title: Create suggestion
description: Create a suggestion request for a particular product
---

- Request-Type: **POST**
- Platform: **BOTH**
- Endpoint: `/quotation/create`
- Query-parameters: None
- Auth-token required: *NO*

## Example request body
```json
{
    "name": "Raj Gupta",
    "product_name": "NZXT H510 elite",
    "phone_number": "312412341234"
}
```
This is the endpoint that the 'What do you want?' section calls for the customer to submit a request for a product that they would like to buy, but is not available. This endpoint doesn't require an auth-token because this endpoint is open to all users.
