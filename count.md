---
id: count
lesson: 23
title: Reactive Programming - Count
layout: default
class: post
preview_image: count/content_preview.jpg
preview_image_alt:
---

Last week, you learned about [`❚ scan`](/scan) and [`❚ reduce`](/reduce). Here is how you can use them to count the number of values emitted on an input stream:

{% include card_player.html video=256387874 episode=true %}

In [Episode 21](/scan), the **accumulator** function accumulated _values_. In the example above, it only increments the <code class="two">acc</code> (accumulation) and the values are ignored. The <code class="two">acc</code> is emitted as a count value.

On the one hand, [`❚ scan`](/scan) progressively emits on the output stream the current number of values emitted on the input stream. On the other hand, [`❚ reduce`](/reduce) emits the count only when the input stream completes. If the input stream never completes, the output stream will never emit the count.

In RxJS, you actually have a `❚ count` operator. It is equivalent to the `❚ reduce` card seen above:

{% include card_player.html video=256388299 episode=true %}

This is how `❚ count` operates with one input stream:

- **When the input stream completes**, the output stream:
  - emits the number of values emitted on the input stream
  - and immediately completes

## Count values that satisfy a predicate

Can you update the cards above to count the number of `✼`?

You can slightly modify the **accumulator** function to increment the <code class="two">acc</code> only when the input value is `✼`:
> ![](/img/count/accumulator2.png){:.w400}

![](/img/count/scan_predicate-reduce_predicate.png)

In RxJS, you can simply use `❚ count` with a [predicate](filter#predicate):

![](/img/count/count_predicate.png)

This is how `❚ count` operates with one input stream and a **predicate**:

- When the input stream completes, the output stream:
  - emits the number of values emitted on the input stream that satisfied the **predicate**
  - and immediately completes

