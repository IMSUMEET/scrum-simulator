import { auth } from "../services/firebase";
import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged, FacebookAuthProvider } from "firebase/auth";



const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    // all logic goes here

    const [user, setUser] = useState();
    console.log(user);
    const googleSignIn = () => {
        try {
            const provider = new GoogleAuthProvider();
            // signInWithPopup(auth, provider); // for singin with pop up window 
            signInWithRedirect(auth, provider);
        } catch (error) {
            console.log(error);
        }
    };

    const facebookSignIn = () => {
        const provider = new FacebookAuthProvider();
        signInWithRedirect(auth, provider);
    };

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser ? currentUser : null);
        });


        return () => {
            unsubscribe();
        }
    }, []);

    

    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, user, facebookSignIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => { return useContext(AuthContext) }