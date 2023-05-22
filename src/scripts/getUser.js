import { db } from "./appFB";
import { doc, getDoc,setDoc } from "firebase/firestore";

async function getUser(id){
    const docRef = doc(db, "users", id);
    try {
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        return data;
    } catch (error) {
        console.log(error);
    }
    }

async function updateUserData(db, uid, userData) {
        try {
          const userRef = doc(db, "users", uid);
          await setDoc(userRef, userData, { merge: true });
          console.log("User data updated successfully!");
        } catch (error) {
          console.log(error);
        }
      }

export {
    getUser,
    updateUserData
}