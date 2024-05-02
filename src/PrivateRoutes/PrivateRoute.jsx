import React, { useContext } from 'react';

import { UserContext } from '../UserProvider/UserProvider';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Triangle } from 'react-loader-spinner';
const PrivateRoute = ({children}) => {
    const { currentUser , loading } = useContext(UserContext);
    
    if(loading){
        return <>
            render(<Triangle
                visible={true}
                height="500"
                width="500"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />)</>
    }

    if(currentUser){
        return children;
    }

    return <Navigate to={'/signin'}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoute;


// import React, { useContext } from 'react';
// import { UserContext } from '../UserProvider/UserProvider';
// import { Navigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

// const PrivateRoute = ({ children }) => {
//     const { currentUser, loading } = useContext(UserContext);

//     if (loading) {
//         return <span className="loading loading-dots loading-xs"></span>;
//     }

//     if (currentUser) {
//         return children; // Render the children directly
//     }

//     return <Navigate to={'/signin'} />;
// };

// PrivateRoute.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export default PrivateRoute;