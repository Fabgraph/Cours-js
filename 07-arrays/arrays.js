document.write('<h1>Les arrays</h1>');

// array est un tableau qui permet de conserver plusieurs données au sein d'une variable

const fruits = ['Banane', 'Fraise', 'Orange'];


// La propriété length

document.write('La taille de mon tableau "fruits" : ' + fruits.length + '<br>'); // La taille de mon tableau "fruits" : 3

// length vous permet d'obtenir le nombre d'éléments qui sont dans le tableau


// Pour afficher "Orange"
document.write(fruits[2] + '<br>'); // orange

//-----------------------

// Pour remplacer une valeur (ou donnée) dans mon tableau
fruits[1] = 'kiwi';

document.write(fruits[1] + '<br>'); // kiwi

const monTableau = ['Zidane', 'Henry', 126, [], true, {}, null]; // Tous les types peuvent être contenus dans un tableau

document.write('La taille de mon tableau "monTableau" : ' + monTableau.length + '<br>');

// Chaque élément contenu dans un array possède un indice (= index)
// L'index est le référent qui va permettre de cibler et d'appeler sa valeur correspondante dans le tableau

//!\ Dans un tableau, la première valeur a pour indice 0. C'est-à-dire que chaque tableau commence par l'index 0.

//-----------------------

document.write('<h3>Parcourir un tableau</h3>');

document.write('<p>Boucle for</p>');

let monSuperTableau = ['Christophe', 'Moussa', 'Sophie', 'Laurent', 'Fabrice'];

for(let i = 0; i < monSuperTableau.length; i++){
    document.write(monSuperTableau[i] + '<br>');
}

//-------------------------

document.write('<hr><p>Boucle for...of</p>');

for(elementListe of monSuperTableau){
    document.write(elementListe + '<br>');
}

//-------------------------

document.write('<hr><p>Boucle forEach</p>');

monSuperTableau.forEach(function(valeur, indice){
    document.write(indice + '-' + valeur + '<br>');
});

document.write('<hr>' + monSuperTableau.join(' - ') + '<br>');

// join() est une méthode de l'objet Array() retourne une chaine de carctère en concaténant les éléments du tableau. Par défaut, les éléments sont séparés par une virgule lorsqu'on n'utilise