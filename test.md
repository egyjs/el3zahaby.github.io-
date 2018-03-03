---
layout: none

---

{% assign level = 0 %}
{% assign previous_level = 1 %}
{% assign sorted_pages = site.pages | sort:'url' %}
{% for page in sorted_pages %}
{% assign level = page.dir | split:"/" | size | minus:1 %}
{% if level > previous_level %}
<ul>
{% elsif level < previous_level %}
</ul>
  {% endif %}
<li><a href="{{page.url}}">{{page.dir | split:"/" | last | replace:'-',' ' }}</a></li>
{% assign previous_level = level %}
{% endfor %}
------------


{{ sorted_pages }}