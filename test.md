

{% assign files = site.pages %}
{% for f in files %}
  {% if f.path contains "tanawy" %}
    <div class="url"   > {{ f.url }}</div>
  {% endif %}
{% endfor %}

----
{% assign files = site.pages %}
{% for f in files %}
    <div class="url"   > {{ f.url }}</div>
{% endfor %}