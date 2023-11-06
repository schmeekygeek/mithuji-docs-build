---
title: Password Reset - Verify
description: Verify and reset the password
---

- Request-Type: **PUT**
- Platform: **BOTH**
- Endpoint: `/password/verify`
- Query-parameters: None
- Auth-token required: *YES*

## Example request body
```json
{
    "otp": "1213",
    "password": "newPass"
}
```

The phone number will be read from the request's authorization header that contains the jwt
