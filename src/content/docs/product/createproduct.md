---
title: Create Product
description: Create a product
---

- Request-Type: **POST**
- Platform: **BOTH**
- Endpoint: `/product/create`
- Query-parameters: None
- Auth-token required: *YES*

## Example request body
```json
{
    "parent": 12,
    "type": "PRODUCT",
    "name": "Asus TUF monitor",
    "is_listed": true,
    "name_piece": "",
    "available_quantities": 5,
    "price_range": "23000 24000",
    "currency": "INR",
    "description": "Desktop gaming monitor",
    "images": [
      "/9j/4AAQSkZJRgABAQAAAQABA..."
    ]
}
```

- `parent` is the `seq` of the category that the product belongs to.
- `images` is a list of images in base64 format
