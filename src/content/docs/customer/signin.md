---
title: Sign In
description: Login for customer
---

- Request-Type: **POST**
- Platform: **BOTH**
- Endpoint: `/cauth/signin`
- Query-parameters: None
- Auth-token required: *NO*

## Example request body

```json
{
    "email": "customer@example.com",
    "password": "123customer",
}
```

Upon entering of correct credentials, a jwt will be sent in the response that the client is expected to store for requests that require it
