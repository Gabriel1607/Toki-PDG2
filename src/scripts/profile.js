import { db, auth } from "./app";
import { onAuthStateChanged } from "../functions/auth";
import { collection, doc, getDoc } from "firebase/firestore";

const profilePhoto = document.querySelector('.profile__photo');
let isLogged = false;


async function updateProfilePhoto() {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
          if (!isLogged) {
            const uid = user.uid;
            const userDoc = await db.collection('users').doc(uid).get();
            const userData = userDoc.data();
            const profilePhotoURL = userData.imageURL;
           
            // Establece la URL de la imagen como la imagen de perfil
            profilePhoto.src = profilePhotoURL;        
            isLogged=true;
          }
          
        }
      });
  }
  
  updateProfilePhoto();
