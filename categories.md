---
layout: page
titre: Catégories
permalink: /categories/
img: 
published: true
---

##DIY  
{% for post in site.posts %}
<p>{{ post.titre }}</p>
{% endfor %}
