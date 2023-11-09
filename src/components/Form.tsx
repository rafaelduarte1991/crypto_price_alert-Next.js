'use client'

import { useState } from 'react';

export default function Alert() {
  const [coin, setCoin] = useState('');
  const [target, setTarget] = useState('');

  function save() {

    //update db
    const data = {
      coin:coin,
      target:target
    }
    localStorage.setItem('data', JSON.stringify(data))


    console.log('Coin:', coin);
    console.log('Target Price:', target);

    // Limpa os campos do formulário
    setCoin('');
    setTarget('');
  }

  return (
    <div>
      <h1>Crypto Alert</h1>
      <input
        type="text"
        id="coin"
        placeholder="Coin"
        value={coin}
        onChange={(e) => setCoin(e.target.value)}
      />
      <input
        type="text"
        id="target"
        placeholder="Target Price"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
      <button type="submit" onClick={save}>
        Save Alert
      </button>
      <p id="price"></p>
    </div>
  );
}

