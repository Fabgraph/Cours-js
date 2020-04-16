document.write('<h1>Les fonctions</h1>');

// Les fonctions sont des morçeaux de codes encapsulés qu'on appelle au besoin pour exécuter une action précise.
// Elles peuvent recevoir un ou plusieurs argumemts (paramètres) : sorte de valeur d'entrée qui vont être traités par la fonction;

// On distingue les fonctions prédéfinies et fonctions utilisateurs

//------------------------
// FONCTION PREDEFINIE
//------------------------

document.write('<h3>Les fonctions prédéfnies (ou dites "natives JS")</h3>');

// EXEMPLES

// parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.

//isNaN() permet de déterminer si une valeur est NaN. Permet de vérifier si la donnée est un nombre

// let reponse = parseInt(prompt("En quelle année JavaScript a été développé pour la première fois ?"));

// console.log(typeof reponse);

// console.log(isNaN(reponse));

// let annee = 1995;

// if(reponse < annee){
//    alert("Faux, trop tôt...");
// }
// else if(isNaN(reponse)){ // avec isNan(), on vérifie si la donnée saisie est bien un nombre ou pas.
//    alert("Votre réponse n'est pas un nombre");
// } 
// else if(reponse > annee){
//    alert("Faux, trop tard...");
// } 
// else{
//    alert("Correct, 1995 est la bonne réponse");
// }


// Il existe d'autres fonctions qui appartiennent à des objets

//-------------------------
// FONCTION UTILISATEUR
//-------------------------

document.write('<h3>Les fonctions utilisateurs</h3>');

// La manière appelée FUNCTION STATEMENT (Déclaration de fonction)

function maFonction(){
    // Ici le code à exécuter
    document.write('<p>Nous avon sune belle journée ensoleillée</p>');
}

maFonction(); // On appelle notre fonction qu'elle s'exécute

// La manière FUNCTION OPERATOR

let maFonction2 = function(){
    return '<p>Nous avons une belle journée ensoleillée et il est midi et demi</p>';
}

document.write(maFonction2()); // On appelle notre fonction qu'elle s'exécute


//-------------------------
// Valeur de retour

// Le mot-clé "return" met fin fin à l'exécution d'une fonction et définit une valeur à renvoyer à la fonction appelante.

function messageAfficheAvecReturn(){
    let message = "Vous me lisez";
}

document.write(messageAfficheAvecReturn() + '<br>'); // Affiche : undefined

function messageAfficheAvecReturn(){
    let message = "Vous me lisez";
    return message;
}

document.write(messageAfficheAvecReturn() + '<br>'); // Affiche : Vous me lisez


//-------------------------
// Fonction avec arguments
document.write('<h3>Les fonctions avec arguments</h3>');

function direBonjour(prenom, nom){
    let message = document.write('<p>Bonjour ' + prenom + ' ' + nom + ', comment vas-tu ?</p>');
    return message;
}

direBonjour('Fabrice', 'Domoison');

/*** EXERCICE ***/

// Créer une fonction min(a, b) qui retourne le minimum entre a et b. Pour vous aider, vous pouvez utiliser une condition

function min(a, b){
    if(a < b){
        return document.write(a + '<br>');
    } else{
        return document.write(b + '<br>');
    }
}


min(8, 4); // Affiche 4
min(5, 2); // Affiche 2
min(3, -3); // Affiche -3


//function min(a, b){
//    let message2 = document.write((a < b) ? a + '<br>' : b + '<br>');
//    return message2;
//}

//min(8, 4); // Affiche 4
//min(5, 2); // Affiche 2
//min(3, -3); // Affiche -3


//-------------------------
// Fonction avec arguments
document.write('<h3>Les fonctions avec arguments</h3>');

//-------------------------
// Fonction avec arguments par défaut
document.write('<h3>Les fonctions avec arguments par défaut</h3>');

function afficheMsg(de, texte = "Aucune info"){
    document.write(de + " : " + texte + "<br>");
}


afficheMsg("Zinedine Zidane", "grand coach");
afficheMsg("Eric");

//-------------------------

//function d(arg, mode = 'p'){
//    if(mode == 'h1'){
//        document.write('<h1>' + arg + '</h1>'); // Nous créons une fonction pour nous faciliter l'utilisation du document.write()
//    } else if(mode == 'h3'){
//        document.write('<h3>' + arg + '</h3>'); // Nous créons une fonction pour nous faciliter l'utilisation du document.write()
//    } else{
//        document.write('<p>' + arg + '</p>'); 
//    }
//}

//let test = "Le message doit s'afficher avec ma fonction d()";

//d(test);
//d(test, 'h1');
//d(test, 'h3');

//-------------------------

document.write('<h3>Les fonctions fléchées</h3>');

// Avec l'ES6, il existe une nouvelle syntaxe plus simple et plus courte en utilisant "=>"

//let func = (arg1, arg2, ...argN) => // instruction;

// Cela équivaut à écrire :


/*

var func = function(arg1, arg2, ...argN){
    // instruction;
}

//--------- OU ----------

function func(arg1, arg2, ...argN){
    // instruction;
}

*/

let addition = (a, b) => document.write(a + b + '<br>');

addition(3, 6); // Affiche 9

// Si tu as plusieurs lignes tu mets des accolades après "=>{insruction}"



