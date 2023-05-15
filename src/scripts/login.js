import { db, auth, app } from "./app";
import { loginUser, registerUser, addUserToDatabase, onAuthStateChanged } from "../functions/auth";
import { updateUserData } from "./getUser";
import { signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";

const selectedSubject = [];

const registerUserForm1 = document.getElementById("registerUserForm");
const registerUserForm2 = document.getElementById("registerUserForm2")
const loginUserForm = document.getElementById("loginUserForm");
const registerUserForm3 = document.getElementById("registerUserForm3")
const semestre =document.getElementById('semester')
const notas_semestres = document.querySelectorAll('table');

const avatars = document.querySelectorAll('.register__chooseavatar img'); //contendeor de los avatares
const selectedAvatar = document.getElementById('selected_avatar'); // Imagen "actual""
const okButton = document.getElementById('okButton');//Boton para subir el avatar y pasar al home
const storage = getStorage(app);

const logoutLink = document.getElementById('logoutLink');

let isLogged = false;

var coll = document.getElementsByClassName("collapsible");
var i;
//Desplegable
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
// Get all the subject images
const subjectImages = document.querySelectorAll('img[data-subject]');

// Attach the event listener to each subject image
subjectImages.forEach(image => {
  image.addEventListener('click', () => toggleImage(image));
});

//Imagen cambia con click

function toggleImage(image) {

  const subject = image.getAttribute('data-subject');
  const currentState = image.src.includes('_false');
  if(currentState){//EN EL MOMENTO DE HACER EL CLICK, ESTÁ DESACTIVADO
    image.style.display = 'none';
      image.nextElementSibling.style.display = 'inline-block';
      selectedSubject.push(subject);
      console.log(selectedSubject);
  }else if (!currentState) {//EN EL MOMENTO DE HACER EL CLICK, ESTÁ ACTIVADO
    image.style.display = 'none';
      image.previousElementSibling.style.display = 'inline-block';
      const index = selectedSubject.indexOf(subject);
    if (index !== -1) {
      selectedSubject.splice(index, 1);
      console.log(selectedSubject)
    }
  }
}
if (registerUserForm3) {
  registerUserForm3.addEventListener('click',  function(ev){
    ev.preventDefault();

    const studentData = {
      favoritas: selectedSubject
    };
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (!isLogged) {
          const uid = user.uid;
       await updateUserData(db, uid, studentData);
        isLogged=true;
        }
        location.href = "./register4.html";
      }
    });
  
  
  });
}
//Quitar Nota si hace check a Aprobado
notas_semestres.forEach(function(table) {
  table.addEventListener('click', function(event) {
    const target = event.target;

    if (target.matches('input[type="checkbox"]')) {
      console.log(location.href=='./register2.html');
      const notesInput = target.parentNode.nextElementSibling.querySelector('.nota');
      const approvedCheckbox = target.parentNode.querySelector('.check');

      if (target.checked) {
        notesInput.disabled = true;
        notesInput.value ="";
        approvedCheckbox.checked = true;
      } else {
        notesInput.disabled = false;
        approvedCheckbox.checked = false;
      }
    }
  });
});

//Subir cada nota y aprobado a Firebase
// Initialize an empty object to store the student data
if (registerUserForm2) {
  registerUserForm2.addEventListener("submit",  function(e){
    e.preventDefault();
  const studentData = { semestre:'', notas: {}, aprobado: {} };
  
  notas_semestres.forEach(table => {
    
    // Get all the rows in this table
    const rows = table.querySelectorAll('tbody tr');
  
    // Loop through each row and extract the data
    rows.forEach(row => {
      // Get the subject name from the row's first cell
      const subject = row.querySelector('.materia').textContent;
  
      // Get the grade from the row's notes input field
      const grade = parseFloat(row.querySelector('.nota').value);
  
      // Get the approved status from the row's approved checkbox
      const approved = row.querySelector('.check').checked;
  
      // Add the subject, grade, and approved status to the studentData object
      if(!isNaN(grade)){
        studentData.notas[subject] = grade;
      }
      if (approved) {
        studentData.aprobado[subject] = approved;
      }
      
    });
    studentData.semestre = semestre.value;
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (!isLogged) {
          const uid = user.uid;
       await updateUserData(db, uid, studentData);
        isLogged=true;
        }
        location.href = "./register3.html";
      }
    });
  
  });
  });
}

//REGISTER
if(registerUserForm1 != null){
    registerUserForm1.addEventListener("submit", async(e) =>{
      e.preventDefault();
      const name = registerUserForm1.username.value;
      const repassword = registerUserForm1.repassword.value;
      const email = registerUserForm1.email.value;
      const password = registerUserForm1.password.value;
      if (password===repassword) {
        const newUser = {
            name,
            email,
            password,
          };
      
          
          
          const userRegistered = await registerUser(auth, newUser);
          await addUserToDatabase(db, userRegistered.uid, newUser);
          location.href = "./register2.html";
      }else{
            alert("Las contraseñas no coinciden");
      }
      
  
  
    });
    }
    //LOGIN
    if(loginUserForm != null){
        loginUserForm.addEventListener("submit", e =>{
          e.preventDefault();
          const email = loginUserForm.email.value;
          const password = loginUserForm.password.value;
        
          loginUser(auth, email, password);
          console.log("Entraste");
    
           //GO HOME
          onAuthStateChanged(auth, async (user) =>{
          if(user){
              location.href = "./home.html";
          }
        });
    
        });
      }

      //LOGOUT
      if(logoutLink){
        logoutLink.addEventListener("click", e =>{
          signOut(auth).then(() => {
            location.href = "./index.html"
            console.log("Salimos");
          }).catch((error) => {
            console.log(error);
          });
        });
      }

///AVATARES//
// Agregar un controlador de eventos a cada imagen de avatar
avatars.forEach(avatar => {
  avatar.addEventListener('click', () => {
    console.log('Click en la imagen');

    // Obtener la URL de la imagen seleccionada
    const avatarSrc = avatar.getAttribute('src');

    // Actualizar la imagen seleccionada
    selectedAvatar.setAttribute('src', avatarSrc);
  });
});

//Botón de listo (mandar esa info)
if(okButton){
  okButton.addEventListener('click', () => {
    console.log('Click en Listo')
    // Obtener la URL de la imagen seleccionada
    const selectedAvatarURL = selectedAvatar.getAttribute('src');
    console.log('URL obtenida')
  
    // Guardar la URL en Firestore llamando a la función
    saveImageURL(selectedAvatarURL);
    console.log('URL enviadaaa')
  });
}

//Función para la URL
function saveImageURL(avatarURL) {
  // Creando el objeto a partir de la URL de la imagen
  const studentData = {
    imageURL: avatarURL
  };
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      if (!isLogged) {
        const uid = user.uid;
     await updateUserData(db, uid, studentData);
      isLogged=true;
      }
      location.href = "./home.html";
    }
  });
}