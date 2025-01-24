// @charset "UTF-8";
// @ts-ignore
// @ts-nocheck
// @mime-type text/javascript

///////////// 0.0 - VARIABLES
// 0.1 - Location Variables
let language = "ES";    // ES || EN
let site = "Home";      // Home || Contact
let device = 'PC';      // PC || Mobile 
let version = "V1.1"
const content = document.body;
const loaderContainer = document.querySelector(".loader-container");
let isRedirecting = false;

// 0.1 - DIVS. Used to show or hide web elements and to interact with the web
// (DIVS) CONTAINERS
var BodyHome = document.getElementById('BodyHome');         // Home-ES & Home-EN
var BodyContact = document.getElementById('BodyContact');   // Contact-ES & Contact-EN

var DivLogo = document.getElementById('DivLogo');          
var DivKeypad = document.getElementById('DivKeypad');     
var DivMore = document.getElementById('DivMore');         
var DivBio = document.getElementById('DivBio');           
var DivImages = document.getElementById('DivImages');      

var DivContactLeft = document.getElementById('DivContactLeft');    
var DivContactRight = document.getElementById('DivContactRight');  
var DivContactForm = document.getElementById('DivContactForm');    
var DivFindMe = document.getElementById('DivFindMe');               

// (DIVS) INNER ELEMENTS
var spanishBio = document.getElementById('spanishBio');    
var englishBio = document.getElementById('englishBio'); 

var spanishContactText = document.getElementById('spanishContactText');  
var englishContactText = document.getElementById('englishContactText');   
var spanishForm = document.getElementById('spanishForm');              
var englishForm = document.getElementById('englishForm');                  
var spanishFindOnText = document.getElementById('spanishFindOnText');     
var englishFindOnText = document.getElementById('englishFindOnText');      
var contactLinks = document.getElementById('contactLinks');

// 0.2 - NAVBAR BUTTONS
var lauglitchButton = document.getElementById('lauglitchButton');   // PC & Mobile
var contactButton = document.getElementById('contactButton');       // PC

let lauglitchBFunc = function() {}; // #lauglitchButton
let spanishBFunc = function() {};   // #spanishButton and #spanishButtonMobile
let englishBFunc = function() {};   // #englishButton and #englishButtonMobile
let contactBFunc = function() {};   // #contactButton and #contactButtonMobile

// 0.3 - NAVBAR DROPDOWNs
    /* Language Dropdwon ())PC) */
var langButton = document.getElementById('langButton');    
var langDropdown = document.getElementById('langDropdown');
var langDropdownVisible = false;

var spanishButton = document.getElementById('spanishButton');    
var englishButton = document.getElementById('englishButton');  
    /* */
    /* Mobile Dropdowns */
var moreButton = document.getElementById('moreButton');   
var moreDropdown = document.getElementById('moreDropdown'); 
var moreDropdownVisible = false; 

var langButtonMobile = document.getElementById('langButtonMobile');  
var langDropdownMobile = document.getElementById('langDropdownMobile');  
var langDropdownMobileVisible = false;  

var spanishButtonMobile = document.getElementById('spanishButtonMobile');  
var englishButtonMobile = document.getElementById('englishButtonMobile');  
var contactButtonMobile = document.getElementById('contactButtonMobile');             
    /* */
var englishErrorMessage = document.getElementById('spanishButtonMobile');  
var englishSuccessMessage = document.getElementById('englishSuccessMessage');  

var doneImage = document.getElementById('doneImage');  

// 0.4 - Web Elements Array (contains all variables above in order to Location Variables)
const webElements = [
    // DIVS
    { htmlElem: BodyHome,       lang: 'ALL', site: 'Home', device: 'ALL'},
    { htmlElem: BodyContact,    lang: 'ALL', site: 'Contact', device: 'ALL' },

    { htmlElem: DivLogo,        lang: 'ALL', site: 'ALL', device: 'ALL' },
    { htmlElem: DivKeypad,      lang: 'ALL', site: 'ALL', device: 'PC' },
    { htmlElem: DivMore,        lang: 'ALL', site: 'ALL', device: 'Mobile' },

    //{ htmlElem: DivBio,         lang: 'ALL', site: 'Home', device: 'ALL' },
    { htmlElem: spanishBio,     lang: 'ES', site: 'Home', device: 'ALL' },
    { htmlElem: englishBio,     lang: 'EN', site: 'Home', device: 'ALL' },
    { htmlElem: DivImages,      lang: 'ALL', site: 'Home', device: 'ALL' },

    { htmlElem: DivContactLeft,     lang: 'ALL', site: 'Contact', device: 'ALL' },
    { htmlElem: DivContactRight,    lang: 'ALL', site: 'Contact', device: 'ALL' },
    //{ htmlElem: DivContactForm,     lang: 'ALL', site: 'Contact', device: 'ALL' },
    { htmlElem: spanishContactText, lang: 'ES', site: 'Contact', device: 'ALL' },
    { htmlElem: englishContactText, lang: 'EN', site: 'Contact', device: 'ALL' },
    { htmlElem: spanishForm,        lang: 'ES', site: 'Contact', device: 'ALL' },
    { htmlElem: englishForm,        lang: 'EN', site: 'Contact', device: 'ALL' },
    //{ htmlElem: DivFindMe,          lang: 'ALL', site: 'Contact', device: 'ALL' },
    { htmlElem: spanishFindOnText,  lang: 'ES', site: 'Contact', device: 'ALL' },
    { htmlElem: englishFindOnText,  lang: 'EN', site: 'Contact', device: 'ALL' },

    // BUTTONS (Info: Some buttons are deactivated on some languages or sites but they are still shown, that's why 'ALL')
    { htmlElem: lauglitchButton,    lang: 'ALL', site: 'ALL', device: 'ALL' },
    { htmlElem: contactButton,      lang: 'ALL', site: 'ALL', device: 'PC' },

    // DROPDOWNs
    { htmlElem: langButton,     lang: 'ALL', site: 'ALL', device: 'PC' },
    { htmlElem: langDropdown,   lang: 'ALL', site: 'ALL', device: 'PC' },
    { htmlElem: spanishButton,  lang: 'ALL', site: 'ALL', device: 'PC' },
    { htmlElem: englishButton,  lang: 'ALL', site: 'ALL', device: 'PC' },

    { htmlElem: moreButton,             lang: 'ALL', site: 'ALL', device: 'Mobile' },
    { htmlElem: moreDropdown,           lang: 'ALL', site: 'ALL', device: 'Mobile' },
    { htmlElem: langButtonMobile,       lang: 'ALL', site: 'ALL', device: 'Mobile' },
    { htmlElem: langDropdownMobile,     lang: 'ALL', site: 'ALL', device: 'Mobile' },
    { htmlElem: spanishButtonMobile,    lang: 'ALL', site: 'ALL', device: 'Mobile' },
    { htmlElem: englishButtonMobile,    lang: 'ALL', site: 'ALL', device: 'Mobile' },
    { htmlElem: contactButtonMobile,    lang: 'ALL', site: 'ALL', device: 'Mobile' },
]

// 0.5 - Videojuegos (Imagenes y Links)
var vgImages = [
    { 
        src: 'https://imgur.com/Usmc9kp.png', alt: 'Agenda 2025', link: 'https://github.com/lauglitch/Graphic-Design/blob/main/Agenda2025ByLauglitch.pdf' 
    },
    { 
        src: 'https://imgur.com/cCrx5qm.png', alt: 'InsTracker', link: 'https://lauglitch.itch.io/instracker' 
    },
    { 
        src: 'https://imgur.com/zPOmBx0.png', alt: 'TwiTracker', link: 'https://lauglitch.itch.io/twitracker' 
    },
    { 
        src: 'https://imgur.com/dYV13M3.png', alt: 'If I', link: 'https://iviuriel.itch.io/if-i' 
    },
    { 
        src: 'https://imgur.com/9AFJqM6.png', alt: 'Desktop Tower Chess', link: 'https://rodillos-gaming.itch.io/desktop-tower-chess' 
    },
    { 
        src: 'https://imgur.com/sGqxp4O.png', alt: 'Triskel', link: 'https://rodillos-gaming.itch.io/triskel' 
    },
    { 
        src: 'https://imgur.com/lCPmpak.png', alt: 'Wanted: Point And Shot', link: 'https://diegodiaz.itch.io/wanted-point-and-shot' 
    },
    { 
        src: 'https://imgur.com/peFNJO8.png', alt: 'Knights And Castles', link: 'https://castlesgames.github.io/' 
    },
];
function reloadImages() {
    var divImages = document.getElementById('DivImages');
    var template = document.getElementById('image-template');

    vgImages.forEach(function(imageData) {
        var clone = template.content.cloneNode(true);
        clone.querySelector('img').src = imageData.src;
        clone.querySelector('img').alt = imageData.alt;
        clone.querySelector('a').textContent = imageData.alt;
        clone.querySelector('a').href = imageData.link;
        divImages.appendChild(clone);
    });
}

document.addEventListener('DOMContentLoaded', reloadImages);
  
// 0.6 - BUTTON EVENTS
// When user click on #lauglitchButton
lauglitchButton.addEventListener("click", function () {
    lauglitchBFunc();
    setGlobalVariables();
});
// When user click on #contactButton
contactButton.addEventListener("click", function () {
    contactBFunc();
    setGlobalVariables();
});
// When user click on #spanishButton
spanishButton.addEventListener("click", function () {
    spanishBFunc();
    setGlobalVariables();
});
// When user click on #englishButton
englishButton.addEventListener("click", function () {
    englishBFunc();
    setGlobalVariables();
});
// When user click on #spanishButtonMobile
spanishButtonMobile.addEventListener("click", function () {
    spanishBFunc();
    setGlobalVariables();
});
// When user click on #englishButtonMobile
englishButtonMobile.addEventListener("click", function () {
    englishBFunc();
    setGlobalVariables();
});
// When user click on #contactButtonMobile
contactButtonMobile.addEventListener("click", function () {
    contactBFunc();
    setGlobalVariables();
});
// Show or hide dropdown when langButton is pressed
document.addEventListener("DOMContentLoaded", function () { 
    // Close all dropdowns if user clicks outside
    document.addEventListener("click", function () {
      moreDropdown.style.display = "none";
      moreDropdown.classList.remove('show')
      langDropdownMobile.style.display = "none";
      langDropdownMobile.classList.remove('show')
    });
  
    // Avoid that clicking on dropdowns close them
    moreDropdown.addEventListener("click", function (event) {
      event.stopPropagation();
    });
    langDropdownMobile.addEventListener("click", function (event) {
      event.stopPropagation();
    });
});
$('#moreButton').on('click', function() {
    if (langDropdownMobile.style.display === "block"){
        langDropdownMobile.style.display = 'none';
        langDropdownMobile.classList.remove('show')
    } 
    // Cierra langDropdownMobile si está desplegado
    if (moreDropdown.style.display === 'block'){
        moreDropdown.style.display = 'none';
        moreDropdown.style.opacity = 0;
        moreDropdown.classList.remove('show')
    } else {
        moreDropdown.style.display = 'block';
        moreDropdown.style.opacity = 1;
        moreDropdown.classList.add('show')
    }
});
$('#langButtonMobile').on('click', function() {
    if (langDropdownMobile.style.display === "block"){
        langDropdownMobile.style.display = 'none';
    } else {
        langDropdownMobile.style.display = 'block';
    }
});

///////////// 1 - GETTERS AND SETTERS
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
function setDevice(dev) {
    device = dev;
}
function getDevice() {
    return device;
}
function getDomain(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}

///////////// 2 - INSTRUCTIONS
console.log(version);                          // Debug version

// 2.1. Graphics
setGlobalVariables();                      // Called on first page load

// 2.2. Device Control
window.addEventListener("load", readjustContent);
window.addEventListener("resize", readjustContent);

// 2.3. Load Web
document.addEventListener("DOMContentLoaded", function () {
    const loaderContainer = document.querySelector(".loader-container");

    // Mostrar el contenido después de cargar
    loaderContainer.style.opacity = 0;
    setTimeout(() => {
        loaderContainer.style.display = "none";
        content.style.opacity = 1;
    }, 1000); // Tiempo de espera para el desvanecimiento  
});
///////////// 3 - NAVIGATION
// Función para aplicar la transición de página
// Función para aplicar la transición de página
function applyPageTransition(url) {
    if (!isRedirecting) {
        isRedirecting = true;
        loaderContainer.style.opacity = 1;
        setTimeout(() => {
            redirectTo(url);
        }, 1000); // Tiempo de espera para el desvanecimiento
    }
}
// Función de redirección con transición
function redirectTo(url) {
    content.style.opacity = 0;
    content.style.transform = "translateY(20px)";
    setTimeout(() => {
        window.location.href = url;
    }, 500); 
}
// Evento al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    // Aplicar la transición de entrada al cargar la página
    content.style.opacity = 1;
    loaderContainer.style.opacity = 0;
});
// Funciones de redirección
function redirectToHomeES() {
    applyPageTransition("https://www.lauglitch.com/");
}
function redirectToHomeEN() {
    applyPageTransition("https://www.lauglitch.com/p/home.html");
}
function redirectToContactES() {
    applyPageTransition("https://www.lauglitch.com/p/contacto.html");
}
function redirectToContactEN() {
    applyPageTransition("https://www.lauglitch.com/p/contact.html");
}

///////////// 4 - GRAPHICS
// Set Global Variables based on URL
function setGlobalVariables() {        
    var currentURL = window.location.href;
    //console.log("Current URL: " + currentURL);

    if (currentURL === 'https://www.lauglitch.com/') { 
        setLanguage('ES');
        setSite('Home');
        setDevice('PC');
    } else if (currentURL === 'https://www.lauglitch.com/p/home.html') {
        setLanguage('EN');
        setSite('Home');
        setDevice('PC');
    } else if (currentURL === 'https://www.lauglitch.com/p/contacto.html') {
        setLanguage('ES');
        setSite('Contact');
        setDevice('PC');
    } else if (currentURL === 'https://www.lauglitch.com/p/contact.html') {
        setLanguage('EN');
        setSite('Contact');
        setDevice('PC');
    } else if (currentURL === 'https://www.lauglitch.com/p/contacto/done.html'){
        setLanguage('ES');
        setSite('Contact');
        setDevice('PC');
    } else if (currentURL === 'https://www.lauglitch.com/p/contact/done.html'){
        setLanguage('EN');
        setSite('Contact');
        setDevice('PC');
    }
   // MOBILE VERSION
    else if (currentURL === 'https://www.lauglitch.com/?m=1') {
        setLanguage('ES');
        setSite('Home');
        setDevice('Mobile');
    } else if (currentURL === 'https://www.lauglitch.com/p/home.html?m=1') {
        setLanguage('EN');
        setSite('Home');
        setDevice('Mobile');
    } else if (currentURL === 'https://www.lauglitch.com/p/contacto.html?m=1') {
        setLanguage('ES');
        setSite('Contact');
        setDevice('Mobile');
    } else if (currentURL === 'https://www.lauglitch.com/p/contact.html?m=1') {
        setLanguage('EN');
        setSite('Contact');
        setDevice('Mobile');
    } else if (currentURL === 'https://www.lauglitch.com/p/contacto/done.html?m=1'){
        setLanguage('ES');
        setSite('Contact');
        setDevice('PC');
    } else if (currentURL === 'https://www.lauglitch.com/p/contact/done.html?m=1'){
        setLanguage('EN');
        setSite('Contact');
        setDevice('PC');
    } else {
        console.log("No existe la página: " + currentURL);
    }

    setDisplay()
    switchKeypadButtons();
}
// Show HTML elements based on current Language, Site and Device
function setDisplay(){
    const toShow = [];
    const toHide = [];
    let lang = getLanguage();       // TODO: Intentar borrar estos 3 y usar los getters
    let site = getSite();
    let device = getDevice();
    var currentURL = window.location.href;
    
    console.log("Language: " + getLanguage() + " / Site: " + getSite() + " / Device: " + getDevice())
    webElements.forEach((elem) => {

        // #BodyHome & #BodyContact
        if (elem.lang === 'ALL' && elem.site === site && elem.device === 'ALL') {
            toShow.push(elem.htmlElem);
        } 
        // #spanishBio & #englishBio
        else if (elem.lang === getLanguage() && elem.site === site && elem.device === 'ALL') {
            toShow.push(elem.htmlElem);
        }
        else if (elem.lang === 'ALL' && elem.site === 'ALL' && elem.device === 'ALL') {
            toShow.push(elem.htmlElem);
        } 
        else if (elem.lang === 'ALL' && elem.site === 'ALL' && elem.device === getDevice()) {
            //(elem)
            toShow.push(elem.htmlElem);
        }
        else {
            toHide.push(elem.htmlElem);
        }
    });

    toShow.forEach((elem) => {
        //console.log("Yes " + elem.id)

        // Hide Dropdowns and show the rest of HTML Elements
        if(!(elem === langDropdown || elem === moreDropdown || elem === langDropdownMobile))
            elem.style.display = 'block';
    });

    toHide.forEach((elem) => {
        //console.log("No " + elem.id)
        elem.style.display = 'none';
    });

    // Show or hider okButton
    if ((currentURL === 'https://www.lauglitch.com/p/contacto/done.html') || (currentURL === 'https://www.lauglitch.com/p/contact/done.html')
    || (currentURL === 'https://www.lauglitch.com/p/contacto/done.html?m=1') ||(currentURL === 'https://www.lauglitch.com/p/contact/done.html?m=1')){
        doneImage.style.display = 'block';
    } else {
        doneImage.style.display = 'none';
    }

}
// Change Navbar buttons based on URL
function switchKeypadButtons(){
    if (getDevice()==='PC')
        enableButton(langButton) // visible on all PC URL
    else 
        enableButton(moreButton) // visible on all Mobile URL

    if(getDevice() === 'PC'){
        if (getLanguage() === 'ES' & getSite() === 'Home'){
            disableButton(lauglitchButton)
            disableButton(spanishButton)
    
            enableButton(englishButton)
            enableButton(contactButton)
            englishBFunc = redirectToHomeEN;
            contactBFunc = redirectToContactES;
        } else if (getLanguage() === 'EN' & getSite() === 'Home'){
            disableButton(lauglitchButton)
            disableButton(englishButton)
    
            enableButton(spanishButton)
            enableButton(contactButton)
            spanishBFunc = redirectToHomeES;
            contactBFunc = redirectToContactEN;
        } else if (getLanguage() === 'ES' & getSite() === 'Contact'){
            disableButton(spanishButton)
            disableButton(contactButton)
    
            enableButton(lauglitchButton)
            enableButton(englishButton)
            lauglitchBFunc = redirectToHomeES;
            englishBFunc = redirectToContactEN;
        } else if (getLanguage() === 'EN' & getSite() === 'Contact') {
            disableButton(englishButton)
            disableButton(contactButton)
    
            enableButton(lauglitchButton)
            enableButton(spanishButton)
            lauglitchBFunc = redirectToHomeEN;
            spanishBFunc = redirectToContactES;
        } else {
            console.log('Variables de localización no identificadas en PC.')
        }
        
        // Darken the current language to report the user not to click again on it 
        const dropdownButtons = document.querySelectorAll('#langDropdown .dropdown-item');
        dropdownButtons.forEach(button => {
            if (button.disabled) {
                button.style.opacity = 0.5;
            }
        });
    } else if (getDevice() === 'Mobile'){
        if (getLanguage() === 'ES' & getSite() === 'Home'){
            disableButton(lauglitchButton)
            disableButton(spanishButtonMobile)
    
            enableButton(englishButtonMobile)
            enableButton(contactButtonMobile)
            englishBFunc = redirectToHomeEN;
            contactBFunc = redirectToContactES;
        } else if (getLanguage() === 'EN' & getSite() === 'Home'){
            disableButton(lauglitchButton)
            disableButton(englishButtonMobile)
    
            enableButton(spanishButtonMobile)
            enableButton(contactButtonMobile)
            spanishBFunc = redirectToHomeES;
            contactBFunc = redirectToContactEN;
        } else if (getLanguage() === 'ES' & getSite() === 'Contact'){
            disableButton(spanishButtonMobile)
            disableButton(contactButtonMobile)
    
            enableButton(lauglitchButton)
            enableButton(englishButtonMobile)
            lauglitchBFunc = redirectToHomeES;
            englishBFunc = redirectToContactEN;
        } else if (getLanguage() === 'EN' & getSite() === 'Contact') {
            disableButton(englishButtonMobile)
            disableButton(contactButtonMobile)
    
            enableButton(lauglitchButton)
            enableButton(spanishButtonMobile)
            lauglitchBFunc = redirectToHomeEN;
            spanishBFunc = redirectToContactES;
        } else {
            console.log('Variables de localización no identificadas en Mobile.')
        }

        // Darken the current language to report the user not to click again on it 
        const dropdownButtons = document.querySelectorAll('#langDropdownMobile .dropdown-item-mobile');
        dropdownButtons.forEach(button => {
            if (button.disabled) {
                button.style.opacity = 0.5;
            }
        });
    } else {
        console.log("Dispositivo no reconocido.")
    }  
}

///////////// 5 - DEVICE CONTROL (PC and Mobile)
// Returns true/false if is navigating on Mobile 
function navigatingOnMobile() {
    return /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
// Show or hide different content if navigating on PC or Mobile and if width<768px
function changeNavbarAccordingToDevice() {
    const largeNavbar = document.querySelectorAll('.largeNavbar');
    const smallNavbar = document.querySelectorAll('.smallNavbar');

    $('.dropdown-toggle').dropdown();   // Restart all dropdowns to make sure they work

    if (navigatingOnMobile() || window.innerWidth<768) {
        DivKeypad.classList.remove('row');         // Remove row class from DivKeypad
        
        smallNavbar.forEach(element => {
            element.style.display = "block";
        });
        largeNavbar.forEach(element => {
            element.style.display = "none";
        });

        //Show moreButton
        DivMore.classList.remove("col-lg-4", "col-md-4", "col-sm-12")
        DivMore.style.display = 'block'

        // Show small DivLogo
        DivLogo.classList = [];
        DivLogo.classList.add('col-lg-4', 'col-md-4', 'col-sm-12');

        // Enable or disable the other possible language button
        if(getLanguage() === 'ES'){
            enableButton(englishButtonMobile);
            disableButton(spanishButtonMobile);
        } else if (getLanguage() === 'EN'){
            enableButton(spanishButtonMobile);
            disableButton(englishButtonMobile);
        }

        // Hide langDropdownMobile
        langDropdownMobile.style.display='none';

        if(getSite() === 'Contact')
            disableButton(contactButtonMobile)
        else if(getSite() === 'Home')
            enableButton(contactButtonMobile)
    } else {
        DivKeypad.classList.add('row');  // Add row class to DivKeypad

        largeNavbar.forEach(element => {
            element.style.display = "block";
        });
        smallNavbar.forEach(element => {
            element.style.display = "none";
        });

        //Hide moreButton
        DivMore.classList.add("col-lg-4", "col-md-4", "col-sm-12")
        DivMore.style.display = 'none'

        // Show large DivLogo
        DivLogo.classList = [];
        DivLogo.classList.add('col-lg-4', 'col-md-4', 'col-sm-12', 'col-12');

        // Restore original logoLauglitch and moreButton sizes
        lauglitchButton.classList.remove('small-screen-style');
        moreButton.classList.remove('small-screen-style');
  
        // Enable or disable the other possible language button
        if(getLanguage() === 'ES'){
            enableButton(englishButton);
            disableButton(spanishButton);
        } else if (getLanguage() === 'EN'){
            enableButton(spanishButton);
            disableButton(englishButton);
        }
    }
}
// Readjust common and existing content if navigating on PC or Mobile and if width<768px
function readjustContent() {
    const imageContainers = document.querySelectorAll('.image-container');  // Selección de los contenedores de las imágenes

    if (window.innerWidth < 768) {
        imageContainers.forEach(container => {
            container.classList.remove('col-lg-4', 'col-md-4', 'text-center');  // Eliminar clases existentes si las hubiera
            container.classList.add('col-sm-12', 'col-12', 'text-center');  // Agregar nuevas clases para pantallas pequeñas
        });

        // Translate both columns 
        DivContactLeft.style.marginLeft = "10%"
        DivContactRight.style.marginLeft = "10%"

        spanishForm.classList.add("contactStyleSmall")
        englishForm.classList.add("contactStyleSmall")
        spanishForm.classList.remove("contactStyleLarge")
        englishForm.classList.remove("contactStyleLarge")

        
    } else {
        imageContainers.forEach(container => {
            container.classList.remove('col-sm-12', 'col-12', 'text-center');  // Eliminar clases existentes si las hubiera
            container.classList.add('col-lg-4', 'col-md-4', 'text-center');  // Agregar nuevas clases para pantallas grandes
        });

        if (window.innerWidth < 991) {
            spanishForm.classList.add("contactStyleSmall")
            englishForm.classList.add("contactStyleSmall")
            spanishForm.classList.remove("contactStyleLarge")
            englishForm.classList.remove("contactStyleLarge")

        } else {
            spanishForm.classList.add("contactStyleLarge")
            englishForm.classList.add("contactStyleLarge")
            spanishForm.classList.remove("contactStyleSmall")
            englishForm.classList.remove("contactStyleSmall")

        }

        // Restart both columns 
        DivContactLeft.style.marginLeft = "0%"
        DivContactRight.style.marginLeft = "0%"      
    }

    changeNavbarAccordingToDevice();
}

///////////// 6 - BUTTONS
// Disable button (darken image, remove click and remove hover
function disableButton(button) {
    if (button === lauglitchButton){
        button.classList.remove('hover-active'); 
        button.disabled = true;
    } else {
        button.classList.remove('hover-active'); 
        button.style.opacity = 0.5;
        button.disabled = true;
    }
}
// Enable button (active click -and redirect methods- and add hover)
function enableButton(button) {
    if (button === lauglitchButton){
        button.classList.add('hover-active'); 
        button.disabled = false;
    } else {
        button.classList.add('hover-active'); 
        button.style.opacity = 1;
        button.disabled = false;
    }
}

///////////// END /////////////
