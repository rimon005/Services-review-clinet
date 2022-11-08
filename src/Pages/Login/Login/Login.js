import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../assets/istockphoto-1281150061-612x612.jpg'
import './Login.css'

const Login = () => {
    return (
        <div className="hero w-full mb-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left mr-14">
                    <img className='w-4/5' src={loginImg} alt="" />
                </div>
                <form className="card login-card p-6 flex-shrink-0 w-full max-w-sm rounded-none bg-base-100">
                    <h1 className="text-3xl text-center mt-2 font-bold">Login now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="email" name='email' required className="input rounded-none input-field" />
                        </div>
                        <div className="form-control">
                            
                            <input type="text" placeholder="password" name='password' required className="input input-field rounded-none" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6 mb-0">
                            <input className="btn login-btn text-white" type="submit" value="Login" />
                        </div>
                    </div>
                    <p className='text-gray-400 font-medium text-xl text-center mb-4'>Or Sign In with</p>
            
                    <p className='text-gray-400 font-medium text-center mb-4'>Don't Have an account? <Link to='/register' className='sign font-medium'>Register</Link></p>
                </form>

            </div>
        </div>
    );
};

export default Login;