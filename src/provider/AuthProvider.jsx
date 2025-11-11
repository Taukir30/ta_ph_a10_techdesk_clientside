import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //google login provider
    const googleProvider = new GoogleAuthProvider();

    //log in function
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //log out function
    const logOut = () => {
        return signOut(auth);
    }

    //google login function
    const googleLogin = () => {
        // setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //register function
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (user, userProfile) => {

        return updateProfile(user, userProfile);
    }

    //user observer
    useEffect(() => {
        //mount
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        //unmount
        return () => unsubscribe();
    }, [])


    //value prop declaring
    const authInfo = {
        googleLogin,
        logOut,
        user,
        loading,
        createUser,
        updateUser,
        setUser,
        logInUser,

    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;