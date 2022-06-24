import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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

    <div>
        <Header />
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

        <main>
            {renderPage()}
        </main>

        <Footer />
    </div>
};

export default App;