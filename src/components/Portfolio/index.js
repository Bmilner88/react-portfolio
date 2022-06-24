import React, { useState } from 'react';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Projects from '../../pages/Projects';
import Resume from '../../pages/Resume';

export default function Portfolio() {
  
    return (
        <div className='App'>
            
            
            

            <footer>
                <h5>Created By: Ben Milner</h5>
                <ul id='contactList'>
                    <li className='listEl'><a href='https://www.linkedin.com/in/ben-milner-b20171142/' target='_blank' rel='noreferrer'>LinkedIn Profile</a></li>
                    <li className='listEl'><a href='https://github.com/Bmilner88' target='_blank' rel='noreferrer'>GitHub Profile</a></li>
                    <li className='listEl'><a href='https://stackoverflow.com/users/19388818/ben-milner' target='_blank' rel='noreferrer'>StackOverflow Profile</a></li>
                </ul>
            </footer>
        </div>
    );
};