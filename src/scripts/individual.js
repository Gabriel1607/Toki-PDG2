// Obtén el elemento con la clase "individual__title"
const profileTitleElement = document.querySelector('.individual__title');
// Obtén el elemento con la clase "individual__image"
const profileImageElement = document.querySelector('.individual__image');

// Obtén el título del perfil y la imagen de la URL
const urlParams = new URLSearchParams(window.location.search);
const encodedProfileTitle = urlParams.get('title');
const profileTitle = decodeURIComponent(encodedProfileTitle);
const profileImageSrc = urlParams.get('image');

// Asigna el título del perfil al elemento
profileTitleElement.textContent = profileTitle;
// Asigna la imagen del perfil al elemento
profileImageElement.src = decodeURIComponent(profileImageSrc);