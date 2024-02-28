
import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCcM8aeg1Jh4bFm5thU44VZ-EMFan3WcGU",
  authDomain: "clothing-store-db-a680a.firebaseapp.com",
  projectId: "clothing-store-db-a680a",
  storageBucket: "clothing-store-db-a680a.appspot.com",
  messagingSenderId: "890017853624",
  appId: "1:890017853624:web:ccb50f326d01f8ed64044d"
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt:"select_account"
})

export const auth =  getAuth()
export const db = getFirestore()

export const signInWithGooglePopUp =  () => signInWithPopup(auth,provider)
export const signInWithGoogleRedirect =  () => signInWithRedirect(auth,provider)

export const createUserFromAuth = async (user:any) => {
    const userRef = doc(db,'users',user.uid)
     const userSnap = await getDoc(userRef)
     if(!userSnap.exists()){
        const {displayName, email} = user
        const createdAt = new Date()

        try{
            await setDoc(userRef,{
                displayName,
                email,
                createdAt
            })
        }catch(error){
            console.log(error);
            
        }
     }
     return userRef
}

