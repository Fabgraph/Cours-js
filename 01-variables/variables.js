document.write("<h1>Les variables : déclaration / affectation</h1>");

document.write("<p>Une variable est un espace de stockage qui permet de stocker tout type de données (chaine de caractères, valeur numérique, booléan...)</p>");

//----------------------
//-----DECLARATION------
//----------------------

var variable; // Le mot-clé "var" permet de déclarer une variable
let variable2; // Autre mot-clé "let" permet de déclarer une variable

// Convention : camelCase

let nomDeLaVariable; // La convention veut qu'on utilise des majuscules sur chaque première lettre des mots qui succèdent le 1er mot (camelCase)

// Les caractères autorisés : [a-zA-Z], [0-9], "$" et "_"
// Ne pas commencer le nom de la variable par un chiffre. Exemple :
// let 9variables; est incorrect

let _nomVariable; // Correct

let $nomvariable2; // Correct

let nom_de_la_variable; // Correct

//-----------------------
//------AFFECTATION------
//-----------------------

let variable3 = "une valeur"; // J'AFFECTE une valeur à ma variable test01

// Double quote ou guillement
let doubleQuote = "Double quote ou guillemet";

// Single quote ou apostrophe
let singleQuote = 'Single quote ou apostrophe';

console.log(doubleQuote); // Affiche dans la console : Double quote ou guillemet

// Backticks

let addInfo = "Depuis ES6";
let variable4 = `Les backticks sont apparus ${addInfo}`;
// let variable5 = `Les backticks sont apparus ${addInfo}`;

document.write(variable4);
// console.log(variable5)

