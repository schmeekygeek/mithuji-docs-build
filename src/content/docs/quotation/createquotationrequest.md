---
title: Request for quotation
description: Create a request for quotation request
---

- Request-Type: **POST**
- Platform: **BOTH**
- Endpoint: `/quotation/create`
- Query-parameters: None
- Auth-token required: *YES*

## Example request body
```json
{
    "seller_id": "6540bf3eeba9cc2d924e6f08",
    "product_id": "23423423",
    "quantity": 4
}
```
Requesting for quotation requires the above attributes - `seller_id` - the seller from which the quotation is being requested, the `product_id` and the `quantity`.
