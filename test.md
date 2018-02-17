---
layout: none
---
<ul>
  {% directory path: /_tanawy/1/ exclude: private %}
    <li>
      <img src="{{ file.url }}"
           alt="{{ file.name }}"
           datetime="{{ file.date | date_to_xmlschema }}" />
    </li>
  {% enddirectory %}
</ul>
