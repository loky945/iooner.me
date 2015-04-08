---
layout: 	post
titre:  	"Réflexion Domotique & MySensors"
date:   	2015-04-08 15:42:02
auteur: 	iooner
categories: domotique
tags:		mysensors zwave jeedom domotique 		
img: 		"upload/domotique.jpg"
desc:		Réflexion sur la futur base domotique & MySensors
partage:	1
comment:	1
complet:	1
---

Dans cette première approche à la domotique mon bureau servira de "maquette" à la maison entière pour certaines parties. Ceux suivant le blog vont très certainement remarquer que plusieurs projets que je cite ci-dessous sont déjà en place chez moi. Le souci, ils sont chacun dans leur coin à parler "leur langue". Il est temps de standardiser et centraliser sur Jeedom.

##Liste des premiers besoins
 - Compteur électrique,
 - Compteur d'eau,
 - Niveau de sel (adoucisseur d'eau),
 - Passage du facteur,
 - Contrôle et état de la porte du garage,
 - Intégration de la station météo (Davis Vantage Pro 2).

**Dans le bureau**  

 - Gestion du chauffage,
 - Gestion de la climatisation,
 - Détection de présence,
 - Détection de fumées (incendie),
 - Gestion et monitoring de certaines prises électriques,
 - Vidéosurveillance.


##Les "solutions maisons"
J'ai arrêté mon choix sur Jeedom dans le choix de la "box domotique". Il sera installé sur un petit serveur atom pour le master et utilisera une Raspberry Pi en esclave placé au centre de la maison.  
Le pi sera équipé d'un RFXCOM 433Mhz et du Razberry (contrôleur zwave).  
  


Pour le compteur électrique, le compteur d'eau, le niveau de sel, le passage du facteur,... Cette partie sera totalement DIY sur base du projet [MySensors][mysensors]  

 - **Compteur électrique** : capteur effet de hall,
 - **Compteur d'eau** : barrière infrarouge (samples gratuis Vishay),
 - **Niveau de sel** : capteur HC-SR04 (calcul du niveau par rapport au couvercle),
 - **Passage du facteur** : capteur de luminosité (ouveture du clapet) et barrière infrarouge. 2 facteurs afin d'éviter les faux positifs,
 - Etat **porte du garage** : 2 capteurs de porte magnétique (3 états possible : Ouvert, Fermé ou entre deux.),
 - **Climatisation** du bureau : émulation les codes ir envoyé par la télécommande. Avec un retour d'état de la led de fonctionnement (capteur luminosité) et d'une sonde de température à la sortie du climatiseur.  

 Au passage, chaque point MySensors embarquera un DHT22 (sonde temp/hum) afin d'avoir un retour des températures, dans toute la maison.

##Les "solutions classiques"

De simples modules 433Mhz que je possède déjà ou du Zwave.  

 - Gestion du **chauffage** : Vanne domotique (zwave) Danfoss,
 - Détection de **présence** : Fibaro Eye Zwave,
 - Détection **fummées/incendie** : Fibaro FGSS-001 Zwave,
 - **Prises électriques** : Recyclage des chacon DI-O (433Mhz sans retour d'état) pour les points les moins critiques, pour les autres utilisation de Fibaro WallPlug (Zwave avec retour d'état et consomation).


##Pour la vidéosurveillance et la station météo ?
Pour la **vidéosurveillance**, les constructeurs allant tous de leur petite interface et solution mobile et cie, je vais faire simple. Tous les flux RTSP (relativement standard dans ce milieu) remonteront à mon ZoneMinder et ensuite dans Jeedom.  Jeedom affichera dans un joli dashboard alors que ZoneMinder s'occupera de toute la partie détection, zones, ...  

La **station météo** est en cours de déménagement *(article à venir)*, elle vient de se trouver un jardin à proximité de chez-moi. Ce qui me permettra d'avoir des mesures optimales. La station remonte sur le web via une RaspberryPi embarquant MétéoHub un fichier RAW. Il suffira de développer un petit plugin à Jeedom afin de lire ce fichier RAW sur le web ou au travers du VPN me liant à ma station.



[mysensors]:		http://www.mysensors.org/

