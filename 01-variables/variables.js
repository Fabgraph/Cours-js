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

let addInfo = "depuis ES6";
let variable4 = `Les backticks sont apparus ${addInfo}`;
// let variable5 = `Les backticks sont apparus ${addInfo}`;

// Apparus sous ES6, les backtricks se caractérisent par les ``. Pour faire appel, dans une chaîne de caractères, une autre variable, il faut utiliser la syntaxe suivante : ${}

document.write(variable4);
// console.log(variable5)

//---------CONCATENATION--------------

let concatenation = "Les backticks sont apparus";

console.log(concatenation + " " + addInfo); // Concaténation consiste à ajouter une chaîne de caractères à la suite d'une autre chaîne de caractères. Elle est caractérisée par le symbole +


//--------------------
//Les constantes

document.write("<h1>Les constantes</h1>");

document.write("<p>Une constante est un espace de stockage qui permet de stocker tout type de données (chaine de caractères, valeur numérique, booléan...). Mais dont la valeur initiale ne peut être modifiée</p>");

let maVariableLet = "Première valeur";

console.log(maVariableLet); // Affiche : Première valeur

maVariableLet = "Deuxième valeur qui remplace la valeur initiale";

console.log(maVariableLet); // Affiche : Deuxième valeur qui remplace la valeur initiale

//-----------

const maConstante = "Valeur initiale";

console.log(maConstante); // Valeur initiale

// maConstante = "Nouvelle valeur"; // Message d'erreur arrêt de l'exécution du script, on ne peut pas modifier la valeur d'une constante

// console.log(maConstante); // Erreur

//--------------
// Différences entre une variable let et variable var

//---BLOC1
function varTest(){
    // Déclaration + affectation d'une valeur à une variable créée
    var x = 1;

    // Condition
    //---BLOC 2
    if(true){
        var x = 2; // C'est la même variable qui se trouve à l'extérieur de la condition (cf. 99)
        console.log(x); // Affiche : 2
    }
    //---FIN DU BLOC 2

    console.log(x); // Affiche : 2
}
//---FIN DU BLOC 1

varTest(); // Appel de la fonction

//-----------------

//---BLOC1
function letTest(){
    // Déclaration + affectation d'une valeur à une variable créée
    let x = 1;

    // Condition
    //---BLOC 2
    if(true){
        let x = 2; // C'est une variable différente
        console.log(x); // Affiche : 2
    }
    //---FIN DU BLOC 2

    console.log(x); // Affiche : 1
}
//---FIN DU BLOC 1

letTest(); // Appel de la fonction
// Une variable let est un espace de stockage permettant de stocker tout type de données DONT la portée est limitée à celle du bloc courant


document.write("<h1>Les différents types de données</h1>");

// STRING

document.write("<h3>STRING (Chaine de caractères)</h3>");

let str = "Hello world";
let str2 = '2';
let str3 = `3`;

document.write(str + str2 ); // Affiche : Hello world 2

let phraseApostrophe = 'JS, c\'est cool'; // L'antislash "\" indique à JS que l'apostrophe dans une chaine de caractère n'est pas la fermeture de ma chaine de caractères

let phraseGuillemet = "Le formateur a dit : \"JavaScript, c'est génial\""; // L'antislash "\" indique à JS que les guillemet dans une chaine de caractère ne sont pas la fermeture de ma chaine de caractères

//---------------------------
// let prenom = prompt("Erivez votre prénom");

// console.log(prenom);
//---------------------------

//---------------------------

// NUMBER

document.write("<h3>NUMBER (valeur numérique)</h3>");

// Une valeur NUMBER se caractérise par l'absence de quote

let chiffre = 20; // Valeur positive

let negatif = -15; // Valeur négative

let decimal = 2.5; // Valeur décimale caractérisée par un point "."

document.write('Valeur positive : ' + chiffre + '<br>'); // Affiche : Valeur positive : 20

document.write('Valeur négative : ' + negatif + '<br>'); // Affiche : Valeur négative : -15

document.write('Valeur décimale : ' + decimal + '<br>'); // Affiche : Valeur décimal : 2.5


//***** PARTICULARITE *********/

let a = "36";
let b = 67;

document.write("Résultat entre un string et un number : " + a + b);

//------------------------------
// BOOLEAN (booléen)

document.write("<h3>BOOLEAN (Booléen)</h3>");

// Le type booléen ne prend en compte que 2 valeurs : true ou false

let choix = true;
let choix2 = false;

document.write('Valeurs booléennes de mes variables choix et choix2 : ' + choix + " et " + choix2 + '<br>');

//-------------------------------
// OBJECTS

document.write("<h3>OBJECTS</h3>");

    // array (tableau)
document.write("<h5>Array (tableau)</h5>");

let animaux = ["chien", "chat", "lapin"];

document.write(animaux + '<br>'); // chien, chat, lapin
document.write(animaux[0] + '<br>'); // chien
document.write(animaux[1] + '<br>'); // chat
document.write(animaux[2] + '<br>'); // lapin

    // object
document.write("<h5>Object</h5>");

let person = {
    nom: "Dupont",
    prenom: "Jean",
    age: 58
};

document.write(person + '<br>'); // Affiche : [object Object]
document.write(person.nom + '<br>'); // Affiche : Dupont
document.write(person.prenom + '<br>'); // Affiche : Jean
document.write(person.age + ' ans<br>'); // Affiche : 58 ans

    // null
let foo = null; // null équivaut à "rien"

//------------------------------
document.write("<h5>Undefined</h5>");

    // UNDEFINED
let maLet; // Simple déclaration de variable 

//------------------------------

document.write('<h3>typeof pour récupérer le type d\'une variable</h3>');

document.write('Type de la variable "phraseApostrophe" : ' + typeof phraseApostrophe + '<br>'); // Type de la variable "phraseApostrophe" : string

//***** EXERCICE *******/

// Afficher, faisant des phrases, les types de données de chaque variable créée depuis la variable "phraseApostrophe" comme l'exemple de la ligne 231

document.write('Type de la variable "phraseGuillemet" : ' + typeof phraseGuillemet + '<br>'); // Type de la variable "phraseGuillemet" : string

document.write('Type de la variable "chiffre" : ' + typeof chiffre + '<br>'); // Type de la variable "chiffre" : number

document.write('Type de la variable "negatif" : ' + typeof negatif + '<br>'); // Type de la variable "negatif" : number

document.write('Type de la variable "decimal" : ' + typeof decimal + '<br>'); // Type de la variable "phraseApostrophe" : number

document.write('Type de la variable "a" : ' + typeof a + '<br>'); // Type de la variable "a" : string

document.write('Type de la variable "b" : ' + typeof b + '<br>'); // Type de la variable "b" : number

document.write('Type de la variable "choix" : ' + typeof choix + '<br>'); // Type de la variable "choix" : boolean

document.write('Type de la variable "choix2" : ' + typeof choix2 + '<br>'); // Type de la variable "choix2" : boolean

document.write('Type de la variable "animaux" : ' + typeof animaux + '<br>'); // Type de la variable "animaux" : object

document.write('Type de la variable "person" : ' + typeof person + '<br>'); // Type de la variable "person" : object

document.write('Type de la variable "foo" : ' + typeof foo + '<br>'); // Type de la variable "foo" : object

document.write('Type de la variable "maLet" : ' + typeof maLet + '<br>'); // Type de la variable "maLet" : undefined

//------------------------
document.write("<h3>Conversion de types</h3>");

// Convertir une chaine de caractères en nombre grâce à la fonction native JS : parseInt()

let texte = "12345";
let numero;

document.write('Type de la variable "texte : ' + typeof texte + '<br>'); // Type de la variable "texte" : string

numero = parseInt(texte);

document.write('Après la conversion, le typede la variable "numero" est maintenant : ' + typeof numero + '<br>'); // Après la conversion, le type de ma variable "numero" est maintenant : number

//-----------------------

// Convertir un nombre en chaine de caractères

let texte2,
    numero2 = 2,
    numero3 = 9;

texte2 = numero2 + "" + numero3;

document.write("Après la conversion des variables \"numero2\" et \"numero3\", le type de la variable \"texte2\" est : " + typeof texte2 + "<br>"); // Après la conversion des vaiables "numero2" et "numero3", le type de la variable est : string





