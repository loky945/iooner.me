---
layout: page
titre: Tags
permalink: /tags/
img: 
published: true
---

{% for tag in site.tags %}
  <li style="list-style: none;"><h3>{{ tag | first }}</h3>
    <ul>
    {% for posts in tag %}
      {% for post in posts %}
        {% if post.url %}<li style="list-style: none;"><a href="{{ post.url }}">{{ post.title }}</a></li>{% endif %}
      {% endfor %}
    {% endfor %}
    </ul>
  </li>
{% endfor %}