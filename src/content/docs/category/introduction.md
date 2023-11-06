---
title: Introduction
description: Introduction to categories
---

Every category has an attribute, called `seq` (stands for sequence), which is an auto-incrementing unique id assigned to each category, and an attribute called `parent`, which is the `seq` of the parent category of the current category (if there is one).
If there is no parent of a category, the `parent` will be `-1`
