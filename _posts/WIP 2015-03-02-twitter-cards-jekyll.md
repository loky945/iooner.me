---
layout: 	post
titre:  	"Intégration Twitter cards Jekyll"
date:   	2015-03-02 12:45:00
auteur: 	iooner
categories: Jekyll
tags:		twitter cards jekyll intégration		
img: 		"upload/twittercards.jpg"
desc:		
partage:	1
comment:	1
complet:	1
---


{% highlight html %}
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@iooner">
<meta name="twitter:creator" content="@iooner">
{% if page.title %}
<meta name="twitter:title" content="{{ page.title }}">
{% else %}
<meta name="twitter:title" content="{{ site.title }}">
{% endif %}
{% if page.url %}
<meta name="twitter:url" content="{{ site.url }}{{ page.url }}">
{% endif %}
{% if page.desc %}
<meta name="twitter:description" content="{{ page.desc }}">
{% else %}
<meta name="twitter:description" content="Blog d'iooner Belge, développeur web. #maker, #hacker, #geek, #urbex.">
{% endif %}
{% if page.img %}
<meta name="twitter:image:src" content="{{ site.url }}/img/{{ page.img }}">
{% else %}
<meta name="twitter:image:src" content="{{ site.url }}/img/avatar.png">
{% endif %}
{% endhighlight %}