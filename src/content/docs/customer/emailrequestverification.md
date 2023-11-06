---
title: Email - Request verification
description: Request otp for email verification
---

- Request-Type: **POST**
- Platform: **BOTH**
- Endpoint: `/email/request`
- Query-parameters: None
- Auth-token required: *YES*

No request body is required

An otp will be sent to the customer's email
The client is expected to enter the otp that was requested, in the `/email/verify` endpoint for successful verification of the email.
