document.write('<h1>Les opérateurs arithmétiques</h1>');

document.write('<p>Les additions de valeurs numériques avec le "+"</p>');

let addition = 10 + 5; // addition
document.write(addition + '<br>'); // 15

//-------------------------

document.write('<P>Les soustractions de valeurs numériques avec le"-"</p>');

let soustraction = 10 - 5; // soustraction
document.write(soustraction + '<br>'); // 5

//--------------------------

document.write('<P>Les multiplication de valeurs numériques avec le"*"</p>');

let multiplication = 10 * 5; // multiplication
document.write(multiplication + '<br>');

//-------------------------

document.write('<P>Les divisions de valeurs numériques avec le"/"</p>');

let division = 10 / 5;
document.write(division + '<br>');

//-------------------------

document.write('<P>Les modulos de valeurs numériques avec le"%"</p>');

let modulo = 10 % 3; // modulo
document.write(modulo + '<br>');
// Pour le modulo, il s'agit du reste d'une division

// Exemple : il y a 3 personnes et un gateau coupé en 10 parts. Chaque personne va prendre 3 parts, il restera 1 part

//--------------------------

document.write('<P>Les puissance de valeurs numériques avec le"**"</p>');

let puissance = 10 ** 3; // puissance
document.write(puissance + '<br>'); // 1000

//=========================

document.write('<h1>Les opérateurs d\'affectation</h1>');

let nombre = 10;

nombre += 5; // équivaut à érire nombre = nombre + 5;

document.write(nombre + '<br>'); // 15

// Fonctionne avec tous les opérateurs arthmétiques : -=, *=, /=, %=

//==========================

document.write("<h1>Les opérateurs de comparaison</h1>");

// -----------------------------------------------
        // >   : strictement supérieur
        // -----------------------------------------------
        // <   : strictement inférieur
        // -----------------------------------------------
        // >=  : supérieur ou égal
        // -----------------------------------------------
        // <=  : inférieur ou égal
        // -----------------------------------------------
        // ==  : égal à (valeur)
        // -----------------------------------------------
        // !=  : différent de (valeur)
        // -----------------------------------------------
        // === : strictement égal à (valeur et type)
        // -----------------------------------------------
        // !== : strictement différent de (valeur et type)
        // -----------------------------------------------

        // Ces opérateurs permettent de comparer 2 variables et de retourner une valeur booléenne
        
        let num1 = 6,
            num2 = '6',
            num3 = 2,
            num4 = 3,
            num5 = '3',
            res,
            res2,
            res3;

// **** EXERCICE ****

// Dans la variable "res" valeur de retour soit : true utiliser l'opérateur "=="
res = num1 == num2;
document.write(res + '<br>'); // true

// Dans la variable "res2" valeur de retour soit false utiliser l'opérateur "<"
 res2 = num1 < num3;
 document.write(res2 + '<br>'); // false

// Dans la variable "res3" valeur de retour soit false utiliser l'opérateur "==="
res3 = num4 === num5;
document.write(res3 + '<br>'); // false

//--------------------------

document.write('<h1>Les opérateurs logiques</h1>');

// -----------------------------------------------
        // Opérateur | Type de logique |   Utilisation
        // -----------------------------------------------
        //     &&    |        ET       | valeur1&&valeur2
        // -----------------------------------------------
        //     ||    |        OU       | valeur1||valeur2
        // -----------------------------------------------
        //     !     |       NON       |    !valeur
        // -----------------------------------------------

// L'opérateur &&
document.write('<h3>L\'opérateur &&</h3>');

// Il faut que les 2 valeurs booléennes soient vraies pour que le résultat retouné soit true (vrai)

let resultat = true && true;
document.write(resultat + '<br>'); // true

resultat = true && false;
document.write(resultat + '<br>'); // false

resultat = false && false;
document.write(resultat + '<br>'); // false

//-------------------------
// L'opérateur ||
document.write('<h3>L\'opérateur ||</h3>');

// Il faut que l'une des 2 valeurs booléennes soit vraie pour que le résultat retourné soit true (vrai)

let resultat2 = true || true;
document.write(resultat2 + '<br>'); // true

resultat2 = true || false;
document.write(resultat2 + '<br>'); // true

resultat2 = false || true;
document.write(resultat2 + '<br>'); // true

resultat2 = false || false;
document.write(resultat2 + '<br>'); // false

//-------------------------
// L'opérateur !
document.write('<h3>L\'opérateur !</h3>');

// L'opérateur NON (!) permet d'obtenir l'inverse de la valeur initiale

let resultat3 = false;

resultat3 = !resultat3;
document.write(resultat3 + '<br>'); // true

resultat3 = !resultat3;
document.write(resultat3 + '<br>'); // false

resultat3 = !resultat3;
document.write(resultat3 + '<br>'); // true