import React from 'react';
import moment from 'moment';
const Copyright = () => {
    return (
        <div className='bg-base-300 text-md text-center py-8'>
            <h1>Copyright © {moment().format('y')} <span className='font-semibold text-emerald-600'>FITNESS</span> || All Rights Reserved</h1>
        </div>
    );
};

export default Copyright;