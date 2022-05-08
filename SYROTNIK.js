$('document').ready(function() {


    var typed = new Typed('#TextePresentation', {
        strings: ["Je m'appelle Adrien SYROTNIK et je suis à la recherche d'un stage se déroulant du <em>3 janvier</em> au <em>8 avril</em> 2022.</br></br>Adorant la programmation et plus motivé que jamais, j'aimerais principalement trouver un stage sur le logiciel Unity, même si le domaine du web m'intéresse également."],
        typeSpeed: 10,
        showCursor: false
    });


    // var typed = new Typed('#Points', {
    //     strings: ["..."],
    //     typeSpeed: 300,
    //     showCursor: false,
    //     loop: true
    // });

    var age = new Date(Date.now() - new Date("2001-10-27").getTime()).getUTCFullYear() - 1970;
    document.getElementById("age").innerHTML = age + " ans";

    AOS.init();

});