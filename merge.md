---
id: listen
lesson: 5
title: Learn reactive programming - Lesson 5, Interleave events of multiple streams
layout: default
class: post
preview_image: merge/content_preview.jpg
preview_image_alt: Interleave events of multiple streams (merge)
---

So far, you have learned three important concepts ([streams](/fromEvent), [immutability](/map) and [reactivity](/listen)) and three kinds of stream operations:

- **Creating streams** with [fromEvent](/fromEvent)
- **Transforming streams** with [map](/map), which projects events through a function
- **Time-shifting streams** with [delay](/delay), which projects events through time 

Today I present a fourth kind of operation: **combining streams**. Look at this card:

{% include card_player.html video=238067762 epsiode=false %}

It only accepts input streams as arguments. This is how `❚ merge` operates with two (or more) input streams:

- It interleaves the events of multiple input streams
- As a result, it returns a single stream of interleaved events

As you can see, it doesn't change the event values or the arrival times. No projection through a function. No projection through time. You'll see in future lessons that other cards from the _combining streams_ category can change event values and/or arrival times.

This is the first time in this course you've worked with two input streams. Cool! I'll show you next Monday a fifth kind of stream operation.