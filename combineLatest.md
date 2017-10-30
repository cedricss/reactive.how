---
id: combineLatest
lesson: 7
title: Learn Reactive Programming - Episode 7 (combineLatest vs merge)
layout: default
class: post
preview_image: content_preview.jpg
preview_image_alt: CombineLatest vs Merge
---

In [Episode 5](/merge) you have discovered the _combining streams_ category and [merged](/merge) two input streams. Today, I show you a second card from this category: `❚ combineLatest`.

Let's compare this card with `❚ merge`, used on the same input streams:

{% include card_player.html video=240131697 episode=true %}

On the one hand, `❚ merge` doesn't need a _projection function_, as it [doesn't change the event values](/merge) (learn more about projection functions in [Episode 2](/map)).

On the other hand, `❚ combineLatest` accepts a _projection function_ to combine two values (or more) into a new one, noted figuratively `⚬ ⟶ ⚭ ⟵ ⚬`.

 This is how `❚ combineLatest` operates with two (or more) input streams:

- **Whenever** any input stream emits a value, it combines the **latest** values emitted by each input stream
- As a result, it returns a new stream of combined events

You now know two different ways of combining streams 🙌. Next Monday, I'll show you a third card that combines streams!