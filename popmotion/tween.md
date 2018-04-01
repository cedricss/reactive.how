---
id: popmotion/tween
lesson: 29
title: Introduction to Popmotion reactive library
layout: default
class: post
preview_image: tween/content_preview.jpg
preview_image_alt: Popmotion tween 
date: Monday, 2 Apr.
---

[Popmotion](http://popmotion.io/) is a _"functional, reactive JavaScript motion library."_ Today, I'll show you the `tween` function from this library. It shares similarities with `interval`. Read [Episode 16](/interval), about `interval` that returns a stream emitting incremental numbers, periodically:

> [![](/img/interval/card_preview.png){:.w200}](/interval)<br/>
> Watch on [reactive.how/interval](/interval)

### Popmotion Actions

A few months ago, Popmotion 8 [introduced](https://popmotion.io/blog/20171211-introducing-popmotion-8/) **actions**, a new building block in the library:

* they are streams of values,
* that can be started and stopped.

The concept of _actions_ may sound familiar to you. _"Think of it as an animation-focused, tiny alternative to Rx Observables"_, we can read [on Popmotion blog](https://popmotion.io/blog/20171211-introducing-popmotion-8/).

### A stream of colors

![](/img/popmotion/tween/tween.gif)

`Tween` is one of the Popmotion functions that returns an action – a stream of values that can be started and stopped. This is how it works:

* it accepts two values, _from_ and _to_, and an optional _duration_ (300ms by default)
* on start, it emits values between _from_ and _to_, over that _duration_.

🎨 This function creates a stream of colors when _from_ and _to_ are colors!

### Why 18 colored circles on the video?

Popmotion's streams emit values at the same rate as the browser rendering performance. On my example:

* the browser renders animations at 60 frames per second (fps).
* the animation duration is 300ms.

> ### 60 fps x 0,3 seconds = 18 colors

## A new episode every Monday

> [![](/img/reduce/reduce-scan-featured.gif){:.w350}](/reduce) <br/>[Episode 22 - **scan vs. reduce**](/reduce)

📮 You can subscribe to [the mailing list](#subscribe) to receive new episodes right inside your inbox. Or [follow me on Twitter](https://twitter.com/CedricSoulas).
