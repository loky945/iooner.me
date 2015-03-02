---
layout: 	post
titre:  	"Seedbox simple sous Debian"
date:   	2014-09-11 0:00:00
auteur: 	iooner
categories: tutoriel
tags:		Debian seedbox torrent linux
img: 		"upload/seedbox.jpg"
partage:	1
comment:	1
complet:	1
---
Hellow,

Voici un petit tutoriel sur l'installation et la configuration rapide d'une seedbox sous la distribution linux Debian.

Une seedbox keskecé ? Une seedbox est en faite un client P2P/Torrent doté d'un relativement gros débit permettant de télécharger un fichier sur ce réseau et ensuite le distribuer. Et aussi à augmenter votre ratio dans certains cas. Attention P2P ne dit pas obligatoirement téléchargement illégal. Faites, ce que vous voulez, mais je n'en suis pas responsable.  

Installons, le deamon Transmission :

```
apt-get install transmission-daemon
```

<br>

Une fois cela fait, il ne suffit plus que de configurer votre nouveau bébé.

Allons éditer le fichier : **/etc/transmission-daemon/settings.json** ou toute l'action se passe. *(Nano, Vim, ... Ce que vous voulez je, ne suis pas raciste)*.  

```
nano /etc/transmission-daemon/settings.json
```  
  
On ne va pas se prendre la tête sur la configuration des débits étant en début de config et compagnies maintenant. Cela sera possible via l'interface web. Passons à la configuration des chemins ou iront les fichiers de votre seedbox. Notez qu'il sera nécessaire d'appliquer **les droits au user debian-transmission** pour qu'il puisse y écrire.

```
"download-dir": "",  
```  
```           
"incomplete-dir": "",
```  
```
"incomplete-dir-enabled": true,
```  

*incomplete-dir-enabled* permet d'activer ou dans la séparation dans les 2 dossiers.  

  

Si votre machine dispose d’ip failover (par exemple), … il est possible de lui imposer l’ip ou écoutera votre seedbox. Par défaut 0.0.0.0, votre seedbox écoutera sur toutes les ip.  

```
"bind-address-ipv4": "0.0.0.0",
```  
Même remarque pour l'ipv6.

<hr>

[Voir l'article original][old] sur l'ancien blog.

[old]:			https://iooner.me/old
