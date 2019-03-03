---
id: reduce
lesson: 22
compare: [reduce, scan]
mainCompare: reduce
focusOn: scan
video: 255356781
learnBackAbout: throttleTime
learnAbout: max
title: reduce versus scan operator in RxJS (with animations!)
layout: default
class: post
preview_image: reduce/content_preview.jpg
preview_image_alt: reduce vs scan
revised: Monday, 26 Nov. 2018
---

`❚ reduce` takes the same three arguments as `❚ scan`:

- an input stream
- an **accumulator** function (e.g. prepend a `character` to a `string`)
- an initial value called **seed** (e.g. `!`)

[Learn more about **scan** ➜](/scan)

## Notes

As you can see, while `❚ scan` returns a new stream of progressively accumulated values, `❚ reduce` returns a new stream of, at most, one value. At most? If the input stream never completes, `❚ reduce` **will never emit any value** on the output stream.

Ultimately, `❚ reduce` is equivalent to `❚ scan` chained with `❚ takeLast(1)`.

## See also

> [![](/img/accumulator/content_preview.png){:.w300}](/accumulator) <br/> [**accumulator**](/accumulator)

> [![](/img/pipeline-operator/content_preview.jpg){:.w300}](/pipeline-operator) <br/> [**The JavaScript pipeline operator proposal**](/pipeline-operator)

> [![](/img/rxjs/content_preview_higher.jpg){:.w450.shadow-lg}](/rxjs) <br/> [**Launchpad for RxJS**](/rxjs)
