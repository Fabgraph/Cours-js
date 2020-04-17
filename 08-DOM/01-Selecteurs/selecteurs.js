// --- SELECTION ELEMENT EN FONCTION DE L'ID


// méthode getElementById()

const monId = document.getElementById('maSection');

console.log('monId : ' + monId); // monId : [object HTMLElement] 
console.log('monId : ' + monId.innerHTML); // monId : SECTION

console.log("\n"); // "\n" utile pour un saut de ligne dans la console

//------------------------
//--- SELECTION ELEMENT EN FONCTION DU NOM DE LA BALISE HTML

// méthode getElementsByTagName()

const maBalise = document.getElementsByTagName('span'); 

console.log('maBalise : ' + maBalise); // maBalise : [object HTMLCollection] (ARRAY/OBJET) 
console.log('maBalise : ' + maBalise[0].innerHTML);

//------------------------
//--- SELECTION ELEMENT EN FONCTION DE CA CLASS

// méthode 

const mesClasses = document.getElementsByClassName('avion');

console.log('mesClasses : ' + mesClasses); // mesClasses : [object HTMLCollection]
console.log('mesClasses : ' + mesClasses[0].innerHTML); // mesClasses : Airbus 1

// Une boucle for pour parcourir un array

for(let i = 0 ; i < mesClasses.length ; i ++)
{
    console.log('Boucle ' + i + ":" + mesClasses[i].innerHTML);
}

console.log("\n");
//-------------------------
// --- SELECTION VIA LES SELECTEUR CSS

// --- querySelector()

const p = document.querySelector('p');

console.log('querySelector : ' + p); // querySelector : [object HTMLParagraphElement]

console.log('querySelector : ' + p.innerHTML); // querySelector : Paragraphe 1

console.log("\n");

//--- querySelectorAll()

const lesP = document.querySelectorAll('p');

console.log('querySelectorAll : ' + lesP); // querySelectorAll : [object NodeList]

console.log('querySelectorAll : ' + lesP[4].innerHTML); // querySelectorAll : Paragraphe 5

// FOR - QUERYSELECTORALL
for(let i = 0; i < lesP.length ; i++)
{
    console.log('Boucle ' + i + ' : ' + lesP[i].innerHTML);
}

//--- RESUME DES PRINCIPAUX SELECTEURS

// getElementById() : recherche des éléments d'après son ID (attribut id)

// getElementsByTagName() : recherche des éléments d'après le nom de balise

// getElementsByClassName : recherche des éléments d'après leur classe (attribut class)

// querySelector() : retourne le 1er élément trouvé satisfaisant au selecteur

// querySelectorAll() : retourne tous les éléments satisfaisant au sélecteur

// querySelector et querySelectorAll peuvent sélectionner des éléments HTML de la page par l'utilisation de selecteur CSS (".nomDeLa / "#nomID")

















