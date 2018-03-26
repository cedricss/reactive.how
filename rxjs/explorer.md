---
id: rxjs/explorer
title: RxJS Explorer
layout: default
class: app
preview_image: rxjs/explorer_preview.jpg
preview_image_alt: explorer preview
date:
---

<h3>reactive.how - Episode 28</h3>

<h1 class="ui header">RxJS Explorer</h1>

<div class="ui secondary menu">
<a class="item" data-tab="v5.0">RxJS 5.0</a>
<a class="item" data-tab="v5.5">RxJS 5.5</a>
<a class="item" data-tab="v5.6">RxJS 5.6</a>
<a class="item active" data-tab="v6.0">RxJS 6.0</a>
</div>

<div class="ui tab" data-tab="v5.0">
{% include rxjs_code.html version="5.0" package="^5.0.3" %}
</div>
<div class="ui tab" data-tab="v5.5">
{% include rxjs_code.html version="5.5" package="^5.5.7" %}
</div>
<div class="ui tab" data-tab="v5.6">
{% include rxjs_code.html version="5.6" package="^5.6.0-forward-compat.0" %}
</div>
<div class="ui tab active" data-tab="v6.0">
{% include rxjs_code.html version="6.0" package="^6.0.0-beta.2" %}
</div>

<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>

<script src="/lib/semantic/dist/components/tab.min.js"></script>

<script>$('.menu .item').tab();</script>

## Learn more

* [Episode 27 - JavaScript Pipeline Operator](/pipeline-operator)
* [Pipeable Operators](https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md) <i class="icon small external alternate"></i>
* [RxJS Update Guide (work in progress)](https://goo.gl/osWFzo) <i class="icon small external alternate"></i>

<a class="ui tiny pink button" href="/">
    <i class="block layout icon"></i> Browse all episodes
</a>
