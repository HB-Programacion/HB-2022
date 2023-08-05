import { setDoc, doc } from "firebase/firestore"

import { db } from "./firebase.config"

export const uploadDocToFirebase = async (id, data) => {
   console.log('id', id)
   console.log('data', data)
   if( id && data ){
      try{
         const docRef = await setDoc(doc(db, "userContact", id), data);
         return docRef;
      } catch (e) {
         console.log("Error al agregar documento", e.message)
      }
   }
}