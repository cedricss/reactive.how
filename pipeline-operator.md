---
id: pipeline-operator
lesson: 27
title: Reactive Programming - JavaScript Pipeline Operator
layout: default
class: post
preview_image: pipeline-operator/content_preview.jpg
preview_image_alt: pipeline operator
---

Today, I show you the pipeline operator proposal in Javascript, in action with RxJS pipeable operators. Links about the animated cards and my configuration are after the video!

![](/img/pipeline-operator/code-with-pipeline-operator.gif)
> _Recently, [Ben Lesh tweeted](https://twitter.com/BenLesh/status/973255406947467264) the importance of the [pipeline operator proposal](https://github.com/tc39/proposal-pipeline-operator) in JavaScript._

**Try the pipeline operator!** This is what I installed:

* Babel plugin [proposal-pipeline-operator](https://www.npmjs.com/package/@babel/plugin-proposal-pipeline-operator) (babel 7 beta)
* [Prettier](https://prettier.io/) code formatter, that now supports the pipeline operator by default
* [Fira Code](https://github.com/tonsky/FiraCode) font with programming ligatures to have `▷` instead of `|>`

> <small>🎨 In the [previous episode](/max), I used the [Gloom theme](https://marketplace.visualstudio.com/items?itemName=adamgirton.gloom) port for VS Code. But it doesn't work with ▷ the ligature. Instead, in today's demo, I used the [Hydra theme](https://marketplace.visualstudio.com/items?itemName=juanmnl.vscode-theme-hydra).</small>

On [reactive.how](/), I create animated cards that show how Reactive Programming operators work. In particular, in this episode you saw _map_ and _take_:

> [![](/img/map/icon.png){:.w150}](/map) [![](/img/take/icon.png){:.w250}](/take) <br/> ▶️ [Episode 2 - **map**](/map) &nbsp;▶️ [Episode 9 - **take**](/take)

I also wrote about RxJS [**Pipeable operators vs. dot-chaining**](/rxjs/pipeable-operators-vs-dot-chaining).

## A new episode every Monday

> [![](/img/reduce/reduce-scan-featured.gif){:.w350}](/reduce) <br/>[Episode 22 - **scan vs. reduce**](/reduce)

📮 You can subscribe to [the mailing list](#subscribe) to receive new episodes right inside your inbox. Or [follow me on Twitter](https://twitter.com/CedricSoulas).
