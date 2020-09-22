import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

const Login = () => {
    const history = useHistory();
    // useState hook, react variable stored in the state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault(); // this stops the refresh!!!
        // login logic
        // 'signInWithEmailAndPassword' function that's built into firebase
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, redirect to homepage
                history.push('/');
            })
            .catch((error) => alert(error.message));
    };
    const register = (e) => {
        e.preventDefault(); // this stops the refresh!!!
        // register logic
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // created a user and logged in, redirect to homepage
                history.push('/');
            })
            .catch((error) => alert(error.message));
    };
    // In Firebase Console -> Authentication -> 'Sign-in method' tab -> Email/Password -> Enable -> Save
    return (
        <div className="login">
            {/* <h1>Login page</h1> */}
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button onClick={login} type="submit" className="login__signInButton">
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our
                    Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
};

export default Login;
