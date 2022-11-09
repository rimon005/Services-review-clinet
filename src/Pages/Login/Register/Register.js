import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../assets/istockphoto-1281150061-612x612.jpg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email , password)
        .then(result => {
            const user = result.user;
            console.log(user);
            const currentUser = {
                email : user?.email
            }
            

            fetch('http://localhost:5000/jwt' , {
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then( data => {
                console.log(data);
                localStorage.setItem("review-token" , data.token);
                navigate(from , {replace : true})
            })
        })
        .catch(e => console.error(e))

    }

    return (
        <div className="hero w-full mb-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left mr-14">
                    <img className='w-4/5' src={loginImg} alt="" />
                </div>
                <form onSubmit={handleCreateUser} className="card login-card p-6 flex-shrink-0 w-full max-w-sm rounded-none bg-base-100">
                    <h1 className="text-3xl text-center mt-2 font-bold">Register Please!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="name" name='name' required className="input rounded-none input-field" />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="email" name='email' required className="input rounded-none input-field" />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="password" name='password' required className="input input-field rounded-none" />
                        </div>
                        <div className="form-control mt-6 mb-0">
                            <input className="btn login-btn text-white" type="submit" value="Login" />
                        </div>
                    </div>
                    <p className='text-gray-400 font-medium text-xl text-center mb-4'>Or Sign In with</p>
                        <SocialLogin />
                    <p className='text-gray-400 font-medium text-center mb-4'>Already have an account? <Link to='/login' className='sign font-medium'>Login</Link></p>
                </form>

            </div>
        </div>
    );
};

export default Register;