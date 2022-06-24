import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

export default function Contact(){
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');
    //const { name, email, message } = formState;

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
            <h2 data-testid='h1tag'>Contact Me</h2>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div className='card m-3'>
                    <div className='card-body'>
                        test
                    </div>
                </div>

                
            {/* <div className='card-body'>
                        <div className='input'>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div className='input'>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div className='input'>
                            <label htmlFor='name'>Name:</label>
                            <textarea name='message' rows='3' defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div id='error'>
                                <p className='error-text'>{errorMessage}</p>
                            </div>
                        )}

                        <button id='submit' data-testid='button' type='submit'>Submit</button>
                    </div> */}
            </form>
        </section>      
    );
};