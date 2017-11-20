---
id: take
lesson: 9
title: Reactive Programming - Stream completion and Take operator
layout: default
class: post
preview_image: take/content_preview.jpg
preview_image_alt: Take 3 and complete
---

In [Episode 6](/filter) you have discovered the filtering streams category and the `❚ filter` card.

Here is `❚ take`, a new card from the filtering category:

{% include card_player.html video=242296640 episode=true %}

Use a `▬ number` on this card, such as `3`, to set a maximum _amount_ of events to emit. `❚ take` returns a new stream of **at most** _amount_ values:

- When the input stream emits its _n-th_ value:
  - if _n_ < _amount_, the event can pass
  - if _n_ == _amount_, the event can pass **and** the stream **immediately** completes

### Stream completion

What does "the stream completes" mean? As a reminder, in [Episode 1](/fromEvent) you have learned that a stream is a sequence of **events** over time. And in [Episode 3](/listen) you have subscribed to a stream, using a **listener**. Let's dive into the details now:

- A stream can emit three kinds of events:
  - values
  - an `× error: e`
  - a `◉ complete` notification
- After an `× error: e` or a `◉ complete` notification, nothing else is emitted by the stream.
- A listener can receive those three kinds of events. So, it can consume the values, handle an error and act upon completion of the subscribed stream.

Listeners can act upon stream completion, but not only them. In the next episode, you'll see how a card can work with a completion notification. 