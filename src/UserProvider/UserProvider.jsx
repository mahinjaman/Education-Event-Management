import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { HelmetProvider } from 'react-helmet-async';
export const UserContext = createContext(null)
const UserProvider = ({children}) => {
    const [addToCard, setAddToCard ] = useState([]);
    const addCard = newCard =>{
        if (addToCard.includes(newCard)){
            alert('This card has been already added');
            return;
        }
        const newAllCard = [...addToCard, newCard ];
        setAddToCard(newAllCard);
    }
    const info = {
        addCard,
        addToCard,

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