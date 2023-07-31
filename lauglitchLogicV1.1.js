// @charset "UTF-8";
// @ts-ignore
// @ts-nocheck
// @mime-type text/javascript

// 0- VARIABLES
var language = "ES";    // ES || EN
var site = "Home";      // Home || Contact
var webVersion = 'PC';  // PC || Mobile 
var lauglitchButton = document.getElementById('lauglitchButton');
var spanishButton = document.getElementById('spanishButton');
var englishButton = document.getElementById('englishButton');
var contactButton = document.getElementById('contactButton');

///////////// 1- ORDERED INSTRUCTIONS
console.log("V1.11");                           // Debug version
toggleContentBasedOnURL();                      // Called of first page load
window.onhashchange = toggleContentBasedOnURL;  // Call everytime the page changes

///////////// 2- GETTERS AND SETTERS
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
function setWebVersion(wVersion) {
    webVersion = wVersion;
}
function getWebVersion() {
    return webVersion;
}
function getDomain(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}

///////////// 3- NAVIGATION METHODS
function redirectToHomeES() {
    window.location.href = "https://lauglitchsandbox.blogspot.com/";
}
function redirectToHomeEN() {
    window.location.href = "https://www.lauglitch.com/p/home.html";
}
function redirectToContactES() {
    window.location.href = "https://www.lauglitch.com/p/contacto.html";
}
function redirectToContactEN() {
    window.location.href = "https://www.lauglitch.com/p/contact.html";
}

///////////// 4- ENGINE METHODS
function toggleContentBasedOnURL() {        // Called after navigation methods
    var currentURL = window.location.href;

    if (currentURL === "https://lauglitchsandbox.blogspot.com/") {
        setLanguage('ES');
        setSite('Home');
        setWebVersion('PC');

        // BODY
        document.getElementById('bodyInicio').style.display = 'block';

        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/home.html') {
        setLanguage('EN');
        setSite('Home');
        setWebVersion('PC');

        // BODY
        document.getElementById('bodyHome').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/contacto.html') {
        setLanguage('ES');
        setSite('Contact');
        setWebVersion('PC');

        // BODY
        document.getElementById('bodyContacto').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/contact.html') {
        setLanguage('EN');
        setSite('Contact');
        setWebVersion('PC');

        // BODY
        document.getElementById('bodyContact').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
    } 
   // MOBILE VERSION
    else if (currentURL === "https://www.lauglitch.com/?m=1") {
        setLanguage('ES');
        setSite('Home');
        setWebVersion('Mobile');

        // BODY
        document.getElementById('bodyInicio').style.display = 'block';

        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/home.html?m=1') {
        setLanguage('EN');
        setSite('Home');
        setWebVersion('Mobile');

        // BODY
        document.getElementById('bodyHome').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/contacto.html?m=1') {
        setLanguage('ES');
        setSite('Contact');
        setWebVersion('Mobile');

        // BODY
        document.getElementById('bodyContacto').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/contact.html?m=1') {
        setLanguage('EN');
        setSite('Contact');
        setWebVersion('Mobile');

        // BODY
        document.getElementById('bodyContact').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
    } else {
        console.log("No existe esta página.");
    }

    switchKeypadButtons();
}

function switchKeypadButtons(){
    if (getLanguage() === 'ES' & getSite() === 'Home'){
        spanishButton.disabled = true;  // true === OFF ; false === ON
        englishButton.disabled = false;
        contactButton.disabled = false; 
        lauglitchButton.disabled = true;

        englishButton.onclick = redirectToHomeEN();

    } else if (getLanguage() === 'EN' & getSite() === 'Home'){
        spanishButton.disabled = false;
        englishButton.disabled = true;
        contactButton.disabled = false;
        lauglitchButton.disabled = true;

        spanishButton.onclick = redirectToHomeES();
      
    } else if (getLanguage() === 'ES' & getSite() === 'Contact'){
        spanishButton.disabled = true;
        englishButton.disabled = false;
        contactButton.disabled = true;
        lauglitchButton.disabled = false;

        englishButton.onclick = redirectToContactEN();
        lauglitchButton.onclick = redirectToHomeES();
      
    } else if (getLanguage() === 'EN' & getSite() === 'Contact') {
        spanishButton.disabled = false;
        englishButton.disabled = true;
        contactButton.disabled = true;
        lauglitchButton.disabled = false;

        spanishButton.onclick = redirectToContactES();
        lauglitchButton.onclick = redirectToHomeEN();

    } else {
        console.log('Variables de localización no identificadas.')
    }

}
