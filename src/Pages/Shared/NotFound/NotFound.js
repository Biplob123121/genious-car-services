import React from 'react';
import sleepy from '../../../images/sleeping.jpg';

const NotFound = () => {
    return (    
        <div>
            <h1 className='text-primary text-center mt-5'>404</h1>
            <h2 className='text-primary text-center'> Mechanic is Sleeping....</h2>
            <img className='w-100' src={sleepy} alt="" />
        </div>
    );
};

export default NotFound; 