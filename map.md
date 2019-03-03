---
id: map
compareWith: filter
video: 238067754
compare: [map]
lesson: 2
title: Map and the immutability principle
layout: default
class: post
preview_image: map/content_preview.jpg
preview_image_alt: Map reactive operator and immutability
---

## Notes

`❚ map` and all the other reactive programming functions will <span class="highlighted">never modify</span> the input stream. Instead, they return a new stream. This principle is called **immutability**.

In the video example, `▬ isChecked` is used as a project function. This function accepts events from _checkable_ elements: checkboxes, radio buttons, options of a menu, toggles, etc. It returns `✔ true` if the element is checked, `✘ false` otherwise.

When an action is performed on the toggle (on→off or off→on), a _toggle event_ is emitted (read [a stream of toggle events](fromEvent)).

![](img/map/status-piece.png)

