import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
import toast from 'react-hot-toast';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    //register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login with Google
    const handleLogInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //Login with email and password
    const handleLogInEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //LogOut
    const handleLogOut = () => {
        toast.success('You have Successfully LogOut!');
        return signOut(auth);
    }

    //all observation field
    useEffect(() => {
        const unsbucribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
            else {
                setUser(currentUser);
            }
            setLoading(false);
        })

        return () => {
            unsbucribe();
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        handleLogInWithGoogle,
        handleLogInEmail,
        handleLogOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
