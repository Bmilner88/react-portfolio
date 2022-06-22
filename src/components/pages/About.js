import React from 'react';

export default function About() {
    return(
        <div>
            <div id='aboutTitle'>
                <h2>About Me</h2>
            </div>
            <div  className='page'>
                <div id='imgContainer'>
                    <img id='img' src={require(`../../images/ben-milner.png`)} alt='' />
                </div>
                <div>
                    <p id='aboutP'>
                        My name is Ben Milner, I have about 4 years of professional experience in IT and have always been fascinated with technology.
                        I am actively working towards finishing a coding Bootcamp to ideally move into a position as a Jr. Full-Stack Developer.

                        In my spare time I enjoy skiing, hiking and playing lots of games. I've been learning how to resin 3D print which definitely keeps my mind active. 
                        I love to travel and am looking forward to one day visiting a country outside of the US.
                    </p>
                </div>
            </div>
        </div>
    );
};