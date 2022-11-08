import React from 'react';
import {getAuth} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { createContext } from 'react';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = () => {
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;