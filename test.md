---
layout: none

---
{% case page.layout %}
	{% when 'page' %}
		{% for page in site.pages %}
			{% if page.layout == 'page' %}
				{% if page.title != 'Home' %}
					<a href="{{ page.url }}">{{ page.title }}</a>
				{% endif %}
			{% endif %}
		{% endfor %}
	{% when 'app' %}
		{% for page in site.pages %}
			{% if page.layout == 'app' %}
				{% if page.title != 'Home' %}
					<a href="{{ page.url }}">{{ page.title }}</a>
				{% endif %}
			{% endif %}
		{% endfor %}
	{% when 'default' %}
		{% for page in site.pages %}
			{% if page.title != 'Home' %}
				<a href="{{ page.url }}">{{ page.title }}</a>
			{% endif %}
		{% endfor %}
	{% else %} 
{% endcase %}
g