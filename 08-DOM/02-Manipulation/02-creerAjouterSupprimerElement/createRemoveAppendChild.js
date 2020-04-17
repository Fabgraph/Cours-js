// createElement() permet de créer un élément

let monP = document.createElement('p');

// appendChild() méthode permettant d'ajouter un élément

document.body.appendChild(monP); // J'ajoute l'enfant <p> à <body> (body s'utilise directement sans getElementBy)

document.getElementsByTagName('p')[0].setAttribute('class', 'bleu');

monP.innerHTML = "Voici du texte créé dans mon élément p";

//------------------------

// createTextNode()

let child = document.createElement('a');

document.body.appendChild(child);

let childText = document.createTextNode('Mon Lien'); // creatTextNode() est une méthode qui permet l'insertion d'un noeud textuel

child.appendChild(childText);

child.setAttribute('href', 'https://developer.mozilla.org/fr/docs/Web/API/Document/createTextNode');

child.setAttribute('target', '_blank');

//-----------------------

// insertBefore()

let para = document.createElement('p');

let paraText = document.createTextNode('Un nouveau paragraphe');

para.appendChild(paraText);

document.body.insertBefore(para, document.body.lastChild); // insertBefore() permet l'insertion au début d'un élément référent

// La propriété lastChild fait référence au dernier élément enfant d'un élément parent

let ex = document.querySelector('p');

let newLink = document.createElement('a');

let newLinkText = document.createTextNode('Mon nouveau lien');

newLink.appendChild(newLinkText);

newLink.setAttribute('href', 'https://developer.mozilla.org/fr/docs/Web/API/Document/createTextNode');

newLink.setAttribute('target', '_blank');



ex.insertBefore(newLink, ex.lastChild);

//------------------------

// removeChild()

let lienSupp = document.querySelector('a');

lienSupp.parentNode.removeChild(lienSupp); // La méthode removeChild() supprime un élément enfant

// La propriété parentNode retourne le parent du noeud spécifié (dans l'exemple le noeud spécifié c'est <a> et son parent c'est <p> = parentNode) dans l'arborescence de DOM






