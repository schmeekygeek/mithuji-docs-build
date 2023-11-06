---
title: Sign Up
description: Create account for customer
---

- Request-Type: **POST**
- Platform: **BOTH**
- Endpoint: `/cauth/signup`
- Query-parameters: None
- Auth-token required: *NO*

## Example request body

```json
{
    "email": "customer@example.com",
    "name": "customer",
    "password": "123customer",
    "phone": "23423543"
}
```

An otp will be sent to the corresponding phone number.
The account will be created but will be unverified until the customer or user enables it using the next endpoint
