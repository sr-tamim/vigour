import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import useUserContext from '../../hooks/useUserContext';
import "./AuthenticationPages.css";
import Login from './LoginPage/Login';
import SignUp from './SignUpPage/SignUp';

const AuthenticationPages = () => {
    const { user, googleLogin, githubLogin } = useUserContext();
    return (
        <section className="container text-center">
            {user ? <Redirect to="/profile" /> :
                <Router>
                    <Switch>
                        <Route path="/login">
                            <Login />
                            <p className="my-5">
                                Don't have any account? <NavLink to="/signup" style={{ color: '#f7565e' }}>Create Account</NavLink>
                            </p>
                        </Route>
                        <Route path="/signup">
                            <SignUp />
                            <p className="my-5">
                                Already have an account? <NavLink to="/login" style={{ color: '#f7565e' }}>Login</NavLink>
                            </p>
                        </Route>
                    </Switch>
                    <p>Sign in with</p>
                    <span className='sign-in-buttons fs-1 p-0 m-4 mt-0' onClick={googleLogin} >
                        <i className="fab fa-google"></i>
                    </span>
                    <span className='sign-in-buttons fs-1 p-0 m-4 mt-0' onClick={githubLogin} >
                        <i className="fab fa-github"></i>
                    </span>
                </Router>
            }
        </section>
    );
};

export default AuthenticationPages;