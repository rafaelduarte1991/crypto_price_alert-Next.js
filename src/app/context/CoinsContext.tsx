'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { iCoin } from '../../pages/api/coins'

interface iNewCoin {
  name: string
  target: number
}
interface iCoinsContextData {
  coins: iCoin[]
  addCoin: (coin: iNewCoin) => void
  removeCoin: (removedCoin: iCoin) => void
  updateCoin: (updatedCoin: iCoin) => void
}
interface iCoinsContextProps {
  children: ReactNode
}

export const CoinsContext = createContext({} as iCoinsContextData)

export function CoinsProvider({ children }: iCoinsContextProps) {
  const [coins, setCoins] = useState([] as iCoin[])
  useEffect(() => {
    setCoins(getCoins())
  }, [])

  function getCoins() {
    const coinsJSON = localStorage.getItem('coins')
    if (coinsJSON) {
      return JSON.parse(coinsJSON).map((coin:any) => {
        return {
          ...coin,
        }
      })
    } else {
      return []
    }
  }

  function updateCoin(updatedCoin: iCoin) {
    const updatedCoins = coins.map((coin) => (coin.id === updatedCoin.id ? updatedCoin : coin))

    setCoins(updatedCoins)
    localStorage.setItem('coins', JSON.stringify(updatedCoins))
  }

  function addCoin(coin: iNewCoin) {
    const id = (coins.sort((a, b) => b.id - a.id)[0]?.id || 0) + 1
    const newCoins = [...coins, { ...coin, id }]
    setCoins(newCoins)
    localStorage.setItem('coins', JSON.stringify(newCoins))
  }

  function removeCoin(removedCoin: iCoin) {
    const newCoins = [...coins].filter((coin) => coin.id !== removedCoin.id)
    setCoins(newCoins)
    localStorage.setItem('coins', JSON.stringify(newCoins))
  }

  return (
    <CoinsContext.Provider
      value={{
        coins,
        addCoin,
        removeCoin,
        updateCoin,
      }}
    >
      {children}
    </CoinsContext.Provider>
  )
}
