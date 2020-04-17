// setInterval()

let hauteur = 0;

function f(){
    hauteur += 5;

    document.getElementById('div').setAttribute("style", "height:" + hauteur + "px");

    console.log(hauteur);

    if(hauteur == 500) clearInterval(timer); // Avec clearInterval() on s'arrête quand la hauteur fera 500px. 

}

let timer = window.setInterval('f()', 100); // setInterval() permet de rappeler une fonction plusieurs fois.

// setInterval() est une méthode qui appalle une fonction de manière répétée, avec un certain délai fixé entre chaque appel. (Exprimé en millisecondes)

// la méthode clearInterval() permet d'annuler une action répétée minutée initiée via un appel de la méthode setInterval()

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval