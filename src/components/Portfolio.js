import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
      }
      if (currentPage === 'Resume') {
        return <Resume />
      }
  };

  const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div className='App'>
            <header className='App-header'>
                <h1 id='name'>Ben Milner - Professional Portfolio</h1>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            
            {renderPage()}

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