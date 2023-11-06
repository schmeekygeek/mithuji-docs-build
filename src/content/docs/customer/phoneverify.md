---
title: Phone - Verify
description: Verify phone number using otp
---

- Request-Type: **POST**
- Platform: **BOTH**
- Endpoint: `/phone/request`
- Query-parameters: `otp` (required)
- Auth-token required: *YES*

No request body is required

If the otp is correct, the phone number for the customer will be verified.
The phone number will be read from the jwt
