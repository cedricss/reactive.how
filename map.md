---
id: map
lesson: 2
title: Learn reactive programming - Lesson 2, Immutability
layout: default
class: post
preview_image: map/content_preview.jpg
preview_image_alt: Map reactive operator and immutability
---

Last Monday you created [a stream of toggle events](fromEvent). When an action was performed on the toggle (on→off or off→on), an event box was emitted.

![](img/fromEvent/box.png){:.box}
![](img/fromEvent/box.png){:.box}
![](img/fromEvent/box.png){:.box}

You can find dozens of properties inside each box. In particular, a box contains a property about the **status** of the toggle after the action. This is what we are looking for!

![](img/map/status-piece.png)

Today I'm happy to hand you:

* the `❚ map` **mapping** card 
* the `▬ isChecked` **project** function piece

`▬ isChecked` accepts events from _checkable_ elements (such as checkboxes, radio buttons, options of a menu, toggles, etc). It returns `✔ true` if the element is checked, `✘ false` otherwise. Here is how it works with `❚ map`:

{% include card_player.html video=238067754 episode=false %}

Use a project function on this card, such as `▬ isChecked`. Then, this is how `❚ map` operates:

- It waits for events from an input stream
- It projects each event of this input stream with a **project** function
- As a result, it returns a **new stream** of projected events

A card <span class="highlighted">never modifies</span> the input stream. Instead, it returns a new stream. This principle is called **immutability**.

## Summary

Awesome!

* you unlocked `❚ map`. 
* you unlocked `▬ isChecked`
* you created a new stream from an existing one
* you learned the principle of **immutability**

In your collection, you now have:

* one **creation** card `❚ fromEvent`
* one **mapping** card `❚ map`
* one **interactive** piece `▬ toggle`
* one **project** function piece `▬ isChecked`

Next Monday we'll start building a little machine by assembling several cards together. See you!