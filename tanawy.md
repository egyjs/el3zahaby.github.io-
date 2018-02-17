---
layout: landing
title: Jekyll tanawy
---

{% for tanawy in site.tanawy %}


<a href="{{ tanawy.url | prepend: site.baseurl }}">
        <h2>{{ tanawy.title }}</h2>
</a>

<p class="post-excerpt">{{ tanawy.description | truncate: 160 }}</p>

{% endfor %}   