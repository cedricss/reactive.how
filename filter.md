---
id: listen
lesson: 6
title: Learn reactive programming - Lesson 6, Filtering
layout: default
class: post
preview_image: merge/content_preview.jpg
preview_image_alt: Filter a stream
---

With the previous lessons, you have performed four different kinds of operations on streams. You have learned how to:

- [create a stream](/fromEvent)
- project streams [through a function](/map) and [through time](/delay)
- [combine multiple streams](/merge)

If you still don't know about _streams_, _immutability_ and _reactivity_, then you should start with [Lesson 1](/fromEvent).

There is a fifth important kind of operation yet to discover: **filtering streams**.

For this lesson, we need a new piece: `▬ isEven`. It's a function that accepts a `number` as an argument, then:

- If it is an even number, it returns `✔ true` 
- Otherwise, it returns `✘ false`

Please take this new card, `❚ filter`, and the `❚ map` card you received in [Lesson 2](/map). Both cards can use the `▬ isEven` function as an argument.

We set the same _function_ and the same _input stream of numbers_ on those cards and compare the stream they return:

{% include card_player.html video=239108249 episode=true %}

><small>I'll frequently re-use previous cards, in different context, with different arguments and in comparison with new ones. Through repetitions, reactive programming will eventually become second nature for you.</small>

### Predicate

`▬ isEven` is used as:

- a **project** function on the `❚ map` card
- a **predicate** function on the `❚ filter` card

A predicate returns `✔ true` or `✘ false`. This is how `❚ filter` works with a predicate:

- Each event of the input stream is given to the predicate
- If the predicate returns `✔ true`, the event can pass
- Otherwise, the event is ignored
- As a result, it returns a new stream of filtered values

So, you now know three reactive programming concepts and five kinds of stream operation! That's something, you can celebrate. And still, there are more. More categories. More cards per category. More Monday lessons 😁.