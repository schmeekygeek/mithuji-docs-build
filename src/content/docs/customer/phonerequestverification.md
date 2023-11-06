---
title: Phone - Request verification
description: Request otp for phone verification
---

- Request-Type: **POST**
- Platform: **BOTH**
- Endpoint: `/phone/request`
- Query-parameters: None
- Auth-token required: *YES*

No request body is required

Verification is necessary if the phone number was changed in other endpoints, in which case, the status of the phone number verified will be set to `false`.
An otp will be sent to the corresponding phone number.
The client is expected to enter the otp that was requested, in the `/phone/verify` endpoint for successful verification of the phone number
