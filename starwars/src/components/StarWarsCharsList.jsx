import React from 'react';
import StarWarsChar from './StarWarsChar';
import './StarWars.css';

export default ({ starWarsChars }) => (
  <div className="star-wars-container">
    <ul>
      {
        starWarsChars.map(starWarsChar => (
          <li 
            key={starWarsChar.url}
          >
            <StarWarsChar charDetails={starWarsChar} />
          </li>
        ))
      }
    </ul>
  </div>
)