---
id: throttleTime
mainCompare: debounceTime
lesson: 13
video: 246763833
learnBackAbout: debounceTime
learnAbout: reduce  
compare: [debounceTime, throttleTime]
title: Rate-limiting in RxJS - debounceTime vs throttleTime
layout: default
class: post
preview_image: throttleTime/content_preview.jpg
preview_image_alt: The "throttleTime" operator
---

## debounceTime vs throttleTime in RxJS

> _If your stream is created from key presses or mouse movements, you'll likely deal with bursts of events.  But you can't react to every single event, as it would overload the CPU or flood the servers with too many requests._

`❚ debounceTime` rate-limits events, based on an "emission silence" window of time. `❚ throttleTime` doesn't delay events.

They both accept a _time period_ argument, such as `500` milliseconds.

> ## See also

> [![](/img/pipeline-operator/content_preview.jpg){:.w300}](/pipeline-operator) <br/> [**The JavaScript pipeline operator proposal**](/pipeline-operator)

> [![](/img/rxjs/content_preview_higher.jpg){:.w450.shadow-lg}](/rxjs) <br/> [**Launchpad for RxJS**](/rxjs)
