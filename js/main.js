function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.open-menu').src = "img/openicon.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.open-menu').src = "img/closeicon.png";
    }
}

function registeredEmail () {
    const email = document.querySelector(".account").value;

    if(email){
        alert("Email registrado com sucesso!");
    } else {
        alert("Ocorreu um error, tente novamente mais tarde.")
    }
}