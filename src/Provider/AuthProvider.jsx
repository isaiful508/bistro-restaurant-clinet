import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from './../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

import useAxiosPublic from './../hooks/useAxiosPublic';



export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();
   
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        if (auth.currentUser) {
            return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            });
        }
        return Promise.reject("No user is currently logged in");
    };




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('----->', currentUser);
            if(currentUser){
                //get token and store client
                const userInfo = {email : currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false);

                    }
                })

            }else{
                //TODO : remov token if token stored in client side
                localStorage.removeItem('access-token');
                setLoading(false);
                
            }
           
        })

        return () => {
            return unsubscribe();

        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        googleSignIn,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
