let img = 0;

function f(){
    img += 1;

    document.getElementById('monImage').setAttribute('src', 'imgs/' + img + '.jpg');

    console.log(img);

    if(img === 6) clearInterval(timer);
    //if(img === 6) img = 0;
}

let timer = window.setInterval("f()", 2000); // 2000 pour toutes les 2 secondes