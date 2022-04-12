import React from 'react';
import './style.css';

export default function App() {
  const handleVowels = (e) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.indexOf(e.key.toLowerCase()) !== -1) {
      e.preventDefault();
    }
    console.log(e.key);
  };
  return (
    <div>
      <h2>Class 8 - How to use Custom Events in React</h2>
      <h3>This input doesn't receive vowels</h3>
      <label>Search: </label>
      <input onKeyDown={handleVowels} />
    </div>
  );
}
