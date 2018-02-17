
<ul>
{% for page in site.tanawy %}
  <li><a href="{{ page.url }}">{{ page }}</a></li>

{% endfor %}
{{ site.collections }}
</ul>

