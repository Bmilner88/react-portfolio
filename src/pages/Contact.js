import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

export default function Contact(){
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = e => {
        e.preventDefault();
        if(!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        };
    };

    const handleChange = e => {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            };
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            };
        };
    };

    return(
        <section className='page'>
            <h2 className='contact'>Contact Me</h2>
                <form id='contact-form' onSubmit={handleSubmit}>
                        <div className='input'>
                            <label htmlFor='name'>Name: </label>
                            <br/>
                            <input type='text' name='Name' defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div className='input'>
                            <label htmlFor='email'>Email: </label>
                            <br/>
                            <input type='email' name='Email' defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div className='input'>
                            <label htmlFor='message'>Message:</label>
                            <br/>
                            <textarea name='Message' rows='3' defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div id='error'>
                                <p className='error-text'>{errorMessage}</p>
                            </div>
                        )}

                        <button id='submit' className='btn' data-testid='button' type='submit'>Submit</button>
                </form>
        </section>      
    );
};