---
id: take
mainCompare: take
seeAlso: filter vs map
seeAlsoLink: filter
lesson: 9
video: 242296640
compare: [take, filter]
learnAbout: takeWhile
learnBackAbout: combineLatest
title: Take versus Filter operator and Stream completion
layout: default
class: post
preview_image: take/content_preview.jpg
preview_image_alt: Take 3 and complete
---


## take

`❚ take` returns a new stream of **at most** _amount_ values:

- When the input stream emits its _n-th_ value:
  - if _n_ < _amount_, the event can pass
  - if _n_ == _amount_, the event can pass **and** the stream **immediately** completes


## Stream completion

What does "the stream completes" mean? As a reminder, a stream is a sequence of **events** over time. And you can subscribe to a stream, using a **listener**. Let's dive into the details now:

- A stream can emit three kinds of events:
  - values
  - an `× error: e`
  - a `◉ complete` notification
- After an `× error: e` or a `◉ complete` notification, nothing else is emitted by the stream.
- A listener can receive those three kinds of events. So, it can consume the values, handle an error and act upon completion of the subscribed stream.

## See also

> [![](/img/takeWhile/content_preview.png){:.w300}](/takeWhile) <br/> [**takeWhile**](/takeWhile)
