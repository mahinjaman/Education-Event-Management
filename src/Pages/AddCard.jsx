import React, { useContext } from 'react';
import { UserContext } from '../UserProvider/UserProvider';

const AddCard = () => {
    const { addCard } = useContext(UserContext);
    console.log(addCard);
    return (
        <div>
            <h1>card:- {addCard.length}</h1>
        </div>
    );
};

export default AddCard;