import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const Authprovider = ({ children }) => {

    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    // Google LogIn

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            setLoading(false)
            // console.log('user observing');
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        createUser,
        updateUser,
        signIn,
        logOut,
        googleLogIn,
        loading,
        user

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;