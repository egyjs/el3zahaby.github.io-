

{% assign files = site.pages %}
{% for f in files %}
  {% if f.path contains "tanawy" %}
    <div class="url" id="{{ f.basename }}" >{{ f.path }}| {{ f.url }}</div>
  {% endif %}
{% endfor %}