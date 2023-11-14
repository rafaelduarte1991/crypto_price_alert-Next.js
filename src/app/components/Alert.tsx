'use client'
import styles from '@/styles/components/Alert.module.css'
import CoinPrice from './CoinPrice'
import {HiOutlineTrash, HiPencilAlt} from 'react-icons/hi'
import { iCoin } from '@/app/api/coins/route'
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import RemoveBtn from './RemoveBtn'
import { useRouter } from 'next/navigation'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Alert() {
  // const router = useRouter()
  // const [editedName, setEditedName] = useState('');
  // const [editedTarget, setEditedTarget] = useState('');
  // const [isEditing, setIsEditing] = useState(false);

  const { data, error } = useSWR('/api/coins', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>



  // const handleSubmit = async (e: any) => {
  //   e.preventDefault()
  //   try {
  //     const name = editedName.toUpperCase()
  //     const target = parseFloat(editedTarget.replace(',', '.'))
  //     const res = await fetch(`/api/coins/${updtCoin}`, {
  //       method: 'PUT',
  //       headers: {
  //         "Content-type": "application/json"
  //       },
  //       body: JSON.stringify({name, target}),
  //     })
  //     if(res.ok) {
  //       router.refresh()
  //     } else {
  //       throw new Error("Failed to updat coin")
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

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
          {data && (data.coins as iCoin[])?.map((item: iCoin) => (
            <tr key={item._id}>
              <td>
                {item.name} - USD
              </td>
              <td>
                <CoinPrice coinName={item.name} />
              </td>
              <td>
                {(item.target)}
              </td>
              <td className={styles.actionIcons}>
                <RemoveBtn id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
