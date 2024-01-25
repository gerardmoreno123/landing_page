// Crear el elemento head
const head = document.head;

// Crear meta etiquetas
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charSet', 'utf-8');

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1, shrink-to-fit=no');

const metaDescription = document.createElement('meta');
metaDescription.setAttribute('name', 'description');
metaDescription.setAttribute('content', '');

const metaAuthor = document.createElement('meta');
metaAuthor.setAttribute('name', 'author');
metaAuthor.setAttribute('content', '');

// Crear el título
const title = document.createElement('title');
title.textContent = 'SeeU Auditories';

// Crear el favicon
const favicon = document.createElement('link');
favicon.setAttribute('rel', 'icon');
favicon.setAttribute('type', 'image/x-icon');
favicon.setAttribute('href', 'assets/img/logos/logo_sense_lletra.png');

// Crear el script de Font Awesome
const fontAwesomeScript = document.createElement('script');
fontAwesomeScript.setAttribute('src', 'https://use.fontawesome.com/releases/v6.3.0/js/all.js');
fontAwesomeScript.setAttribute('crossOrigin', 'anonymous');

// Crear enlaces a las fuentes de Google
const googleFontMontserrat = document.createElement('link');
googleFontMontserrat.setAttribute('href', 'https://fonts.googleapis.com/css?family=Montserrat:400,700');
googleFontMontserrat.setAttribute('rel', 'stylesheet');
googleFontMontserrat.setAttribute('type', 'text/css');

const googleFontRobotoSlab = document.createElement('link');
googleFontRobotoSlab.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700');
googleFontRobotoSlab.setAttribute('rel', 'stylesheet');
googleFontRobotoSlab.setAttribute('type', 'text/css');

// Crear el enlace al archivo CSS principal
const coreThemeCSS = document.createElement('link');
coreThemeCSS.setAttribute('href', 'css/styles.css');
coreThemeCSS.setAttribute('rel', 'stylesheet');

// Agregar cada elemento al head
head.appendChild(metaCharset);
head.appendChild(metaViewport);
head.appendChild(metaDescription);
head.appendChild(metaAuthor);
head.appendChild(title);
head.appendChild(favicon);
head.appendChild(fontAwesomeScript);
head.appendChild(googleFontMontserrat);
head.appendChild(googleFontRobotoSlab);
head.appendChild(coreThemeCSS);
