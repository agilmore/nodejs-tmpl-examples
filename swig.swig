<!DOCTYPE HTML>
<html>
<head>
  <title>{{ title }}</title>
</head>
<body>
  <h1>{{ title }}</h1>
  <p>A list of people:</p>
  {% for person in people %}
    {% if loop.first %}<ul>{% endif %}
      <li>{{ person }}</li>
    {% if loop.last %}</ul>{% endif %}
  {% endfor %}
  
  <p>An optional paragraph:</p>
  {% if optext %}
    <p>{{ optext }}</p>
  {% endif %}
  
  {% include "footer.swig" %}
</body>
</html>
