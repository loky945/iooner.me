---
layout: 	post
titre:  	"Gestion de mes mots de passe avec 1Password"
date:   	2015-03-07 01:23:00
auteur: 	iooner
categories: ['Tip']
tags:		['one password', 'mots de passe', '1password']		
img: 		"upload/1pass.jpg"
desc:		La gestion de mes mots de passe, cartes bancaires, certifs, licences, ... avec 1Password.
partage:	1
comment:	1
complet:	1
---

J'utilise depuis un moment sur les bons conseils de Meroje l'application [1Password][onepass], développé par AgileBits. 1Passsword est un coffre fort pour toutes vos informations sensibles, un plugin intégré dans le navigateur, permet la génération, le replissage et la sauvegarde rapide des mots de passe.  

Un mot de passe général déverouille ce coffre. Vous pouvez également faire comme moi et utiliser une YubiKey avec un mot de passe à rallonge et complexe. *Pensez juste à ne pas laisser cette clé avec votre pc ou smartphone et d'en conserver une copie dans un lieu sûre.* La [Yubikey][yubi] est une sorte de clé USB programmable avec un bouton. Cela fonctionne un peu comme un clavier.

Ce logiciel n'est pas gratuit (autour de 40€ pour autant d'installation de votre choix). Depuis sa version 5, il est possible de gérer plusieurs utilisateurs synchronisés avec des "niveaux de permissions" pratique dans le cadre d'un partage de mots de passe dans la famille par exemple.  


L'application génère un fichier chiffré permettant la synchronisation (via FTP, Dropbox,...) entre toutes vos installations et apps mobile afin de toujours avoir vos informations à jour sous la main. Ce fichier embarque tout le nécessaire afin qu'il soit lisible depuis n'importe quel navigateur web sans pour autant avoir l'application installée.

Une option que j'affectionne particulièrement est *l'audit de sécurité*, 1Password vous signalera si vous utilisez trop souvent le même mdp ou si l'un est trop faible ou encore commence à se faire vieux.

<img class="img-responsive" src="/img/upload/audit_1pass.png" alt="">

Je n'ai aucun intérêt à vous le "vendre", je souhaitais juste partager avec vous cette amélioration de mon confort de navigation. Merci Meroje !








[yubi]:		https://www.yubico.com/products/yubikey-hardware/yubikey-2/
[onepass]:	https://agilebits.com/onepassword