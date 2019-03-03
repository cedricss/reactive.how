---
id: takeWhile
mainCompare: take
lesson: 17
seeAlso: skipWhile vs takeWhile
seeAlsoLink: skipWhile
title: take vs takeWhile in RxJS
compare: [take, takeWhile]
learnBackAbout: take
learnAbout: skipWhile
video: 250094761
layout: default
class: post
preview_image: takeWhile/content_preview.jpg
preview_image_alt:
---

## Exercise

In the animation above, can you spot the difference between the outputs? Can you explain why?

**Answer**: the `◉ complete` notification happens at a different moment:

- On the one hand, `❚ take` returns a stream that emits at most _amount_ values and can complete as soon as this amount is reached.
- On the other hand, `❚ takeWhile` has to wait for the predicate to return `✘ false` in order to complete.

## See also

> [![](/img/skipWhile/exercises.jpg){:.w300}](/skipWhile) <br/> [**Can you fill in the blanks?**](/skipWhile)