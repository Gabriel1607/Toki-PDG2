import { db, auth } from "./app";
import { onAuthStateChanged } from "../functions/auth";
import { getUser } from "./getUser";

const profilePhoto = document.querySelector('.profile__photo');
const username = document.querySelector('.profile__username');
let isLogged = false;


async function updateProfilePhoto() {
  onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (!isLogged) {
          const uid = user.uid;
          const imgsrc= await getUser(uid);
          console.log(imgsrc.imageURL);
          const profilePhotoURL = imgsrc.imageURL;
          const userUsername = imgsrc.name;
          // Establece la URL de la imagen como la imagen de perfil
         profilePhoto.src = profilePhotoURL;  
         username.innerHTML =  userUsername;     
          isLogged=true;
        }
        
      }
    });
}

updateProfilePhoto();
