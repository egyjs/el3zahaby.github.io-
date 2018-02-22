---
title: 'حل كتاب الحديث 1 مقررات اول ثانوي كامل'
layout: post
image: /assets/img/cover_hadith1_1.jpg
excerpt_separator: '<!--more-->'
tag: 'TF'
file: Hadith1

---

{{ page.title }}<!--more-->:

| بالتوفيق :clap:   |
| ------------  |
| ولتحميل الكتاب  : <a href="/assets/files/{{ page.file }}.pdf" download >اضغط هنا</a>  |


<!--<div class="url">/assets/files/{{ page.file }}.pdf</div>-->

{% assign files = site.static_files %}
{% for f in files %}
  {% if f.path contains '/assets/files/Hadith1/' %}
<div class="url" id="{{ f.basename }}" >{{ f.path }}</div>
  {% endif %} 
{% endfor %}