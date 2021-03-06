import React, { useEffect, useState } from 'react';
import handleFirebaseError from '../../../Firebase/handleFirebaseError';
import passwordValidator from '../../../Firebase/password-validator';
import useUserContext from '../../../hooks/useUserContext';

const SignUp = () => {
    const { emailSignUp, error, setError } = useUserContext();

    useEffect(() => setError(null), [setError]); // clear previous errors

    // set all inputs in a state
    const [inputs, setInputs] = useState({
        name: '', email: '', password: ''
    })
    // handle form inputs
    const handleInput = (event) => {
        const newInputs = { ...inputs };
        newInputs[event.target.name] = event.target.value;
        setInputs(newInputs);
    }
    // handle form submition
    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, password } = inputs;
        passwordValidator(password) ? emailSignUp(name, email, password) : setError({ message: "weak password" })
    }

    return (
        <>
            <form className="text-center" onSubmit={handleSubmit} >
                <div className="form-heading fw-bold">
                    <i className="fas fa-user-plus"></i> <br />
                    <span className="fs-2 gradient-text">Create Account</span>
                </div>
                <div className="form-input-wrapper">
                    <input type="text" name="name" id="nameInput" placeholder="Name" onChange={handleInput} required />
                    <label>Name</label>
                </div>
                <div className="form-input-wrapper">
                    <input type="email" name="email" id="emailInput" placeholder="Email" onChange={handleInput} required />
                    <label>Email</label>
                </div>
                <div className="form-input-wrapper">
                    <input type="password" name="password" id="passwordInput" placeholder="Password" onChange={handleInput} required />
                    <label>Password</label>
                </div>
                <div className="mt-4 mb-3" style={{ color: 'red' }}>
                    {error && handleFirebaseError(error)}
                </div>
                <input type="submit" className="submit-button btn text-white fs-5 px-4" value="Sign Up" />
            </form>
        </>
    );
};

export default SignUp;