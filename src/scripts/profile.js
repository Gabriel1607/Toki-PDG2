import { db, auth } from "./app";
import { onAuthStateChanged } from "../functions/auth";
import { getUser } from "./getUser";

const profilePhoto = document.querySelector('.profile__photo');
const username = document.querySelector('.profile__username');
const materia = document.querySelector('.profile__numbers');
const progress = document.querySelector('.profile__number');
let isLogged = false;

const editableElement = document.getElementById('editable');

editableElement.addEventListener('touchstart', function() {
  editableElement.focus();
});

async function updateProfilePhoto() {
  onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (!isLogged) {
          const uid = user.uid;
          const imgsrc= await getUser(uid);
          console.log(imgsrc.imageURL);
          const profilePhotoURL = imgsrc.imageURL;
          const userUsername = imgsrc.name;
          const notas = imgsrc.notas;
    
          const aprov = imgsrc.aprobado;

          const testRest = imgsrc.testResults;
          const compImages = document.querySelectorAll('img[data-comp]');
          const containerX = document.querySelector('.profile__containerx');
          const important = document.querySelector('.profile__pimportant');
          const orderedRest = getOrderedResults(testRest);
          //console.log(orderedRest);
// Attach the event listener to each subject image
compImages.forEach(image => {
  const imgComp = image.getAttribute('data-comp');
  const Firstposition = Object.values(orderedRest).findIndex(obj => obj.key === imgComp);
  const imgPos = image.getAttribute('data-position');
  //console.log("ARRAY"+position);
  //console.log("IMAGE"+imgPos);
  if (testRest) {
    if(imgPos==0&&imgComp==orderedRest[0].key||imgPos==1&&imgComp==orderedRest[1].key||imgPos==2&&imgComp==orderedRest[2].key){
  
      image.classList.remove('hidden');
    }else{
      image.classList.add('hidden');
    }
  }else{
    containerX.classList.add('hidden');
important.innerHTML = "¡Recuerda hacer tu Test de Competencias para completar tu perfil!"
  }
 
});
          const notaFuse = Object.assign({}, notas, aprov);
          console.log(notaFuse);
          const notaLength =  Object.keys(notaFuse).length;
          console.log(notaLength);
          // Establece la URL de la imagen como la imagen de perfil
         materia.innerHTML = `${notaLength}/53`;
         const progResult = (notaLength/53)*100
         progress.innerHTML = progResult.toFixed(0)+'%'
          profilePhoto.src = profilePhotoURL;  
         username.innerHTML =  userUsername;     
          isLogged=true;
        }
        
      }
    });
}
function getOrderedResults(testResults) {
  const orderedResults = [];

  for (const key in testResults) {
    if (testResults.hasOwnProperty(key)) {
      orderedResults.push({ key, value: testResults[key] });
    }
  }

  orderedResults.sort((a, b) => b.value - a.value);

  return orderedResults;
}
updateProfilePhoto();
