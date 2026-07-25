import React from 'react';

function GuessInput({ addGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (tentativeGuess.length !== 5) {
      return;
    }

    addGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== 'playing'}
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
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
