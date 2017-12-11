---
id: throttleTime
lesson: 13
title: Two rate limiting strategies (debounceTime vs throttleTime)
layout: default
class: post
preview_image: throttleTime/content_preview.jpg
preview_image_alt: The "throttleTime" operator
---

Last Monday [I introduced](/debounceTime) the following issue:

> _If your stream is created from key presses or mouse movements, you'll likely deal with bursts of events.  But you can't react to every single event, as it would overload the CPU or flood the servers with too many requests._

I presented the `❚ debounceTime` card. It rate-limits events, based on an "emission silence" window of time. Learn more about it in [Episode 12](/debounceTime).

Today, we explore another rate-limiting strategy with the `❚ throttleTime` card. Like `❚ debounceTime`, it accepts a time period argument. But `❚ throttleTime` doesn't delay events:

{% include card_player.html video=246763833 episode=true %}

Use a `▬ number` piece on `❚ throttleTime` to set a _time period_, such as `500` milliseconds. Then, this is how `❚ throttleTime` operates:

- It starts by emitting the first event of the input stream
- Then, it limits the rate of events to **at most** one per _time period_
- As a result, it returns a new stream of "throttled" events

## Summary

`❚ debounceTime` and `❚ throttleTime` both accept a _time period_ and rate limit the emissions of the input stream. But as you can see on the visualization above, they operate in a very different way. Take some time considering both options for your next project!