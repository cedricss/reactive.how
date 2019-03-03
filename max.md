---
id: max
mainCompare: reduce
lesson: 26
compare: [reduce, max]
title: How the RxJS &quot;max&quot; operator works under the hood (scan, reduce)
learnAbout: count
learnBackAbout: reduce
layout: default
class: post
image: max/scanreducemax.gif
preview_image: max/content_preview.jpg
preview_image_alt: scan, reduce, max
---

This is how a `❚ max` operator would operate with an input stream:

* **When the input stream completes**, the output stream:
  * emits the largest value emitted on the input stream
  * and immediately completes

Some reactive stream libraries (eg. RxJS) provide this `❚ max` operator, while others don't. How would you code _max_ yourself?

### Comparer function

In RxJS, `❚ min` and `❚ max` accept on optional comparer function as an argument.

For example:

> ![](img/max/maxcomparer.png){:.w400}

> ## See also

> [![](/img/rxjs/pipeable-operators/content_preview.jpg){:.w300}](/rxjs/pipeable-operators) <br/> [**Pipeable operators - Build your own with RxJS!**](/rxjs/pipeable-operators)
