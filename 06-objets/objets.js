document.write('<h1>Les objets</h1>');

/*

Les objets informatiques sont comme les objets réels, c'est un réceptacle qui va contenir des information (les données = PROPRIETES) et des actions (les fonctions = METHODES). Les informations peuvent être par exemple le nom, le prenom... et d'autres caractéristiques d'un objet et les actions peuvent être par exemple le fait de rouler, de marcher... 
En programmation Orientée Objet (POO en FR / OOP en EN) est le fait de faire interagir les objets entre eux.

*/


let monObjet = {}; // Création de la manière appelée OBJECT LITTERAL NOTATION

console.log(monObjet);
console.log(typeof monObjet); // object

monObjet.sonPrenom = "Timmy"; // remplissage de mon objet => notation pointée

console.log(monObjet);

let sangoku = {
    nom: 'SAn',
    prenom: 'Goku',
    age: 35
}

// Affichage des valeurs des propriétés
document.write('Son nom : ' + sangoku.nom + '<br>');
document.write('Son prénom : ' + sangoku.prenom + '<br>');
document.write('Son âge : ' + sangoku.age + '<br>');

//------------------------
document.write('<hr>');

let maVoiture = {// Je crée et remplis mon objet maVoiture
    marque: "Audi",
    modele: "A4",
    couleur: 'noir',
    changeDeCouleur: function(nouvelle){
        return this.couleur = nouvelle; // Le mot-clé this fait référence à lui-même (dans l'objet dans lequel on se trouve)
    },
    optionsDeSerie: ['clim', 'autoradio', 'park-assist', 'gps', 'cuir'], // type array
    annee: 2004, // type number
    motorisation:{
        energie: 'diesel',
        puissance: '120cv',
        etancheite: true // type booléen
    },
    vide: null // type object (null)
};

document.write(maVoiture.marque + '<br>');

document.write('La couleur initiale : ' + maVoiture.couleur + '<br>');

maVoiture.changeDeCouleur('gris');

document.write('La nouvelle couleur : ' + maVoiture.couleur + '<br>');





