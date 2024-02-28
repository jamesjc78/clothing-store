import { useEffect } from 'react'
import {auth, createUserFromAuth, signInWithGooglePopUp, signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils'
import { getRedirectResult } from 'firebase/auth'

const SignIn = () =>{
     useEffect( () =>{
        const redirectAuth = async ()=>{          
            const response  = await getRedirectResult(auth)
            if(response){
                const userRef = await createUserFromAuth(response.user);
                console.log(userRef);
                
            }
        }  

        redirectAuth()
     },[]) 

    const logUser = async() =>{
        const {user} = await signInWithGooglePopUp()
        const userRef = await createUserFromAuth(user);
        console.log(userRef);     
    }
    return (
        <div>
            <button onClick={logUser}>Sign in with Google</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google (Redirect)</button>
        </div>
    )
}

export default SignIn