import React from 'react';
import './StarWars.css';

export default ({ charDetails }) => (
  <>
    <div className="char-details">
      <h3 className="char-name">{charDetails.name}</h3>
      <p className="char-birth-year">Birth Year: {charDetails.birth_year}</p>
      <p className="char-gender">Gender: {charDetails.gender}</p>
      <p className="char-eye-color">Eye Color: {charDetails.eye_color}</p>
    </div>
  </>
);