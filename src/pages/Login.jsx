import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import './Login.css'

function Login(props) {
    const {signInWithGoogle, history} = props;

    function handleGoogleLogin() {
        const googleLoginRespone = signInWithGoogle();
        googleLoginRespone.then(() => {
            history.push('/');
        });
    }

    return(
        <div className="login-page">
            <Link to='/'>
                <img src={Logo} alt="logo" className="mb-5"/>
            </Link>

            <h1 className="h2">Login</h1>
            <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

            <button
                className="btn btn-outline-dark d-flex align-items-center"
                onClick={() => handleGoogleLogin()}
            >
                <Google className="w-50 mr-3"/>
                <span className="text-nowrap">Loghează-te cu Google</span>
            </button>
        </div>
    );
}

export default Login;