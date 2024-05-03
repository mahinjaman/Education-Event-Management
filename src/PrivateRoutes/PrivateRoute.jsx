import React, { useContext } from 'react';

import { UserContext } from '../UserProvider/UserProvider';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Triangle } from 'react-loader-spinner';
const PrivateRoute = ({children}) => {
    const { user , loading } = useContext(UserContext);
    
    if(loading){
        return <div className='h-screen flex items-center justify-center'>
            <Triangle
                visible={true}
                height="250"
                width="250"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            /></div>
    }

    if(user){
        return children;
        
    }

    return <Navigate to={'/signin'}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoute;
