---
id: last
lesson: 10
title: Reactive Programming - Last vs Take and the « ◉ complete » notification
layout: default
class: post
preview_image: last/content_preview.jpg
preview_image_alt: The "last" operator
---

Today, we explore a card named `❚ last`. As soon as the input stream emits its last value, the output stream emits it? Naaah! How could one be certain that no value comes after? Reactive programming can't see the future.

We have to wait for a `◉ complete` notification (read [Episode 9 - Take 3 and complete](/take) to learn more about it). Only when the stream has completed, we know this value was the last one – **and this completion may never happen**!

Last Monday, we used the card `❚ take` (watch it again below). The stream it outputs has a `◉ complete` notification overlapped by the `3` value, as it completes immediately. I would like to emphasize that this notification is **not** intended to deliver the last value of the stream. It is a separate event, without a value (though it can happen immediately after an event value).

To illustrate all those principles, let's see how `❚ last` and `❚ take` work with an input stream that completes a **few seconds** after the last value emitted:

{% include card_player.html video=242933193 episode=true %}

This is how `❚ last` operates with one input stream:

- **When the input stream completes**, the output stream:
  - emits the last value emitted by the input stream
  - and immediately completes

So, this card returns a new stream of **at most** one value.

**Note:** what happens if the stream completes without emitting a value depends on the reactive library you use.

## Summary

- A stream can complete emitting a notification (read [Episode 9](/take))
- The `◉ complete` notification is a special event with no value
- A listener can subscribe to a stream and act upon its completion
- Also, the behavior of some cards like `❚ last` is based on this notification

## See also

> [**Episode 31 - takeLast vs take**](/takeLast) <br/> [![](/img/takeLast/content_preview.jpg){:.w300}](/takeLast)