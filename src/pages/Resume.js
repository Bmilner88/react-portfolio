import React from 'react';
import pdf from '../pdf/resume.pdf';

export default function Resume() {
    return(
        <div className='page'>
            <h2 className='resume'>Resume</h2>
            <div id='resumeContainer'>
                <a id='resume' href={pdf} target='_blank' rel='noreferrer'>
                    <h5>Download PDF</h5>
                </a>
            </div>
                <ul className='proficiencies'>
                    <h3>Proficiencies:</h3>
                    <li><h5>HTML</h5></li>
                    <li><h5>CSS</h5></li>
                    <li><h5>JavaScript</h5></li>
                    <li><h5>Node.js</h5></li>
                    <li><h5>Express.js</h5></li>
                    <li><h5>React.js</h5></li>
                    <li><h5>SQL, NoSQL</h5></li>
                    <li><h5>MERN Stack</h5></li>
                    <li><h5>OOP</h5></li>
                    <li><h5>REST</h5></li>
                    <li><h5>APIs</h5></li>
                    <li><h5>MongoDB</h5></li>
                    <li><h5>jQuery</h5></li>
                    <li><h5>Bootstrap</h5></li>
                </ul>
        </div>
    );
};