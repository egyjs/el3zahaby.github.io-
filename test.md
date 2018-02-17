
<ul>
{% for page in site.tanawy %}
  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  ---
  <li>{{ page.files }}-{{ page.label }}-{{ page.docs }}</li>
{% endfor %}
</ul>
