---
title: اول ثانوي
permalink: /tanawy/1/
layout: landing
---

{% for tanawy in site.tanawy %}

<div class="col s12 m3">
    <a href="{{ tanawy.url | prepend: tanawy.baseurl }}">
        <div class="card">
            <div class="card-image">
                <img src="{{ site.baseurl }}{{ post.image }}" width="100%" />
                <span class="card-title" style="font-size: 100%;">{{ post.title }}</span>
                <a href="{{ post.url | prepend: site.baseurl }}" class="btn-floating halfway-fab waves-effect waves-light red">
                    <i class="material-icons">subdirectory_arrow_right</i>
                </a>
            </div>
            <div class="card-content">
                <p>{{ tanawy.excerpt }}...</p>
            </div>
        </div>
    </a>
</div>

{% endfor %} 