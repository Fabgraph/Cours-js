// La propriété "style"

function modifCss(){
    // On va utiliser une boucle qui va sélectionner tous les éléments <p> grâce à la méthode getElementsByTagName()

    for(let i = 0; i < document.getElementsByTagName('p').length; i++){
        document.getElementsByTagName('p')[i].style.border = "5px solid red";

        document.getElementsByTagName('p')[i].style.padding = "15px";

        document.getElementsByTagName('p')[i].style.color = "#ffffff";

        document.getElementsByTagName('p')[i].style.backgroundColor = "#fda500";

        document.getElementsByTagName('p')[i].style.fontSize = "25px"; // A noter que les noms composés des propriétés(background-color', font-size...) sont écrits selon la syntaxe dite "camelCase"
    }

    document.getElementsByTagName('h1')[0].style.display = "none"; // Le titre va disparaitre à l'exécution de la fonction
}

document.getElementsByTagName('div')[0].onclick = modifCss; // On utilise la propriété onclick pour un évènement au clic

//console.log(document);

//----------------------

// getComputedStyle()

let section = document.getElementById('maSection');

let fontSz = getComputedStyle(section).fontSize; // La méthode getComputedStyle() récupère la valeur de n'importe quelle propriété CSS. C'est utile, car la propriété style n'accède pas aux propriété définies dans la feuille de style

// La propriété style accède aux prorpiété CSS renseignées dans un attribut "style" d'une balise

console.log(fontSz); // 20px

console.log(section.style.marginTop); // 50px

