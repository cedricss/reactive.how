---
id: takeWhile
lesson: 17
title: Reactive Programming - take vs takeWhile
layout: default
class: post
preview_image: takeWhile/content_preview.jpg
preview_image_alt:
---

In [Episode 6](/filter), I introduced the `❚ filter` card, used with a [predicate](/filter#predicate) (a function that returns `✔ true` or `✘ false`).

In [Episode 9](/take), I presented the `❚ take` card and the `◉ complete` notification (a special kind of event emitted upon stream [completion](/take#stream-completion)).

In this episode, I compare `❚ take` with a new card: `❚ takeWhile`. The former accepts a maximum _amount_, whereas the latter accepts a [predicate](/filter#predicate):

{% include card_player.html video=250094761 episode=true %}

This is how `❚ takeWhile` operates:

- Each event value of the input stream is given to the predicate:
    - If the predicate returns `✔ true`, the event can pass
    - Otherwise, the event is ignored and the stream immediately completes

In the animation above, can you spot the difference between the outputs? Can you explain why?

#### Answer

The `◉ complete` notification happens at a different moment:

- On the one hand, `❚ take` returns at most _amount_ values and can complete as soon as this amount is reached.
- On the other hand, `❚ takeWhile` has to wait for the predicate to return `✘ false` in order to complete.