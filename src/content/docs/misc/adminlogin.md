---
title: Admin Login
description: Sign in for admin
---

- Request-Type: **GET**
- Platform: **BOTH**
- Endpoint: `/product`
- Query-parameters: `size` and `page` (both optional)
- Auth-token required: *YES*

## Request body example
```json
{
    "email": "adminemail",
    "password": "adminpassword"
}
```

After successful authentication, an admin token will be returned
