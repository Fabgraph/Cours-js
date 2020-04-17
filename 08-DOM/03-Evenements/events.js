//----- Chargement de la page

window.onload = function(){
    /* 
    window est l'objet global de la fenêtre du navigateur

    document est le sous-objet de window qui représente la page web

    window.onload fait en sorte que la page HTML soit chargée avant le chargement du script javascript. C'est-à-dire, si je place ma balise script dans la balise head (dans le code HTML), window.onload va d'abord charger l'html et ensuite le code javascript
    */

    //-------------------

        // Il existe plusieurs manières de créer des évènements :    

//-----------------------

    //document.getElementById('div1').onclick = function(){
    //    alert('div1 - Vous avez cliqué sur div1 - Event : click'); // Evènement sur l'objet, fonction déclarée ici
    //}

//};

    //-------------

        //document.getElementById('div1').onclick = div1; // Evènement sur l'objet, la fonction déclarée plus bas

    //-------------

    // <div id="div1" onclick="alert('Salut')"> div1 </div> // méthode initiale/ancienne

    //-------------

    // addEventListener()

    //document.getElementById('div1').addEventListener('click', div1);

    // Dire à l'élément "d'écouter" si un évènement se produit : event Listener

    // addEventListener(TYPE EVENT, CALLBACK FUNCTION)

    // fonction de rappel (CALLBACK) est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite appelé à l'intérieur de la fonction externe pour exécuter une action

    //-------------------

    //---- DIV ----

    document.getElementById('div1').addEventListener('click', div1);
    document.getElementById('div2').addEventListener('dblclick', div2);
    document.getElementById('div3').addEventListener('mouseover', div3);
    document.getElementById('div4').addEventListener('mouseout', div4);
    document.getElementById('div5').addEventListener('mousedown', div5);
    document.getElementById('div6').addEventListener('mouseup', div6);

    //---- FORM ----

    document.getElementById('div7').addEventListener('blur', div7);
    document.getElementById('div8').addEventListener('focus', div8);
    document.getElementById('div9').addEventListener('change', div9);
    document.getElementById('div13').addEventListener('select', div13);
    document.getElementById('div14').addEventListener('input', div14);
    document.getElementById('div15').addEventListener('submit', function(e){
        e.preventDefault(); // La méthode  preventDefault() de l 'interface Event indique à l'agent utilisateur que si l'événement n'est pas traité explicitement, son action par défaut ne doit pas être prise en compte comme elle le serait normalement.
        alert('div15 - Vous avez soumis le formulaire. Event : Submit');
    });

    //---- TOUCHE CLAVIER ----

    document.getElementById('div10').addEventListener('keydown', div10);
    document.getElementById('div11').addEventListener('keypress', div11);
    document.getElementById('div12').addEventListener('keyup', div12);

//----------------------

// Les fonctions

// Click
function div1() {
    alert('div1 - Vous avez cliqué sur div1 - Event: click');
}

// Dblclick
function div2() {
    alert('div2 - Vous avez double cliqué sur div2 - Event: dblclick');
}

// Mouseover
function div3() {
    alert('div3 - Vous avez passé le curseur sur div3 - Event: Mouseover');
}

// Mouseout
function div4() {
    alert('div4 - Vous avez sorti le curseur de div4 - Event: Mouseout');
}

// Mousedown
function div5() {
    alert('div5 - Vous avez appuyé sur le bouton gauche de la souris dans div5 - Event: Mousedown');
}

// Mouseup
function div6() {
    alert('div6 - Vous avez relaché le bouton gauche de la souris dans div6 - Event: Mouseup');
}

// Blur
function div7() {
    alert('div7 - Le focus n\'est plus actif // Blur');
}

// Focus
function div8() {
    console.log('div8 - Le focus est actif');
}

// Change
function div9(event) {
    alert('Vous avez choisi : ' + event.target.value);
}

// Keydown
function div10() {
    alert('div 10 - Vous avez appuyé sur une touche de clavier sur l\'élément input');
}

// Keypress
function div11() {
    alert('div 11 - Vous avez appuyé puis relaché une touche du clavier sur l\'élément input');
}

// Keyup
function div12() {
    alert('div 12 - Vous avez relaché une touche du clavier sur l\'élément input');
}

// Select
function div13() {
    alert("Vous avez sélectionner le texte dans le champ !");
}

// Input
function div14() {
    var x = document.getElementById ("div14").value; // value, propriété qui permet de récupérer les données saisies dans un champ d'un formulaire
    document.getElementById("output").innerHTML = "Vous tapez : " + x;
}

};



