'use client'
import { useContext, useState } from 'react'
import styles from '@/styles/components/Form.module.css'
import { UpdateContext } from '../context/UpdateContext'

export default function Form() {
  const [coinName, setCoinName] = useState('')
  const [coinTarget, setCoinTarget] = useState('')
  const { triggerUpdate  } = useContext(UpdateContext)

   const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!coinName || !coinTarget) {
      alert("Coin and target are required")
      return
    }

    try {
      const name = coinName.toUpperCase()
      const target = parseFloat(coinTarget.replace(',', '.'))
      const response = await fetch(`https://api.coinbase.com/v2/prices/${name}-USD/sell`)
      const {error} = await response.json()
      if(!error) {
        const res = await fetch('/api/coins', {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({ name, target }),
        })

        if (res.ok) {
          triggerUpdate()
          setCoinName('')
          setCoinTarget('')
        }
      } else {
        alert("Coin not found!")
        setCoinName('')
        setCoinTarget('')
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
            placeholder="Coin (Ticker)"
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
  )
}

