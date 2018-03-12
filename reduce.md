---
id: reduce
lesson: 22
title: Reactive Programming - reduce vs scan
layout: default
class: post
preview_image: reduce/content_preview.jpg
preview_image_alt: reduce vs scan
---

In Episode 21, you learned about [`❚ scan`](/scan) and the [accumulator function](/scan).

`❚ reduce` takes the same three arguments as `❚ scan`:

- an input stream
- an **accumulator** function (e.g. _prepend a <code class="one">character</code> to a <code class="two">string</code>_)
- an initial value called **seed** (e.g. _<code class="two">!</code>_)

So, what is the difference between `❚ reduce` and `❚ scan`?

{% include card_player.html video=255356781 episode=true %}

## reduce vs scan

I've highlighted the differences:

### Reduce

- The **seed** will be used as an _initial_ <code class="two">acc</code> (accumulation)
- When the input stream emits an event value <code class="one">v</code>:
    - <code class="one">v</code> and the latest <code class="two">acc</code> are given to the **accumulator** 
    - The returned value will be used as the next <code class="two">acc</code>
- When the input stream completes, the output stream <span class="highlighted">emits the last <code class="two">acc</code></span> and completes

### Scan

- The **seed** will be used as an _initial_ <code class="two">acc</code> (accumulation)
- When the input stream emits an event value <code class="one">v</code>:
    - <code class="one">v</code> and the latest <code class="two">acc</code> are given to the **accumulator** 
    - The returned value <span class="highlighted">is emitted</span> and will be used as the next <code class="two">acc</code>
- When the input stream completes, the output stream completes

As you can see, while `❚ scan` returns a new stream of progressively accumulated values, `❚ reduce` returns a new stream of, at most, one value. At most? If the input stream never completes, `❚ reduce` **will never emit any value** on the output stream.

Ultimately, `❚ reduce` is equivalent to `❚ scan` chained with `❚ takeLast(1)`.