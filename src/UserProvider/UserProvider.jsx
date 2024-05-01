import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HelmetProvider } from 'react-helmet-async';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Auth from '../Firebase/Firebase.config';
export const UserContext = createContext(null)
const UserProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [addCard, setAddToCard ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [currentUser, setCurrentUser ] = useState(null)
    const addToCard = newCard =>{
        if (addCard.includes(newCard)){
            alert('This card has been already added');
            return;
        }
        const newAllCard = [...addCard, newCard ];
        setAddToCard(newAllCard);
    }

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

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(Auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[]);
    const handleAddCurrentUser = user => {
        setLoading(true);
        setCurrentUser(user);
    }

    const info = {
        SignUp,
        SignInUser,
        SignOutUser,
        loading,
        addToCard,
        handleAddCurrentUser,
        addCard,
        user,
        currentUser
    }
    
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