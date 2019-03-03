---
id: scan
compareWith: reduce
lesson: 21
compare: [scan]
video: 254283000
learnBackAbout: filter
learnAbout: merge
title: The RxJS scan operator and the accumulator function
layout: default
class: post
preview_image: scan/content_preview.jpg
preview_image_alt: Scanning a stream
revised: Monday, 26 Nov. 2018
---

## Scan arguments

`❚ scan` takes three arguments:

- an input stream
- an **accumulator** function (e.g. prepend a `character` to a `string`)
- an initial value called **seed** (e.g. `!`)

The **accumulator** function combines two values:

- an accumulated value called <code class="two">accumulation</code>
- and a <code class="one">value</code>

As a result, the **accumulator** returns a <code class="two">new accumulation</code>.

## Notes

- As you can see, the output stream does not start with the seed. This is how it works, for example, in [RxJS](http://reactivex.io/rxjs/).
- In some other reactive stream libraries (like [xstream](https://github.com/staltz/xstream) and [Most.js](http://mostcore.rtfd.io)) the output stream starts with the seed.
- To start with the seed in RxJS and such, you can chain `❚ startWith(seed)` and `❚ scan(f, seed)`.
