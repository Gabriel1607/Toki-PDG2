// Obtén el elemento con la clase "profileInd__title"
const profileTitleElement = document.querySelector('.profileInd__title');
// Obtén el elemento con la clase "profileInd__image"
const profileImageElement = document.querySelector('.profileInd__image');

// Obtén el título del perfil y la imagen de la URL
const urlParams = new URLSearchParams(window.location.search);
const encodedProfileTitle = urlParams.get('title');
const profileTitle = decodeURIComponent(encodedProfileTitle);
const profileImageSrc = urlParams.get('image');

// Asigna el título del perfil al elemento
profileTitleElement.textContent = profileTitle;
// Asigna la imagen del perfil al elemento
profileImageElement.src = decodeURIComponent(profileImageSrc);