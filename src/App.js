import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      else if (currentPage === 'Contact') {
        return <Contact />;
      }
      else if (currentPage === 'Projects') {
        return <Projects />;
      }
      else if (currentPage === 'Resume') {
        return <Resume />
      }
      else {
        return <About />;
      }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return(
    <div className='App flex-column justify-flex-start'>
        <Header />
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

        <main>
            {renderPage()}
        </main>
        <Footer />
    </div>
  );
};

export default App;