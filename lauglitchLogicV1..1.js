// @charset "UTF-8";
// @ts-ignore
// @ts-nocheck
// @mime-type text/javascript
var language = "ES"; // ES || EN
var site = "Home";  // home || contact

// Called of first page load
toggleContentBasedOnURL();
// Call everytime the page changes
window.onhashchange = toggleContentBasedOnURL;
console.log("Tracing: 1.05");

function redirectToHomeES() {
    setLanguage("ES");
    setSite("home");
    window.location.href = "https://www.lauglitch.com";
}
function redirectToHomeEN() {
    setLanguage("EN");
    setSite("home");
    window.location.href =  "https://www.lauglitch.com/p/home.html";
}
function redirectToContactES() {
    setLanguage("ES");
    setSite("contact");
    window.location.href = "https://www.lauglitch.com/p/contacto.html";
}
function redirectToContactEN() {
    setLanguage("EN");
    setSite("contact");
    window.location.href = "https://www.lauglitch.com/p/contact.html";
}
function setLanguage(lang) {
    language = lang;
}
function getLanguage() {
    return language;
}
function setSite(sit) {
    site = sit;
}
function getSite() {
    return site;
}
function getDomain(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}
function toggleContentBasedOnURL() {
    var currentURL = window.location.href;
    
    if (currentURL === "https://www.lauglitch.com") { 
        console.log("1 " + currentURL);
        // HEADER
        document.getElementById('lauglitchLogoInicio').style.display = 'block';
        document.getElementById('keypadsInicio').style.display = 'block';

        document.getElementById('lauglitchLogoHome').style.display = 'none';
        document.getElementById('keypadsHome').style.display = 'none';
        document.getElementById('lauglitchLogoContacto').style.display = 'none';
        document.getElementById('keypadsContacto').style.display = 'none';
        document.getElementById('lauglitchLogoContact').style.display = 'none';
        document.getElementById('keypadsContact').style.display = 'none';

        // BODY
        document.getElementById('bodyInicio').style.display = 'block';

        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/home.html') {
        console.log("2 " + currentURL);
        // HEADER
        document.getElementById('lauglitchLogoHome').style.display = 'block';
        document.getElementById('keypadsHome').style.display = 'block';

        document.getElementById('lauglitchLogoInicio').style.display = 'none';
        document.getElementById('keypadsInicio').style.display = 'none';
        document.getElementById('lauglitchLogoContacto').style.display = 'none';
        document.getElementById('keypadsContacto').style.display = 'none';
        document.getElementById('lauglitchLogoContact').style.display = 'none';
        document.getElementById('keypadsContact').style.display = 'none';

        // BODY
        document.getElementById('bodyHome').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/contacto.html') {
        console.log("3 " + currentURL);
        // HEADER
        document.getElementById('lauglitchLogoContacto').style.display = 'block';
        document.getElementById('keypadsContacto').style.display = 'block';

        document.getElementById('lauglitchLogoInicio').style.display = 'none';
        document.getElementById('keypadsInicio').style.display = 'none';
        document.getElementById('lauglitchLogoHome').style.display = 'none';
        document.getElementById('keypadsHome').style.display = 'none';
        document.getElementById('lauglitchLogoContact').style.display = 'none';
        document.getElementById('keypadsContact').style.display = 'none';

        // BODY
        document.getElementById('bodyContacto').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/contact.html') {
        console.log("4 " + currentURL);
        // HEADER
        document.getElementById('lauglitchLogoContact').style.display = 'block';
        document.getElementById('keypadsContact').style.display = 'block';

        document.getElementById('lauglitchLogoInicio').style.display = 'none';
        document.getElementById('keypadsInicio').style.display = 'none';
        document.getElementById('lauglitchLogoHome').style.display = 'none';
        document.getElementById('keypadsHome').style.display = 'none';
        document.getElementById('lauglitchLogoContacto').style.display = 'none';
        document.getElementById('keypadsContacto').style.display = 'none';

        // BODY
        document.getElementById('bodyContact').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
    } 
   // MOBILE VERSION
    else if (currentURL === "https://www.lauglitch.com/?m=1") {
        console.log("5 " + currentURL);
        // HEADER
        document.getElementById('lauglitchLogoInicio').style.display = 'block';
        document.getElementById('keypadsInicio').style.display = 'block';

        document.getElementById('lauglitchLogoHome').style.display = 'none';
        document.getElementById('keypadsHome').style.display = 'none';
        document.getElementById('lauglitchLogoContacto').style.display = 'none';
        document.getElementById('keypadsContacto').style.display = 'none';
        document.getElementById('lauglitchLogoContact').style.display = 'none';
        document.getElementById('keypadsContact').style.display = 'none';

        // BODY
        document.getElementById('bodyInicio').style.display = 'block';

        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/home.html?m=1') {
        console.log("6 " + currentURL);
        // HEADER
        document.getElementById('lauglitchLogoHome').style.display = 'block';
        document.getElementById('keypadsHome').style.display = 'block';

        document.getElementById('lauglitchLogoInicio').style.display = 'none';
        document.getElementById('keypadsInicio').style.display = 'none';
        document.getElementById('lauglitchLogoContacto').style.display = 'none';
        document.getElementById('keypadsContacto').style.display = 'none';
        document.getElementById('lauglitchLogoContact').style.display = 'none';
        document.getElementById('keypadsContact').style.display = 'none';

        // BODY
        document.getElementById('bodyHome').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/contacto.html?m=1') {
        console.log("7 " + currentURL);
        // HEADER
        document.getElementById('lauglitchLogoContacto').style.display = 'block';
        document.getElementById('keypadsContacto').style.display = 'block';

        document.getElementById('lauglitchLogoInicio').style.display = 'none';
        document.getElementById('keypadsInicio').style.display = 'none';
        document.getElementById('lauglitchLogoHome').style.display = 'none';
        document.getElementById('keypadsHome').style.display = 'none';
        document.getElementById('lauglitchLogoContact').style.display = 'none';
        document.getElementById('keypadsContact').style.display = 'none';

        // BODY
        document.getElementById('bodyContacto').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/contact.html?m=1') {
        console.log("8 " + currentURL);
        // HEADER
        document.getElementById('lauglitchLogoContact').style.display = 'block';
        document.getElementById('keypadsContact').style.display = 'block';

        document.getElementById('lauglitchLogoInicio').style.display = 'none';
        document.getElementById('keypadsInicio').style.display = 'none';
        document.getElementById('lauglitchLogoHome').style.display = 'none';
        document.getElementById('keypadsHome').style.display = 'none';
        document.getElementById('lauglitchLogoContacto').style.display = 'none';
        document.getElementById('keypadsContacto').style.display = 'none';

        // BODY
        document.getElementById('bodyContact').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
    } else {
        console.log("9 " + currentURL);
        console.log("No existe esta página.");
    }
}
