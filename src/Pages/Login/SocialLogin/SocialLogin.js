import React, { useContext } from 'react';
import { FaFacebook , FaGoogle , FaLinkedinIn } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const { googleSignIn} = useContext(AuthContext);


    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(e => console.error(e))
    }
    return (
        <div className='flex justify-center gap-4 mb-6'>
                        <button>
                            <FaFacebook className='h-7 w-7' />
                        </button>
                        <button>
                            <FaLinkedinIn className='h-7 w-7'  />
                        </button>
                        <button onClick={handleGoogleSignIn}>
                            <FaGoogle className='h-7 w-7'  />
                        </button>
                    </div>
    );
};

export default SocialLogin;