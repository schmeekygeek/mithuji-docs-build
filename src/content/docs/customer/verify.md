---
title: Verify
description: Verify account for customer
---

- Request-Type: **POST**
- Platform: **BOTH**
- Endpoint: `/cauth/verify`
- Query-parameters: None
- Auth-token required: *NO*

## Example request body

```json
{
    "otp": "1213",
    "phone": "23423543"
}
```

If the otp sent to the customer's phone number is correct, the account will be activated, and a jwt will be sent in the response that the client is expected to store for requests that require it.
