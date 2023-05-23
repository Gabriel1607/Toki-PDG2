// Obtén el elemento con la clase "profileInd__title"
const profileTitleElement = document.querySelector('.profileInd__title');
// Obtén el elemento con la clase "profileInd__image"
const profileImageElement = document.querySelector('.profileInd__image');
// Obtén el elemento con la clase "profileInd__p"
const profileDescriptionElement = document.querySelector('.profileInd__p');
// Obtén el elemento con la clase "profileInd__quote"
const profileQuoteElement = document.querySelector('.profileInd__quote');
// Obtén el elemento con la clase "profileInd__linkedin"
const profileLinkedInElement = document.querySelector('.profileInd__linkedin');

// Obtén el título, imagen y descripción del perfil de la URL
const urlParams = new URLSearchParams(window.location.search);
const encodedProfileTitle = urlParams.get('title');
const profileTitle = decodeURIComponent(encodedProfileTitle);
const profileImageSrc = urlParams.get('image');
const encodedProfileQuote = urlParams.get('quote');
const profileQuote = decodeURIComponent(encodedProfileQuote);
const encodedProfileDescription = urlParams.get('description');
const profileDescription = decodeURIComponent(encodedProfileDescription);
const encodedProfileLinkedIn = urlParams.get('linkedin');
const profileLinkedIn = decodeURIComponent(encodedProfileLinkedIn);

// Asigna el título, imagen y descripción del perfil a los elementos correspondientes
profileTitleElement.textContent = profileTitle;
profileImageElement.src = decodeURIComponent(profileImageSrc);
profileQuoteElement.textContent = profileQuote;
profileDescriptionElement.textContent = profileDescription;
profileLinkedInElement.textContent = 'Ver perfil en LinkedIn';
profileLinkedInElement.href = profileLinkedIn;