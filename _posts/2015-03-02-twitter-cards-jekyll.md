---
layout: 	post
titre:  	"Intégration Twitter cards avec Jekyll"
date:   	2015-03-06 14:45:00
auteur: 	iooner
categories: Jekyll
tags:		twitter cards jekyll intégration		
img: 		"upload/twittercards.jpg"
desc:		Intégration des Twitter cards à Jekyll.
partage:	1
comment:	1
complet:	1
---

Les [Twitter Cards][cards] vous permettent d'avoir un meilleur contrôle et statistiques sur le partage de vos liens sur Twitter. Il existe [plusieurs type de cartes][types] plus adapté à la vidéo, photo, ... A vous de faire votre choix.  
Pour le blog j'ai fais le choix de la "summary card" qui contiendra les infos suivantes :  

* Mon compte Twitter @iooner,
* Le titre de l'article (ou de la page),
* L'URL vers l'article/page,
* Description de la page ou extrait de l'article,
* Mon avatar ou l'illustration de l'article.

##Intégration de la "carte"  
A chaque partie j'utilise une condition afin de savoir si oui ou non je suis sur une page. Si non, je suis sur un article. L'exemple principal est l'utilisation de mon avatar en l'absence d'une illustration de page ou d'article.

*Précision suite à une question: Les meta sont à placer dans votre head.*

{% highlight HTML %}
{% raw %}
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
<meta name="twitter:description" content="Description générique.">
{% endif %}
{% if page.img %}
<meta name="twitter:image:src" content="{{ site.url }}/img/{{ page.img }}">
{% else %}
<meta name="twitter:image:src" content="{{ site.url }}/img/avatar.png">
{% endif %}
{% endraw %}
{% endhighlight %}  

Si vous voulez en savoir plus sur les tags utilisés (page.desc, ...), pour rappel la source du blog est disponible sur [Github][git] ou n'hésitez pas à poser vos questions en commentaire.


[cards]:	https://dev.twitter.com/cards/overview
[types]:	https://dev.twitter.com/cards/types
[git]:		https://github.com/iooner/iooner.me