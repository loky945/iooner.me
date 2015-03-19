---
layout: 	post
titre:  	"MySensors mon projet"
date:   	2015-03-19 17:00:00
auteur: 	iooner
categories: diy
tags:		sensors capteurs maison mysensors électronique		
img: 		"upload/mysensors.jpg"
desc:		Présentation de mon projet MySensors
partage:	1
comment:	1
complet:	1
---

##Introduction
MySensors est un projet opensource (hardware et software), permettant de réaliser vos propres sondes/capteurs par exemple dans le cadre d'une installation domotique.  
Ce projet utilise se base presque qu'exclusivement sur Arduino. Fort de de l'usage d'Arduino et de ses 2 communautés (Forum MySensors et les milliers de "bidouilleurs Arduino"), il en fait un projet parfait que je souhaitais vous présentez.  

##Théorie
MySensors à fait le choix d'une utilisation sans fil (Parfait c'est ce que je recherchais) pour ses sensors, relays et gateway. C'est l'usage de la bande 2.4Ghz que vous connaissez je présume déjà grâce au wifi. 2 modules 2.4Ghz reviennent autour de 10$ ce qui reste accessible pour le plus grand nombre :)  

Je parlais de sensors (**S**), relays (**R**), gateway (**GW**) et aussi de capteurs (les capteurs seront des sondes de température, ...), nous voilà sur la même longueur d'onde d'un point de vue vocabulaire. C'est sommairement comme ça que se compose MySensors.  
<img class="img-responsive" src="/img/upload/network_ms.png" alt="">  
Les différents capteurs (température, pression, ...) sont connectés à une arduino qui elle même se connecte via son module 2.4Ghz à un relays ou directement à la gateway. Le relay permet juste d'étendre la surface de votre installation. *A vérifier s'il est possible d'implanter des capteurs sur une carte relay.*  

Et pour terminer la gateway se connecte en réseau ou en USB à une box domotique, un pc, serveur... La compatibilité est grande et le système est facile à adapter à son usage.
<br /><br />
Une série d'articles va suivre sur la réalisation d'un projet MySensors intégrer à ma domotique Jeedom ou Domoticz, le choix n'est pas définitif. Je vous laisse ici le lien du projet [MySensors][ms].


[ms]:	http://www.mysensors.org/