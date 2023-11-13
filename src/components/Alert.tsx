'use client'
import { useContext, useState } from 'react'
import { CoinsContext } from '@/app/context/CoinsContext';
import styles from '../styles/components/Alert.module.css'
import { iCoin } from '@/pages/api/coins';
import CoinPrice from './CoinPrice'

export default function Alert() {
  const { coins, updateCoin, removeCoin } = useContext(CoinsContext);
  const [updtCoin, setUpdtCoin] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedTarget, setEditedTarget] = useState('');
  const [isEditing, setIsEditing] = useState(false);


  return (
    <div className={styles.alert}>
      <h3 className={styles.title}>Active Alerts</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Current Price</th>
            <th>Target Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {coins && coins.map((item: iCoin, index: number) => (
            <tr key={index}>
              <td>
                {updtCoin ? (
                  <input
                    type="text"
                    value={editedName === '' ? item.name : editedName}
                    onChange={(e) => {

                      setEditedName(e.target.value)
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const coin = {
                          ...item,
                          name: editedName
                        }
                        updateCoin(coin)
                        setUpdtCoin(false)
                      }
                    }}
                    autoFocus
                  />
                ) : (
                  <div>
                    {item.name} - USD
                  </div>
                )}
              </td>
              <td><CoinPrice coin={item}/></td>
              <td>
                {updtCoin ? (
                  <input
                    type="text"
                    onClick={() =>setIsEditing(true)}
                    value={isEditing ? editedTarget : item.target}
                    onChange={(e) => {
                      setEditedTarget(e.target.value)
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const coin = {
                          ...item,
                          target: parseFloat(editedTarget)
                        }
                        updateCoin(coin)
                        setUpdtCoin(false)
                      }
                    }}
                    autoFocus
                  />
                ) : (
                  <div>
                    {(item.target)}
                  </div>
                )}
                </td>
              <td className={styles.actionIcons}><a onClick={() => setUpdtCoin(true)}>&#128393;</a><a onClick={() => removeCoin(item)}>&#10060;</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
