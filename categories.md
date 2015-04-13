---
layout: page
titre: Catégories
permalink: /categories/
img: 
published: true
---

{% for category in site.categories %}
  <li style="list-style: none;"><h4 id="{{ tag[0] }}">{{ category | first | capitalize}}</h4>
    <ul>
    {% for posts in category %}
      {% for post in posts %}
        {% if post.url %}<li style="list-style: none;"><a href="{{ post.url }}">{{ post.title }}</a> - <time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%d/%m/%Y" }}</time></li>{% endif %}
      {% endfor %}
    {% endfor %}
    </ul>
  </li>
{% endfor %}

