'use client'
import { useState, useContext } from 'react';
import { CoinsContext } from '@/app/context/CoinsContext';
import styles from '../styles/components/Form.module.css'
import CoinPrice from './CoinPrice';
import { iCoin } from '@/pages/api/coins';

export default function Alert() {
  const { coins, addCoin, updateCoin } = useContext(CoinsContext)
  const [coinName, setCoinName] = useState('');
  const [target, setTarget] = useState('');

  function save() {
    const tempCoin = {
      name: coinName.toUpperCase(),
      target: parseFloat(target.replace(',', '.')),
    };

    addCoin(tempCoin);
    setCoinName('');
    setTarget('');
  }


  return (
    <div className={styles.form}>
      <h1 className={styles.formTitle}>Crypto Alert</h1>
      <div className={styles.inputDiv}>
        <input
          type="text"
          placeholder="Coin"
          value={coinName}
          onChange={(e) => setCoinName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Target Price"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <button className={styles.alertBtn} style={{backgroundColor:'#515151'}} type="submit" onClick={save}>
          Save Alert
        </button>
      </div>
    </div>
  );
}

