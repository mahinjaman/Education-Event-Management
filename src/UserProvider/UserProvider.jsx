import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HelmetProvider } from 'react-helmet-async';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import Auth from '../Firebase/Firebase.config';
export const UserContext = createContext(null)
const UserProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [addCard, setAddToCard ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [currentUser, setCurrentUser ] = useState(null);
    const addToCard = newCard =>{
        if (addCard.includes(newCard)){
            alert('This card has been already added');
            return
        }
        if(!currentUser){
            alert('Please sign in first');
            return ;
        }
        const newAllCard = [...addCard, newCard ];
        setAddToCard(newAllCard);
    }
    console.log(addCard);
    const SignUp = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(Auth,email, password)
    }

    const SignInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password)

    }

    const SignOutUser= () =>{
        setLoading(true);
        return signOut(Auth)
    }

    
    const handleAddCurrentUser = user => {
        setLoading(true);
        setCurrentUser(user);
    }

    const googleProvider = new GoogleAuthProvider()
    const SingInGoogle = () =>{
        setLoading(true);
        return signInWithPopup(Auth, googleProvider)
    }

    const gitHubProvider = new GithubAuthProvider();
    const signInGitHub = ()=>{
        setLoading(true);
        return signInWithPopup(Auth, gitHubProvider)
    } 

    const facebookProvider = new FacebookAuthProvider();
    const signInFacebook = () =>{
        setLoading(true);
        return signInWithPopup(Auth, facebookProvider)
    }

    const resetPassword = (email) =>{
        setLoading(true);
        return sendPasswordResetEmail(Auth, email)
    }

    const info = {
        SignUp,
        SingInGoogle,
        SignInUser,
        signInGitHub,
        SignOutUser,
        loading,
        addToCard,
        handleAddCurrentUser,
        signInFacebook,
        resetPassword,
        addCard,
        user,
        currentUser
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, []);

    return (
        <HelmetProvider>
            <UserContext.Provider value={info}>
                {children}
            </UserContext.Provider>
        </HelmetProvider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default UserProvider;