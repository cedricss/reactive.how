---
id: first
mainCompare: take
lesson: 19
image: first/Take1vsFirst.jpeg
compare: [take, first]
learnBackAbout: takeWhile
learnAbout: skipWhile
title: Reactive Programming - Are Last and First symmetrical?
layout: default
class: post
preview_image: first/LastVsFirst.jpeg
preview_image_alt: The "first" operator
---

In RxJS, **first** accepts an optional predicate. [Learn more ➜](/skipWhile#part-iii---pick)<br/>[Read more about stream completion ➜](/take#stream-completion)

## Take vs First

**Question**: Do `❚ take(1)` and `❚ first()` return the same stream of events?

**Answer**: Clearly, they return the same stream of events **when the input stream emits at least one event**. But the results may be different if the input stream emits no value before its completion (I'll detail such edge cases in a future article).

## Last vs First

`❚ last` (seen in [Episode 10](/take)) is the counterpart of `❚ first`:

![](img/first/LastVsFirst.jpeg)

**Question**: Are `❚ last` and `❚ first` outputs identical when the input stream emits only one value?

<br/>
<br/>
<br/>

![](img/first/Last1NvsFrist1N.jpg)
**Answer**: Not when the input stream emits only one value **and completes later** or **never completes**. `❚ first` and `❚ last` are not strictly "symmetrical". Remember that `❚ last` has to wait for the `◉ complete` notification ([read more about stream completion](/take#stream-completion)).

## Quick Exercises

Given a stream of numbers, return a stream that emits only the first **even** number and completes immediately. For example, given the stream `1 1 1 0 1 0 0 1`, emit only the first `0`.

And what about emitting the **last** even number?


## See also

> [![](/img/skipWhile/takeWhile1-skipWhile1.jpg){:.w300}](/skipWhile) <br/> [**takeWhile vs skipWhile**](/skipWhile)