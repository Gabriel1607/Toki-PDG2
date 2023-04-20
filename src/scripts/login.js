import { db, auth } from "./app";
import { loginUser, registerUser, addUserToDatabase, onAuthStateChanged } from "../functions/auth";
import { getUser } from "./getUser";
import { signOut } from "firebase/auth";

const registerUserForm = document.getElementById("registerUserForm");
const loginUserForm = document.getElementById("loginUserForm");

if(registerUserForm != null){
    registerUserForm.addEventListener("submit", async (e) =>{
      e.preventDefault();
      const name = registerUserForm.username.value;
      const repassword = registerUserForm.repassword.value;
      const email = registerUserForm.email.value;
      const password = registerUserForm.password.value;
      if (password===repassword) {
        const newUser = {
            name,
            email,
            password,
          };
      
          
          
          const userRegistered = await registerUser(auth, newUser);
          await addUserToDatabase(db, userRegistered.uid, newUser);
      }else{
            console.log("Las contraseñas no coinciden");
      }
      
  
  
    });
    }
    if(loginUserForm != null){
        loginUserForm.addEventListener("submit", e =>{
          e.preventDefault();
          const email = loginUserForm.email.value;
          const password = loginUserForm.password.value;
        
          loginUser(auth, email, password);
          console.log("Entraste");
    
           //Change according to admin status
          onAuthStateChanged(auth, async (user) =>{
          if(user){
            const uid = user.uid;
            let userLogged = [];
            const firebaseUser = await getUser(uid);
            userLogged = firebaseUser;
              location.href = "./home.html";
            
          }
        });
    
        });
      }

    