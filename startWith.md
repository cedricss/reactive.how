---
id: startWith
lesson: 11
title: Starting streams with initial values (Ep. 11)
layout: default
class: post
preview_image: startWith/content_preview.jpg
preview_image_alt: The "startWith" operator
---

The first event emitted by a stream may happen some time after the stream has started (note: I'll give more details on "how to start a stream" in a future episode).

In many cases, we have to wait for user clicks, for data to load, for an answer to arrive, etc. But, at the same time, we often want to compute or display initial data immediately when the request or the application starts.

Here is a new card: `❚ startWith`. It looks like this:

> ![](img/startWith/startWith.gif){:.w350}

Set an _initial_ value on `❚ startWith`, such as `0`:
- The output stream starts by emitting immediately this _initial_ value.

## Example

In the [Episode 3](/listen) we created a chain of 3 cards. Here is a small excerpt from this episode (or read [the full episode](/listen)):

- `❚ fromEvent` reacts to the `▬ toggle`. It creates a sequence of toggle events over time, **in reaction** to each toggle status change (read [Episode 1](/fromEvent)).
- `❚ map` projects each toggle events to `✔ true` or `✘ false` (read [Episode 2](/map)).
- `❚ subscribe` adds `▬ setWifi` as a **listener** of the stream. This listener accepts boolean values (`✔ true` or `✘ false`) and turns the wifi _on_ or _off_ accordingly.

> [![](img/startWith/toggle-wifi.jpg)](/listen)
> <br/><small>[Watch Episode 3 ↗](/listen)</small>

It begins like this:

- the application starts
- after a few seconds, the toggle is turned off by the user
- so, a first event `✘ false` is emitted
- as a result, the listener turns the wifi component _off_
- and so on...

But, from the pure perspective of the event stream, it's not clear what is the status of the wifi component _before_ the first interaction on the toggle. Is the wifi _on_ by default? _off_? maybe in an _undefined/buggy_ state?

I would like the chain of cards to be **responsible for setting the initial state** of the wifi component. To do so, I can add a fourth card to start with an initial `✔ true` event value:

> `❚ fromEvent(toggle)`<br/>
>  ➟`❚ map(isChecked)`<br/>
>  ➟ <span class="highlighted">`❚ startWith(✔)`</span><br/>
>  ➟`❚ subscribe(setWifi)`

## Conclusion

So, next time you want to display components with initial data, think "reactive" like you did for the rest of your app's life cycle. Instead of using this separated and imperative function to set initial values, couldn't you use `❚ startWith` on this stream you already rely on?






