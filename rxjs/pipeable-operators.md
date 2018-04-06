---
id: pipeable-operators
lesson: 30
title: Draw in your console with RxJS
layout: default
class: post
preview_image: rxjs/pipeable-operators/content_preview.jpg
preview_image_alt:
---

I will detail how works the "gaussian demo" I made in [Episode 27](/pipeline-operator). This time, we will use RxJS pipeable operators with the pipe method. Also, we will create a custom and reusable operator with the pipe utility function. You can download the full source code in multiple version on [reactive.how/rxjs/explorer](http://reactive.how/rxjs/explorer).

* Part 1 - [Reminder: stream, reactivity and immutability](#reminder-stream-reactivity-and-immutability)
* Part 2 - [Implementation with RxJS pipeable operators](#implementation-with-rxjs)
* Part 3 - [Creation of a reusable and custom operator](#creation-of-a-reusable-and-custom-operator)

> We'll print this in the console:

> ![](/img/rxjs/pipeable-operators/gaussian.gif){:.w200}

> with those three cards:

> ![](/img/rxjs/pipeable-operators/interval-map-take.png){:.w400}

## Reminder: stream, reactivity and immutability

A **stream** is a sequence of events over time. You can create a stream from multiple sources. With `❚ fromEvent` you can create, for example, a stream from _click events_ (watch [Episode 1](/fromEvent)). And today, we'll use `❚ interval` to create a stream that emits incremental numbers, periodically (watch [Episode 16](/interval)).

In Reactive Programming, we react to values emitted by streams, to errors and to completion notifications (watch [Episode 9](/take)). This is the **reactivity** principle. To do so, you can subscribe to a stream, adding a listener (watch [Episode 3](/listen)). In this exercise, `console.log` will react to the emitted values.

Finally, we have **operators** to transform, filter and combine streams. An operator never modifies the input stream. Instead, it returns a new stream. This is the **immutability** principle. To create a "gaussian" stream from _interval_ we need:

* the mapping operator `❚ map`. It projects each event of the input stream with a project function (watch [Episode 2](/map)).
* the filtering operator `❚ take`. We can set a maximum _amount_ of events to emit (watch [Episode 9](/take)). Indeed, _interval_ emits an infinite number of events, but we only want to print 25 lines on the console.

## Implementation with RxJS

This example is based on the version **6.0-rc0** of RxJS. You can explore the multiple version of this code example on [reactive.how/rxjs/explorer](http://reactive.how/rxjs/explorer) (version 5.0, 5.5, with dot-chaining or pipeable operators, etc.)

Stream creation functions are imported straight from `rxjs`, while operators are imported from `rxjs/operators`:

```
import { interval } from "rxjs";
import { map, take } from "rxjs/operators";
```

Let's create a stream that emits incremental numbers every 350ms. This function returns an `Observable`:

```
const stream = interval(350);
```

`Observables` have a built in pipe method where we can chain operators:

```
const stream = interval(350).pipe(
    take(25)
);
```

> ![](/img/rxjs/pipeable-operators/interval.gif){:.w200}
> <br/><small>stream.subscribe(console.log);</small>

We now have a stream that emits incremental numbers every 350ms and completes immediately after the 25th value. Use _map_ to project each emitted number with a gaussian function:

```
const stream = interval(350).pipe(
    take(25),
    map(gaussian)
);
```

> ![](/img/rxjs/pipeable-operators/map.gif){:.w200}
> <br/><small>stream.subscribe(console.log);</small>

We can pipe _map_ a second time to create a stream of "•" dots from the stream of decimals:

```
const stream = interval(350).pipe(
    take(25),
    map(gaussian),
    map(num => "•".repeat(Math.floor(num * 65)))
);
```

> ![](/img/rxjs/pipeable-operators/gaussian.gif){:.w200}
> <br/><small>stream.subscribe(console.log);</small>

## Creation of a reusable and custom operator

To build a custom and reusable operator from other pipeable operators, import the pipe function:

```
import { interval, pipe } from "rxjs";
```

We refactor the last two operations into a reusable `draw` operator:

```
const draw = brush =>
  pipe(
    map(num => brush.repeat(Math.floor(num * 65))),
    take(LENGTH)
  );
```

We can now use multiple times our home made operator like any other RxJS operators:

```
const stream = interval(TICK).pipe(
  map(gaussian),
  draw("•")
);

const stream2 = interval(TICK).pipe(
  map(bezier),
  draw("~")
);
```

You can download the full source code in multiple version on [reactive.how/rxjs/explorer](http://reactive.how/rxjs/explorer).
