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



