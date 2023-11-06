---
title: Get details
description: Get details of currently authenticated user.
---

- Request-Type: **POST**
- Platform: **WEB**
- Endpoint: `/customer/details`
- Query-parameters: None
- Auth-token required: *YES*

An empty request body is required, as shown below, for fetching the details, but in the case of updating the details of the user, the client may add appropriate attributes that are to be updated.
```json
{}
```

If the client updates details such as email and phone number, they will be marked as unverified, and will need verification.

The response contains the details for the customer. It was implemented to get the details of the customer that was currently authenticated i.e. Fetch details using just the jwt.
