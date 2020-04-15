document.write('<h1> Les conditions if - if/else - if/elseif/else</h1>');

let a = 10,
    b = 5,
    c = 2;

// IF

if(a > b) // SI a est strictement supérieur à b
{ // ALORS...
    document.write('Le chiffre 1 (10) est strictement supérieur au chiffre 2 (5)<br>'); // Exécute cette instruction si la condition est vraie   
} 

//--------------------------

// IF/ELSE

if(b < c) // SI b est strictement inférieur à c
{ // ALORS...
    document.write('Le chiffre 1 (5) est strictement inférieur au chiffre 2 (2)<br>');   
} 
else // SINON
{
    document.write('Le chiffre 1 (5) est strictement supérieur au chiffre 2 (2)<br>');   
}

/*

STRUCTURE :

if(**CONDITON**) <= /!\ La condition doit être vraie pour que le code à l'intérieur des accolades puissent s'exécuter
{
    Exécution du code à l'intérieur des accolades {}
}
else{ <= SINON 
    Exécution d'un autre code à l'intérieur des accolades {}
}

*/

document.write('<hr>');

// IF avec || (OU)

if(a == 9 || b > c){
    document.write('Ok pour au moins l\'une des 2 conditions');
}

//--------------------------

// IF/ELSE IF/ELSE

if(a == 8) // SI a (10) est égal à 8
{ // ALORS
    document.write('1 - a est égal à 8<br>');
}
else if(a != 10) // SINON SI a (10) est différent de 10
{
    document.write('2 - a est différent de 10<br>');
}
else // SINON, c'est que je ne suis ni tombé dans le if, ni dans le else if et donc par défaut, je me trouve dans le else
{
    document.write('3 - Tout le monde a faux<br>');
}

document.write('<hr>');

let test = 3 < 1;

if(!test){ // Avec l'opérateur ! permet d'obtenir l'inverse de la valeur initiale
    document.write("J'exécute ce code car la valeur implicite de test est bien FALSE<br>");
}


/*** EXERCICE ***/

/*
    Ecrivez un script invitant le visiteur à répondre à la question suivante : En quelle année JavaScript a été développé pour la première fois ?
    En fonction de la réponse, un message s'affiche dans une boîte de dialogue selon les conditions suivantes :
        - SI la réponse est une année strictement inférieur à 1995, affichez le message "Faux, trop tôt..."
        - SINON SI la réponse est strictement supérieur à 1995, affichez le message "Faux, trop tard..."
        - SINON, affichez le message "Correct, 1995 est la bonne réponse"
*/

// let reponse = prompt("En quelle année JavaScript a été développé pour la première fois ?");
// let annee = 1995;

// if(reponse < annee){
//    alert("Faux, trop tôt...");
// } 
// else if(reponse > annee){
//    alert("Faux, trop tard...");
// } 
// else{
//    alert("Correct, 1995 est la bonne réponse");
// }

//--------------------------

// La condition ternaire
document.write('<h1>La condition ternaire</h1>');

const voiture = "mercedes";

document.write((voiture == 'mercedes') ? 'jooolie<br>' : 'moooche');

// La condition ternaire équivaut à une condition if/else.
// Elle est caractérisée par l'expression d'une condition entre parenthèses, suivi d'un point d'interrogation "?" signifiant implicitement ALORS. L'instruction qui suit le point d'interrogation devra être exécutée dans le cas où ma condition est vraie. SINON est représenté par les 2 points ":" qui exécutera une instruction dans le cas où la conditionest fausse

/*** EXERCICE ***/

// if(b < c) // SI b est strictement inférieur à c
// { // ALORS...
//    document.write('Le chiffre 1 (5) est strictement inférieur au chiffre 2 (2)<br>');   
// } 
// else // SINON
// {
//    document.write('Le chiffre 1 (5) est strictement supérieur au chiffre 2 (2)<br>');   
// }

// Transformer la condition if/else ci-dessus en condition ternaire

document.write((b < c) ? 'Le chiffre 1 (5) est strictement inférieur au chiffre 2 (2)<br>' : 'Le chiffre 1 (5) est strictement supérieur au chiffre 2 (2)<br>');

//-------------------------

document.write('<h1>La condition switch</h1>');

const couleur = 'jaune';

switch(couleur){
    case 'bleu':
        document.write('Vous aimez le bleu<br>');
        break;
    case 'rouge':
        document.write('Vous aimez le rouge<br>');
        break;
    case 'vert':
        document.write('Vous aimez le vert<br>');
        break;
    default:
        document.write('Vous n\'aimez ni le bleu, ni le rouge, ni le vert<br>');
        break;
}

// *** EXERCICE ***

// Transformer la condition switch en condition if/else if/else

if(couleur == 'bleu'){
    document.write('Vous aimez le bleu<br>');
}
else if(couleur == 'rouge'){
    document.write('Vous aimez le rouge<br>');
}
else if(couleur == 'vert'){
    document.write('Vous aimez le vert<br>');
}
else{
    document.write('Vous n\'aimez ni le bleu, ni le rouge, ni le vert<br>');
}
