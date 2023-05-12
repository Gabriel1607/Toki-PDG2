// Obtener todas las imágenes de los avatares
const avatars = document.querySelectorAll('.register__chooseavatar img'); //contendeor de los avatares
const selectedAvatarLabel = document.getElementById('selected_avatar'); //foto actual

// Agregar un controlador de eventos a cada imagen de avatar
avatars.forEach(avatar => {
  avatar.addEventListener('click', () => { //cuando hago click...
    const avatarSrc = avatar.getAttribute('src'); //Creo la variable

    
    selectedAvatarLabel.setAttribute('src', avatarSrc); //lo cambio por el avatar qe haya elegido
    console.log('Click en la imagen'); //para ver si funcionaba 
  });
});
