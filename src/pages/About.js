import React from 'react';

export default function About() {
    return(
        <div className='page'>
            <div className='about'>
                <h2>About Me</h2>
            </div>
            <div  className='aboutPage'>
                <div id='imgContainer'>
                    <img id='img' src={require('../images/ben-milner.png')} alt='Ben Milner' />
                </div>
                <div>
                    <p id='aboutP'>
                        I am seeking employment in the field of Web Development. I am well qualified for this position,
                        having recently completed a Full-Stack Web Development Boot Camp through the University of Utah in addition to my professional and personal experience.
                        I am a fast learner, a reliable employee, and I work well with others both as part of a team and in assisting clients and fellow employees. 
                        <br/>
                        <br/>
                        My name is Ben Milner, I have about 4 years of professional experience in IT and have always been fascinated with technology.
                        I am actively working towards finishing a coding Bootcamp to ideally move into a position as a Jr. Full-Stack Developer.
                        <br/>
                        <br/>
                        In my spare time I enjoy skiing, hiking and playing lots of games. I've been learning how to resin 3D print which definitely keeps my mind active. 
                        I love to travel and am looking forward to one day visiting a country outside of the US.
                    </p>
                </div>
            </div>
        </div>
    );
};