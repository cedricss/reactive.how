---
id: max
lesson: 26
title: Reactive Programming - scan, reduce, max
layout: default
class: post
preview_image: max/content_preview.jpg
preview_image_alt: scan, reduce, max
---

This is how a `❚ max` operator would work with an input stream:

* **When the input stream completes**, the output stream:
  * emits the largest value emitted on the input stream
  * and immediately completes

Some reactive stream libraries (eg. RxJS) provide this `❚ max` operator, while others don't. How would you implement yourself?

Watch the solution below.

![](img/max/scanreducemax.gif)

### Comparer function

In RxJS, `❚ min` and `❚ max` accept on optional comparer function as an argument.

For example:

> ![](img/max/maxcomparer.png){:.w400}
