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

while(i <= 8){ // La condition de la boucle : "TANT QUE" i <= 8 ALORS
    document.write('Itération n°' + i + '<br>');
    i++;
}

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
let j = i++;

while(j){
    case 0:
        document.write('Itération n°' + i + '<br>');
        break;
    case 1:
    
    i++;
}