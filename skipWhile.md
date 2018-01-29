---
id: skipWhile
lesson: 20
title: Reactive Programming - Predicates everywhere
layout: default
class: post
preview_image: skipWhile/exercises.jpg
preview_image_alt:
---

![](/img/skipWhile/exercises.jpg)
> _This episode will show you how to perform each of those operations_

Can you fill in the blanks? Try to find solutions that use only one card. If you are stuck, try at least to solve them with a [chain](/listen#chain) of several cards. Watch the solutions below when you are ready.

<br/>

## Solutions

### Predicates everywhere

Here is a function:

![](/img/skipWhile/predicate.jpg){:.w250}

It returns `✔ true` or `✘ false`. This means you can use this function as a _predicate_ on filtering cards.
The six operations on this exercise are _filtering_ operations. And all solutions are based on such a predicate.

### Part I - Filter
![](/img/icons/ad.png){:.w79}

Here is the most common filtering card:

![](/img/skipWhile/filter1-filter0.jpg)

This is how `❚ filter` works with a predicate:

- Each event of the input stream is given to the predicate
- If the predicate returns `✔ true`, the event can pass
- Otherwise, the event is ignored
- As a result, it returns a new stream of filtered events

### Part II - Slice
![](/img/icons/bc.png){:.w79}

_Slicing_ is a sub-category of _filtering_. Cards from this sub-category take or skip everything while/until a certain condition is met. For example:

![](/img/skipWhile/takeWhile1-skipWhile1.jpg)

This is how `❚ takeWhile` operates:

- Each event value of the input stream is given to the predicate:
    - If the predicate returns `✔ true`, the event can pass
    - Otherwise, the event is ignored and the output stream immediately completes, emitting a `◉ complete` notification

`❚ skipWhile` is the counterpart of `❚ takeWhile`. Note that, with `❚ skipWhile`, the input stream and the output stream completes at the same time.

Note: `❚ take` is another _slicing_ card (it returns a new stream of at most _N_ values). But you can't use `❚ take(2)` instead of `❚ takeWhile(predicate)` to solve this exercise: watch my [take vs takeWhile](/takeWhile) video to see the difference.

### Part III - Pick

![](/img/icons/ef.png){:.w79}

Finally, you can filter an input stream by emitting zero or one event value. For example, an output stream can emit only the [first](/first) or the [last](/last) event value of an input stream. To emit only the last value _that satisfies a predicate_, you can [chain](/listen#chain) `❚ filter(predicate)` and `❚ last()`.

In some reactive programming libraries (like RxJS), you can simply use `❚ first` and `❚ last` with an optional predicate:

![](/img/skipWhile/first0-last0.jpg)

This is how `❚ last` operates with one input stream and a predicate:

- **When the input stream completes**, the output stream:
  - emits the last value emitted by the input stream that satisfied the predicate
  - and immediately completes

### Summary

![](/img/skipWhile/solutions.jpg)