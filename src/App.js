import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Assessment from './components/Assessment';
import MyLibrary from './components/MyLibrary';
import RoundStatus from './components/RoundStatus';

const App = () => {
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  const links = ['Dashboard', 'Assessment', 'My Library', 'Round Status'];

  const Components = [
    Dashboard,
    Assessment,
    MyLibrary,
    RoundStatus,
  ];

  const handleItemClick = (index) => {
    setSelectedLinkIndex(index);
    setNavOpen(false);
  };

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const Component = Components[selectedLinkIndex];

  return (
    <div className="App">
      <div className={`nav ${navOpen ? 'nav-open' : ''}`}>
        <Nav
          links={links}
          onItemClick={handleItemClick}
          activeLinkIndex={selectedLinkIndex}
          onNavToggle={handleNavToggle}
        />
      </div>
      <div className="content">
        <div className="section">
          <button className="nav-toggle-button" onClick={handleNavToggle}>
            &#9776;
          </button>
          <Component />
        </div>
      </div>
    </div>
  );
};

export default App;
