import React from 'react';

export default function Nav({ currentPage, handlePageChange }) {
    return(
        <nav className='nav nav-tabs'>
            <div className='nav-item'>
                <a 
                    href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </div>
            <div className='nav-item'>
                <a 
                    href='#projects'
                    onClick={() => handlePageChange('Projects')}
                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </div>
            <div className='nav-item'>
                <a 
                    href='#resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </div>
            <div className='nav-item'>
                <a 
                    href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </div>
        </nav>
    );
};