---
title: Password Reset - Request
description: Request otp for password reset
---

- Request-Type: **POST**
- Platform: **BOTH**
- Endpoint: `/password/reset`
- Query-parameters: None
- Auth-token required: *YES*

No request body is required

An otp will be sent to the corresponding phone number.
The client is expected to enter the otp that was requested, in the `/password/verify` endpoint 
