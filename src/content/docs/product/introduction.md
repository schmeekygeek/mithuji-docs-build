---
title: Introduction
description: Introduction
---

Upon successful retrieval of any product using any endpoint of the API, there will be an attribute called `images`, which will be a list of ids.
The client is expected to get the images of the product using those ids, from the following endpoint: `/api/v1/content/get/{id}`
