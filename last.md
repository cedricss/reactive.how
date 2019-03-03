---
id: last
mainCompare: take
video: 242933193
compare: [take, last]
lesson: 10
title: Last vs Take and the « ◉ complete » notification in Reactive Programming
layout: default
class: post
preview_image: last/content_preview.jpg
preview_image_alt: The "last" operator
---

As soon as the input stream emits its last value, the output stream emits it? Naaah! How could one be certain that no value comes after? Reactive programming can't see the future.

We have to wait for a `◉ complete` notification (read [Take 3 and complete](/take) to learn more about it). Only when the stream has completed, we know this value was the last one – **and this completion may never happen**!

In the animated comparison above, `❚ take` returns a stream with a `◉ complete` notification overlapped by the `3` value, as it completes immediately. I would like to emphasize that this notification is **not** intended to deliver the last value of the stream. It is a separate event, without a value (though it can happen immediately after an event value). `❚ last` and `❚ take` work with an input stream that completes a **few seconds** after the last value emitted.

**Notes** 

- What happens if the stream completes without emitting a value depends on the reactive library you use.
- In RxJS, **last** accepts an optional predicate. [Learn more ➜](/skipWhile#part-iii---pick)

## Summary

- A stream can complete emitting a notification (read [Take 3 and complete](/take))
- The `◉ complete` notification is a special event with no value
- A listener can subscribe to a stream and act upon its completion
- Also, the behavior of some cards like `❚ last` is based on this notification

## See also

>  [![](/img/takeLast/content_preview.jpg){:.w300}](/takeLast) <br/> [**takeLast vs take**](/takeLast)