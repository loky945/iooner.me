---
layout: 	post
titre:  	"Réflexion et besoins domotique"
date:   	2015-01-16 13:26:47
auteur: 	iooner
categories: domotique
tags:		reflexion besoins jeedom rfxcom 433mhz zwave diy
img: 		"upload/domotique.jpg"
partage:	1
comment:	1
complet:	1
---
Petite réflexion pré-domotique ! Quels sont les besoins et les solutions envisagées ?!

##Besoins et Solutions
  
Mon choix s'était porté vers Domoticz dans une premier temps. Au final mon choix se porte sur Jeedom qui me semble plus suivi dans son développement même si son utilisation dans un premier temps est beaucoup plus complexe, il est beaucoup plus complet. Certains n'apprécieront pas trop le fonctionnement des plugins payants.  
**Alors sur quoi ça tourne ?** J'ai testé d'avoir Jeedom totalement sur une Raspberry Pi B mais en poussant un peu l'on trouve rapidement les limites de cette petite carte. La solution est simple. Jeedom sera installée sur mon serveur web dans sa baie. Mais là, le souci est la portée. Rien ne passe ou presque. Pour fixer cela un Jeedom esclave ne servant qu'à l'envoi des commandes Zwave et 433Mhz au travers du réseau et placé au centre de la maison. Plus de problèmes de portée !  

**La domotique c'est hors de prix !** C'est partiellement vrai. Mais pour palier à cela le choix Jeedom précédement cité m'évite l'achat d'une box autour de 500€ pour celle répondant à mes besoin. Mon seul investissement jusqu'à maintenant est un RfxCom et un Razberry (quand je pourrai le commander faute de stock).  
Ensuite, je vais *essayer de* réaliser une bonne partie des capteurs dont j'ai besoin moi-même coté soft et hardware. Pour la partie box, je test actuellement le plugin mySensors parfaitement adapté à ce genre de projet.