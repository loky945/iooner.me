---
layout: 	post
titre:  	"Seedbox simple sous Debian"
date:   	2014-09-11 0:00:00
auteur: 	iooner
categories: tutoriel
tags:		Debian seedbox torrent linux transmission
img: 		"upload/seedbox.jpg"
desc:		Installation et configuration simple d'une seedbox sous Debian
partage:	1
comment:	1
complet:	1
---



Hellow,  
Voici un petit tutoriel sur l’installation et la configuration rapide d’une seedbox sous la distribution linux Debian.  

**Une seedbox keskecé ?** Une seedbox est en faite un client P2P/Torrent doté d’un relativement gros débit permettant de télécharger un fichier sur ce réseau et ensuite le distribuer. Attention P2P ne dit pas obligatoirement téléchargement illégal. Faites, ce que vous voulez, mais je n’en suis pas responsable. 
<br><br>
Le mieux est de partir sur votre serveur dédié. Question de bande passante.  

**Installons, le deamon Transmission :** 

{% highlight sh %}
{% raw %}
apt-get install transmission-daemon
{% endraw %}
{% endhighlight %}  

Une fois cela fait, il ne suffit plus que de configurer votre nouveau bébé.  

Allons éditer le fichier : **/etc/transmission-daemon/settings.json** ou toute l’action se passe. (*Nano, Vim, … Ce que vous voulez je ne suis pas raciste*). 

{% highlight sh %}
{% raw %}
nano /etc/transmission-daemon/settings.json
{% endraw %}
{% endhighlight %}  

On ne va pas se prendre la tête sur la configuration des débits étant en début de config et compagnies maintenant. Cela sera possible via l’interface web.  

Passons à la configuration des chemins ou iront les fichiers de votre seedbox. Notez qu’il sera nécessaire d’appliquer les droits au user **debian-transmission** pour qu’il puisse y écrire.  

{% highlight sh %}
{% raw %}
"download-dir": "Chemin des téléchargements terminés",             
"incomplete-dir": "Chemin des téléchargements en cours",
{% endraw %}
{% endhighlight %}  

Le paramètre *"incomplete-dir-enabled": true,* permet ou non la séparation (en deux répertoires) des téléchargements en cours ou terminés.  

Si votre machine dispose d’ip failover, … il est possible de lui imposer l’ip ou écoutera votre seedbox. Par défaut 0.0.0.0, votre seedbox écoutera sur toutes les ip.

{% highlight sh %}
{% raw %}
"bind-address-ipv4": "0.0.0.0",
"bind-address-ipv6": "::",
{% endraw %}
{% endhighlight %}   
  
Ensuite passons à la **configuration de l’interface web** permettant le contrôle de votre seedbox.

{% highlight sh %}
{% raw %}
"rpc-authentication-required": true, // Activation du mot de passe
"rpc-enabled": true,                 // Activation de l'interface web
"rpc-password": "Password",          // Entrez votre mot de passe
"rpc-port": 8080,                    // Port de l'interface web
"rpc-url": "/",                      // Path de l'interface web
"rpc-username": "seedbox",           // Login pour s'y connecter
{% endraw %}
{% endhighlight %}   
  
On sauvegarde notre fichier de configuration & on reload !
{% highlight sh %}
{% raw %}
service transmission-daemon reload
{% endraw %}
{% endhighlight %}  
  
Rendez-vous sur votre interface web **http://ip:8080** entrer votre login/mdp. Et vous voici sur une interface des plus classiques pour les utilisateurs de torrents et cie.  
  
**Configurez les vitesses limites.** Dans le cas de cette interface, la gestion horaire de la bande passante est très basique. Si vous souhaitez pousser plus loin votre installation à domicile par exemple ou la gestion de la BP peut-être très utile je vous propose de regarder du côté de ruTorrent.
<img class="img-responsive" src="/img/upload/client_torrent.png" alt="">  

Pour les plus parano d’entre nous, l’on peut aussi utiliser un **reverse proxy** afin de ne pas ouvrir un port. Il est aussi possible de limite l’accès à une adresse ip à votre interface de gestion via le json en activant la **rpc whitelist**. 
{% highlight sh %}
{% raw %}
"rpc-whitelist": "127.0.0.1",
"rpc-whitelist-enabled": false,
{% endraw %}
{% endhighlight %}  

Voilà, voilà ! Let's seed!



<hr>

[Voir l'article original][old] sur l'ancien blog.

[old]:			http://old.iooner.me/une-seedbox-simple-sous-debian/
