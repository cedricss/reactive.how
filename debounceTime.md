---
id: debounceTime
mainCompare: debounceTime
focusOn: delay
lesson: 12
video: 245691062
compare: [debounceTime, delay]
learnBackAbout: delay
learnAbout: throttleTime
title: Rate-limiting debounceTime vs delay in RxJS
layout: default
class: post
preview_image: debounceTime/content_preview.jpg
preview_image_alt: The "debounceTime" operator
---

## debounceTime vs delay in RxJS

> _If your stream is created from key presses or mouse movements, you'll likely deal with bursts of events. But you can't react to every single event, as it would overload the CPU or flood the servers with too many requests._

A strategy is to wait for a certain "emission silence" window of time (where the user has stopped typing or moving his mouse) to actually handle the latest word or mouse position.

To do so, you can use `❚ debounceTime`. Like _delay_, it waits for a certain time period and delays events. But _debounceTime_ can also ignore events.

They both accept a _time period_ argument, such as `3000` milliseconds.

_debounceTime_ is a **rate-limiting** operator. It ignores events but also delays others.

## Trying different time periods

> ![](img/debounceTime/delayDebounceTime1500.jpg){:.w350}<br/>
> The time period is small enough that no events are ignored

> ![](img/debounceTime/delayDebounceTime3000.jpg){:.w350}<br/>
> With a 3000ms time period, some events are ignored

> ![](img/debounceTime/delayDebounceTime4500.jpg){:.w350}<br/>
> As the time period gets larger, even more events are ignored

> ## Next

>  [![](/img/throttleTime/content_preview.jpg){:.w300}](/throttleTime) <br/> [**debounceTime vs throttleTime in RxJS**](/throttleTime)
