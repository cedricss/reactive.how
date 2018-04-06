---
id: rxjs/explorer
title: RxJS Explorer
lesson: 28
layout: default
class: post
preview_image: rxjs/explorer_preview.jpg
preview_image_alt: explorer preview
---

<div class="ui stackable grid">
<div class="seven wide column">
<h1 class="ui header explorer">RxJS Explorer <code class="ui pink label">2.0</code></h1>
<h2 class="subtitle">Learn. Compare. Update.</h2>
</div>
<div class="nine wide right aligned column">
<a href="/rxjs/pipeable-operators"><img src="/img/rxjs/pipeable-operators/interval-map-take.png" class="w350" alt="interval map take"/></a><br/>
This explorer is based on those three cards.<p><i class="small pink question circle icon"></i> <a href="/rxjs/pipeable-operators"><strong>Learn how they work »</strong></a></p>
</div>

<div class="ui five item stackable menu">
<a class="item" data-tab="v5.0">RxJS 5.0</a>
<a class="item" data-tab="v5.5">RxJS 5.5</a>
<a class="item" data-tab="v5.6">RxJS 5.6</a>
<a class="item" data-tab="v6.0-compat">RxJS 6.0 <small>&nbsp;+ rxjs-compat</small></a>
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
<div class="ui tab" data-tab="v6.0-compat">
{% include rxjs_code.html version="6.0-compat" package="^6.0.0-rc.0" %}
</div>
<div class="ui tab active" data-tab="v6.0">
{% include rxjs_code.html version="6.0" package="^6.0.0-rc.0" %}
</div>

<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>

<script src="/lib/semantic/dist/components/tab.min.js"></script>

<script>$('.menu .item').tab();</script>
