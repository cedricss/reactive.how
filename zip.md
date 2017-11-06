---
id: zip
lesson: 8
title: Learn Reactive Programming - Episode 8 (zip vs combineLatest)
layout: default
class: post
preview_image: content_preview.jpg
preview_image_alt: Zip vs CombineLatest
---

After `❚ merge` ([Episode 5](/merge)) and `❚ combineLatest` ([Episode 7](/combineLatest)), we continue our exploration of the _combining streams_ category. Today I picked a third card from this category: `❚ zip`.

As for `❚ combineLatest`, we need a _projection function_ that combines two values (or more) into a new one. I note it figuratively `⚬ ⟶ ⚭ ⟵ ⚬`.

Let's compare those two cards. In the following example, they both take the exact same arguments (the same _input streams_ and the same _projection function_):

{% include card_player.html video=240966482 episode=true %}

As you can see, `❚ zip` produces the _first_ combined value only when **both** input streams have all emitted their _first_ value. More generally, this is how `❚ zip` operates with two (or more) input streams:

- It waits for **all** input streams to have all emitted their _n-th_ value
- As soon as this condition is met, it combines all those _n-th_ values and emits the _n-th_ combined value
- As a result, it returns a new stream of combined events

 While `❚ combineLatest` combines values _whenever_ any input stream emits a value, `❚ zip` only combines each _n-th_ values together.

In the **combining streams** category, you now have the following cards:

- `❚ merge` ([episode 5](/merge))
- `❚ combineLatest` ([episode 7](/combineLatest))
- `❚ zip`