import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

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
    
    const handlePageChange = page => setCurrentPage(page);

    return (
        <div>
            <header>
                <h1 id='name'>Ben Milner</h1>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            {renderPage()}
            <footer>
                <h5 id='footer'>Created By: Ben Milner</h5>
            </footer>
        </div>
    );
};