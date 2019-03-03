---
id: takeLast
lesson: 31
compare: [take, takeLast]
mainCompare: take
image: takeLast/takeLast-take.png
learnAbout: delay
learnBackAbout: skipWhile
title: Reactive Programming - take vs takeLast
layout: default
class: post
preview_image: takeLast/content_preview.jpg
preview_image_alt: The "takeLast" operator
---

Learn more about [stream completion](/take).


Use a `▬ number` on these cards, such as `3`, to set a maximum _amount_ of events to emit. `❚ take` and `❚ takeLast` share identical behavior:

- they both return a new stream of at most _amount_ values.
- if the input stream source emits fewer than _amount_ values then all of its values are emitted on the output stream.

The stream returned by `❚ take` emits the values at the same time as their counterpart on the input stream. This is not the case for `❚ takeLast`. Remember: a stream is a sequence of events **over time**. And we can't see the future! _takeLast_ must wait for the `◉ complete` notification. Only then, we know what are the last values.

> ## See also

> [![](/img/rxjs/pipeable-operators/content_preview.jpg){:.w300}](/rxjs/pipeable-operators) <br/> [**Pipeable operators - Build your own with RxJS!**](/rxjs/pipeable-operators)
