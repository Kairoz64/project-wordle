import React from 'react';
import { range } from '../../utils';

function Guess({ value = [] }) {
  return (
    <div className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {value[num]}
        </span>
      ))}
    </div>
  );
}

export default Guess;
