---
title: Upload documents
description: Upload PAN or Adhar documents for seller
---

- Request-Type: **GET**
- Platform: **BOTH**
- Endpoint: `/content/upload/<pan or gst>`
- Query-parameters: None
- Auth-token required: *YES*

## Example request body
```json
{
    "base64": "iVBORw0KGgoAA..."
}
```

The request accepts a encoded image in base64 format of pan or gst document for the seller.
