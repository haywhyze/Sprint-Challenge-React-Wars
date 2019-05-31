import React from 'react';

import './StarWars.css';

export default ({ charDetails }) => (
  <>
    <div>
      <h3>{charDetails.name}</h3>
      <p>Birth Year: {charDetails.birth_year}</p>
      <p>Gender: {charDetails.gender}</p>
      <p>Eye Color: {charDetails.eye_color}</p>
    </div>
  </>
);