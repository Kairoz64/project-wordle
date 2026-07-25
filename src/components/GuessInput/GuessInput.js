import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (guess.length !== 5) {
      return;
    }

    console.log(guess);
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        minLength={5}
        maxLength={5}
        pattern="^[a-zA-Z]{5}$"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
