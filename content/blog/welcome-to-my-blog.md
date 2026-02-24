---
title: "Hello World"
date: "2026-02-22"
description: "Setting up a space to write about things I find interesting."
tags: ["meta"]
---

I built this blog page to have a place to put my thoughts. Nothing fancy, just a spot to write about things I find interesting - mostly software engineering, side projects, and the occasional rabbit hole I fall down.

The blog supports full markdown, so I can include things like code blocks:

```javascript
const debounce = (fn, ms) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
};
```

A classic. Five lines that solve one of the most common problems in frontend development - preventing a function from firing too often. Useful for search inputs, resize handlers, you name it.

I'm not sure how often I'll post, but when I do, it'll be here.

> "The best way to predict the future is to create it." — Peter Drucker