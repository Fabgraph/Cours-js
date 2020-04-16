document.write('<h1>Les boucles</h1>');

// ----- L'incrémentation ++

let number = 0;

number++; // J'incrémente de 1 la valeur de ma variable. Cela équivaut à écrire number = number + 1

document.write(number + '<br>'); // 1

// ----- La décrémentation --

number--; // Je décrémente de 1 la valeur de ma variable. Cela équivaut à écrire number = number - 1

document.write(number); // 0

// -------------------------

// WHILE
document.write('<h2>La boucle "while"</h2>');

let i = 0; // On initialise une variable à 0

/*while(i <= 8){ // La condition de la boucle : "TANT QUE" i <= 8 ALORS
    document.write('Itération n°' + i + '<br>'); 
    i++;
}*/

document.write('<hr>');

/*** EXERCICE ***/

// Retirer "Iération n°" uniquement à la ligne 4 "Itération n°3"

/* Résultat attendu

Itération n°0
Itération n°1
Itération n°2
3
Itération n°4
Itération n°5
Itération n°6
Itération n°7
Itération n°8

*/


while(i <= 8){
    if(i === 3){
        document.write(i + '<br>')
    }
    else{
        document.write('Itération n°' + i + '<br>');
    }
    i++;
}

document.write('<hr>');
//------------------------

/* let color = prompt('Veuillez saisir une couleur, écrivez "stop" pour arrêter le script :')

while(color){
    if(color != 'stop'){
        document.write(color + '<br>'); // Affiche la couleur saisie dans la page par le visiteur
        color = prompt('Veuillez saisir une AUTRE couleur ou écrivez "stop"'); // On invite le visiteur à saisir une nouvelle couleur
    }
    else{
        break; // break permet d'arrêter l'exécution de la boucle
    }
} */

/*** EXERCICE ***/

// Ecrivez un script qui invite le visiteur de la page à répondre à la question suivante : "En quelle année JavaScript a été développé pour la première fois ?" 
// Tant que le visiteur n'a pas répondu correctement à la question, le message dans "Faux" dans une boîte de dialogue va s'affichez et une nouvelle boîte de dialogue s'affichera l'invitant à retenter sa chance : "Veuillez retenter votre chance". Dès lors qu'il a donné la bonne réponse, le message : "Bravo, 1995 est la bonne réponse" s'affichera et la boucle s'arrête dans une boîte de dialogue

// let reponse = prompt("En quelle année JavaScript a été développé pour la première fois ?");

// while(reponse){
//    if(reponse != 1995){
//        alert('Faux'); // Affiche "Faux"
//        reponse = prompt('Veuillez retenter votre chance :'); // On invite le visiteur à saisir une nouvelle réponse
//    }
//    else{
//        alert('Bravo, 1995 est la bonne réponse')
//        break; // break permet d'arrêter l'exécution de la boucle
//    }
// } 

//------- Correction-------

// let annee = 1995;

// while(reponse){
//    if(reponse != annee){
//        alert('Faux');
//        reponse = prompt('Veuillez retenter votre chance :');
//    }
//    else{
//        alert('Bravo, 1995 est la bonne réponse');
//        break;
//    }
// } 

//-------------------------

// DO WHILE
document.write('<h3>La boucle Do While</h3>');

/*
STRUCTURE D'UNE BOUCLE DO WHILE 

do{
    // code à exécuter;
}
while(**Condition**);

*/

let y = 5;

do{
    document.write('<p>Ce code s\'exécutera 1 fois seulement</p>');
    document.write('<p>' + y + '</p>');
    y++;
}
while(y < 10); // do while v exécuter au moins une fois le code que la condition soit fausse ou vraie. C'est possible grâce à "do"

//-------------------------

// FOR
document.write('<h3>La boucle for</h3>');

/* 

STRUCTURE de la boucle for
for(initialisation; condition; incrémentation ou décrémentation){
    // code à exécuter;
}

*/

for(let i = 0; i < 7; i++){
    document.write('Itération n°' + i + '<br>');
}

document.write('<hr');
