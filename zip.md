---
id: zip
mainCompare: combineLatest
lesson: 8
video: 240966482
compare: [combineLatest, zip]
learnAbout: rxjs/pipeable-operators
learnBackAbout: count
title: zip vs combineLatest in RxJS with animations
layout: default
class: post
preview_image: zip/content_preview.jpg
preview_image_alt: Zip vs CombineLatest
---

## zip vs combineLatest in RxJS

As you can see, `❚ zip` produces the _first_ combined value only when **both** input streams have all emitted their _first_ value. 

While `❚ combineLatest` combines values _whenever_ any input stream emits a value, `❚ zip` only combines each _n-th_ values together.

> ## See also

> [![](/img/reduce/reduce-scan-featured.gif){:.w350}](/reduce) <br/> [**reduce vs scan**](/reduce)

