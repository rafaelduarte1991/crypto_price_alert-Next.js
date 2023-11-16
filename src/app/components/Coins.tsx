// 'use client'
import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/components/Coins.module.css'
import useSWR from 'swr'
import RemoveBtn from './RemoveBtn'


interface iProps {
  id: string
  name:string
  target: number
}

const Coins: React.FC<iProps> = (props) => {
  const coinDataDiv = useRef<HTMLTableRowElement | null>(null)
  const [hasPassedTarget, setHasPassedTarget] = useState(false)

  const { data: coinData, error } = useSWR(
    `https://api.coinbase.com/v2/prices/${props.name}-USD/sell`,
    async (url) => {
      const response = await fetch(url)
      const data = await response.json()
      return parseFloat(data.data.amount).toFixed(2)
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 3000,
    }
  )

  useEffect(() => {
    if (!error && coinData) {
      const coinPrice = parseFloat(coinData)
      if (coinPrice > props.target) {
        setHasPassedTarget(true)
        // alert('Value has passed the target!')
      } else {
        setHasPassedTarget(false)
      }
    }
  }, [coinData, error, hasPassedTarget, props.target])

  return (
    <tr key={props.id} ref={coinDataDiv} className={hasPassedTarget ? styles.blinkRow : styles.notActive}>
      <td>
        {props.name} - USD
      </td>
      <td>
        {coinData}
      </td>
      <td>
        {(props.target)}
      </td>
      <td>
        <RemoveBtn id={props.id} />
      </td>
    </tr>
  )
}

export default Coins


