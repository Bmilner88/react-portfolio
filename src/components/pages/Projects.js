import React from 'react';

export default function Projects() {
    return(
        <div className='page'>
            <h2>Projects</h2>
            <div id='column1'>
                <div className='card'> 
                    <a href="https://quiet-tundra-30236.herokuapp.com/" target='_blank' rel='noreferrer'><h4 className='projectTitle'>Budgetek</h4>
                        <img id='budgetek' src={require(`../../images/budgetek.png`)} alt='Budgetek'/></a>
                    <a className="viewGithub" href='https://github.com/dsamuelson/Budgetek'>View on GitHub</a> 
                </div>
                <div className='card'> 
                    <a href="https://BlinkingHeimdall.github.io/show-pro/" target='_blank' rel='noreferrer'><h4 className='projectTitle'>ShowPro</h4>
                        <img id='showpro' src={require(`../../images/showpro.png`)} alt='ShowPro'/></a>
                    <a className="viewGithub" href='https://github.com/BlinkingHeimdall/show-pro'>View on GitHub</a> 
                </div>
                <div className='card'> 
                    <a href="https://bmilner88.github.io/sfcc-cg-xml-gen/" target='_blank' rel='noreferrer'><h4 className='projectTitle'>SFCC Customer Group XML Gen</h4>
                        <img id='sfcc-xml' src={require(`../../images/sfcc-xml.png`)} alt='SFCC Customer Group XML Gen'/></a>
                    <a className="viewGithub" href='https://github.com/Bmilner88/sfcc-cg-xml-gen'>View on GitHub</a> 
                </div>
                <div className='card'> 
                    <a href="https://bmilner88.github.io/c6-weather-dashboard/" target='_blank' rel='noreferrer'><h4 className='projectTitle'>Weather Dashboard</h4>
                        <img id='weather-dashboard' src={require(`../../images/weather-dashboard.png`)} alt='Weather Dashboard'/></a>
                    <a className="viewGithub" href='https://github.com/Bmilner88/c6-weather-dashboard'>View on GitHub</a> 
                </div>
                <div className='card'> 
                    <a href="https://bmilner88.github.io/c4-code-quiz/" target='_blank' rel='noreferrer'><h4 className='projectTitle'>Code Quiz</h4>
                        <img id='code=quiz' src={require(`../../images/code-quiz.png`)} alt='Code Quiz'/></a>
                    <a className="viewGithub" href='https://github.com/Bmilner88/c4-code-quiz'>View on GitHub</a> 
                </div>
                <div className='card'> 
                    <a href="https://bmilner88.github.io/c3-password-generator/" target='_blank' rel='noreferrer'><h4 className='projectTitle'>Password Generator</h4>
                        <img id='password-generator' src={require(`../../images/password-generator.png`)} alt='Password Generator'/></a>
                    <a className="viewGithub" href='https://github.com/Bmilner88/c3-password-generator'>View on GitHub</a> 
                </div>
            </div>
        </div>
    );
};