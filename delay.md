---
id: delay
title: Learn reactive programming - Episode 4, Time projection
layout: default
class: post
preview_image: delay/content_preview.jpg
preview_image_alt: Delay reactive method
---

{% include back_home.html %}

<a class="ui basic tiny button" href="/listen">
    <i class="arrow left icon"></i> Episode 3 - Reactivity
</a>
<a class="ui basic disabled tiny button" href="#subscribe">
    A new card coming next Monday
</a>

## Episode 4 - Time projection

With the first three episodes, you have learned three concepts of Reactive Programming. Congrats!

- 1 - [Streams](/fromEvent)
- 2 - [Immutability](/map)
- 3 - [Reactivity](/listen)

Today, I'm sending you a new card:

{% include card_player.html video=237374630 episode=true %}

Use a `▬ number` piece on this card to set the time period, such as `3000` milliseconds. Then, this is how `❚ delay` operates:

- It projects each event of an input stream through time
- As a result, it returns a new stream of timeshifted events

As you can see, it doesn't change the relative time intervals between the events.

Two weeks ago, you projected events through a **function** with [map](/map). You now have learned cards can also project events through **time**. Yeah!

Next Monday, we'll play with _two_ input streams 😎.

<a class="ui basic tiny button" href="/listen">
    <i class="arrow left icon"></i> Episode 3 - Reactivity
</a>
<a class="ui basic disabled tiny button" href="#subscribe">
    A new card coming next Monday
</a>

{% include back_home.html %}