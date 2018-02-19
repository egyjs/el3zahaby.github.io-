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

{% for image in site.static_files %}
image.path
  {% if image.path contains '/assets/files/Hadith1' %}
    <img src="{{ image.path }}" alt="">
  {% endif %}
{% endfor %}