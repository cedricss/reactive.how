---
id: scan
lesson: 21
title: Reactive Programming - Scan
layout: default
class: post
preview_image: scan/content_preview.jpg
preview_image_alt: Scanning a stream
---

{% include card_player.html video=254283000 episode=true %}

## Scan arguments

`❚ scan` takes three arguments:

- an input stream
- an **accumulator** function (e.g. _prepend a <code class="one">character</code> to a <code class="two">string</code>_)
- an initial value called **seed** (e.g. _<code class="two">!</code>_)

The **accumulator** function combines two values:

- an accumulated value called <code class="two">accumulation</code>
- and a <code class="one">value</code>

As a result, the **accumulator** returns a <code class="two">new accumulation</code>.

## Scan operation

This is how `❚ scan` works with an input stream, an **accumulator** and a **seed**:

- The **seed** will be used as an _initial_ <code class="two">acc</code> (accumulation)
- When the input stream emits an event value <code class="one">v</code>:
    - <code class="one">v</code> and the latest <code class="two">acc</code> are given to the **accumulator** 
    - The returned value is emitted and will be used as the next <code class="two">acc</code>

As a result, `❚ scan` returns a new stream of accumulated values.

## Notes

- As you can see in the lesson, the output stream does not start with the seed. This is how it works, for example, in [RxJS](http://reactivex.io/rxjs/).
- In some other reactive stream libraries (like [xstream](https://github.com/staltz/xstream) and [Most.js](http://mostcore.rtfd.io)) the output stream starts with the seed.
- To start with the seed in RxJS and such, you can chain `❚ startWith(seed)` and `❚ scan(f, seed)`.
