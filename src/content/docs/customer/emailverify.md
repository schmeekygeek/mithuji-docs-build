---
title: Email - Verify
description: Verify email using otp
---

- Request-Type: **POST**
- Platform: **BOTH**
- Endpoint: `/email/verify`
- Query-parameters: `otp` (required)
- Auth-token required: *YES*

No request body is required
If the entered otp is correct, the email will be verified for the customer.
