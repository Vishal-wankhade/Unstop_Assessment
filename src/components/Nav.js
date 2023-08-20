import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo,faFileLines,faBookAtlas,faGears} from '@fortawesome/free-solid-svg-icons';

function Nav({ links, onItemClick, activeLinkIndex, onNavToggle }) {
  const icons = [faIgloo, faFileLines, faBookAtlas, faGears];

  return (
    <div className="navbar">
      <button className="nav-back-button" onClick={onNavToggle}>
        &lt; Back
      </button>
      {links.map((link, index) => (
        <li key={index} className={index === activeLinkIndex ? 'active' : ''}>
          <a href="#" onClick={() => onItemClick(index)}>
            <FontAwesomeIcon icon={icons[index]} />
            {link}
          </a>
        </li>
      ))}
    </div>
  );
}

export default Nav;
