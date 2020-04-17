let lien = document.getElementById('monLien');

console.log(lien.innerHTML);

// getAttribute()
let href = lien.getAttribute('href');

console.log(href); // http://www.google.fr

// getAttribute() est une méthode qui permet de récupérer l'attribut d'un élément (balise) au préalable selectionné

// setAttribut()

lien.setAttribute('href', 'https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute'); // On a changé le lien. On édite l'attribut "href"

// setAttribut() est une méthode qui permet de modifier l'attribut d'un élément (balise) au préalable sélectoinné. Elle attend 2 paramètres :
    // - 1er paramètre : nom de l'attribu
    // - 2ème paramètre : la nouvelle valeur de l'attribut


    console.log('\n');


//----------------------

let lien2 = document.getElementById('monLien2');

let href2 = lien2.href; // la propiété "href" récupère l'URL d'un élément contenu dans une balise 'a'

console.log(href2) // http://www.leparisien.fr/

//----------------------

// Propriété className
document.getElementById('maCouleur').className = 'yellow'

// On peut ajouter ou modifier l'attribut class d'un élément grâce à la propriété className

//----------------------

// innerHTML
console.log(document.getElementById('monLien').innerHTML);

document.getElementById('monLien').innerHTML = "<span>Mon lien a été modifié</span>";

// La propriétét innerHTML permet de récupérer le contenu HTML enfant d'un élément selectionné au préalable

document.getElementById('monLien').innerHTML += " et c'est cool";

