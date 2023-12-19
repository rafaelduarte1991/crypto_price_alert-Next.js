'use client'
import styles from '@/styles/components/Alert.module.css'
import { iCoin } from '@/app/api/coins/route'
import useSWR, { mutate } from 'swr'
import { useContext, useEffect } from 'react'
import { UpdateContext } from '../context/UpdateContext'
import Coins from './Coins'
import Loading from './Loading'


const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Alert() {
  const { updateDb } = useContext(UpdateContext)

  const { data, error } = useSWR('/api/coins', fetcher)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await fetcher('/api/coins')
        mutate('/api/coins', newData, false)
      } catch (error) {
        console.log("Error in the data processing from form", error)
      }
    }
    fetchData()
  }, [updateDb])

  if (error) return <div>Failed to load</div>
  if (!data) return <Loading/>


  return (
    <div className={styles.alert}>
      <h3 className={styles.title}>Active Alerts</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Current Price</th>
            <th>Target Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data && (data.coins as iCoin[])?.map((item: iCoin, index:number) => (
            <Coins key={index} id={item._id} name={item.name} target={item.target}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}
