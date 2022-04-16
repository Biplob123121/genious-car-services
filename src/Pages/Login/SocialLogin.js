import React from 'react';
import google from '../../images/Social/google.png';
import facebook from '../../images/Social/facebook.png';
import github from '../../images/Social/github.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex'>
                <div style={{height : '1px'}} className='w-50 mt-2'><hr /></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{height : '1px'}} className='w-50 mt-2'><hr /></div>
            </div>
            <div>
                <button className='bg-info rounded border-0 py-2 px-3 mb-3'>
                    <img style={{width: '30px'}} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
            <div>
                <button className='bg-info rounded border-0 py-2 px-3 mb-3'>
                    <img style={{width: '30px'}} src={facebook} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
            <div>
                <button className='bg-info rounded border-0 py-2 px-3 '>
                    <img style={{width: '30px'}} src={github} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;