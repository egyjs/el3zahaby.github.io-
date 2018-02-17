
<ul>
{% for page in site.tanawy %}
  <li><a href="{{ page.url }}">{{ page.title }}</a></li>

{% endfor %}
</ul>

<li>{{ site.tanawy.files }}-{{ page.label }}-{{ page.docs }}</li>