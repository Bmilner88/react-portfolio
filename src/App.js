import React from 'react';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <div>
          <Portfolio />
        </div>
      </main>
    </div>
  );
};

export default App;
