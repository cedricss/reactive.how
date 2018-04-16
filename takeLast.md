---
id: takeLast
lesson: 31
title: Reactive Programming - take vs takeLast
layout: default
class: post
preview_image: takeLast/content_preview.jpg
preview_image_alt: The "takeLast" operator
---

This Monday I drew a new card: `❚ takeLast`. Let's compare it with [`❚ take`](/take):

> ![](/img/takeLast/takeLast-take.png)

`❚ take` and `❚ takeLast` share identical behavior:

- they both return a new stream of at most _amount_ values.
- if the input stream source emits fewer than _amount_ values then all of its values are emitted on the output stream.

The stream returned by `❚ take` emits the values at the same time as their counterpart on the input stream. This is not the case for `❚ takeLast`. Remember: a stream is a sequence of events **over time**. And we can't see the future! _takeLast_ have to wait for the `◉ complete` notification. Only then, we know what are the last values.

## takeLast

Use a `▬ number` on this card, such as `3`, to set a maximum _amount_ of events to emit. `❚ takeLast` returns a new stream of **at most** _amount_ values:

- When the input stream completes, the output stream:
  - emits each of the last _amount_ values emitted by the input stream
  - and immediately completes
- If the input stream never completes, the output stream never emits

**Note:** the last values are delivered as several separate event values.

## See also

> [![](/img/take/content_preview.jpg){:.w300}](/take) <br/> [**Episode 9 - take and complete**](/take)

> [![](/img/last/content_preview.jpg){:.w300}](/last) <br/> [**Episode 10 - take vs last**](/last)

