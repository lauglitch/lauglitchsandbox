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
console.log("Tracing: 1.03");

function redirectToHomeES() {
    setLanguage("ES");
    setSite("home");
    window.location.href = "https://lauglitchsandbox.blogspot.com/"; // "https://www.lauglitch.com";
}
function redirectToHomeEN() {
    setLanguage("EN");
    setSite("home");
    window.location.href =  "lauglitch.com/p/home.html" //"https://www.lauglitch.com/p/home.html";
}
function redirectToContactES() {
    setLanguage("ES");
    setSite("contact");
    window.location.href = "https://lauglitch.com/p/contacto.html" //"https://www.lauglitch.com/p/contacto.html";
}
function redirectToContactEN() {
    setLanguage("EN");
    setSite("contact");
    window.location.href = "https://lauglitch.com/p/contact.html"; //"https://www.lauglitch.com/p/contact.html";
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

    if (currentURL === "https://lauglitchsandbox.blogspot.com/") { // "https://www.lauglitch.com";
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
        console.log("No existe esta página.");
    }
}
