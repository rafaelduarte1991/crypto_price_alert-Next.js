'use client'
import { useState } from 'react';
import styles from '@/styles/components/Form.module.css'
import { useRouter } from 'next/navigation';

export default function Alert() {
  const [coinName, setCoinName] = useState('');
  const [coinTarget, setCoinTarget] = useState('');
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if(!coinName || !coinTarget) {
      alert("Coin and target are required")
    return
    }
    try {
      const name= coinName.toUpperCase()
      const target = parseFloat(coinTarget.replace(',', '.'))
      const res = await fetch('/api/coins', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({name, target}),
      })
      if(res.ok) {
        router.push("/")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.form}>
      <h1 className={styles.formTitle}>Crypto Alert</h1>
      <form className={styles.inputDiv} onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Coin"
            value={coinName}
            onChange={(e) => setCoinName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Target Price"
            value={coinTarget}
            onChange={(e) => setCoinTarget(e.target.value)}
          />
          <button type="submit" className={styles.alertBtn} style={{backgroundColor:'#515151'}}>
            Save Alert
          </button>
      </form>
    </div>
  );
}

