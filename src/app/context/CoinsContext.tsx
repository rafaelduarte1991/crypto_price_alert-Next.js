// import { createContext, useContext, useState } from 'react';

// interface iCoinsContextData {
//   coins: iCoin[]
//   addCoin: (coin: iNewCoin) => void
//   removeCoin: (removedCoin: iCoin) => void
//   updateCoin: (updatedCoin: iCoin) => void
// }
// interface iCoinsContextProps {
//   children: ReactNode
// }

// const AlertContext = createContext({} as iCoinsContextData);

// export function useAlertContext() {
//   return useContext(AlertContext);
// }

// export function AlertProvider({ children }) {
//   const [formData, setFormData] = useState(null);

//   const handleFormSubmit = (data) => {
//     setFormData(data);
//   };

//   return (
//     <AlertContext.Provider
//       value={{ formData, handleFormSubmit }}>
//       {children}
//     </AlertContext.Provider>
//   );
// }


// // 'use client'
// // import { createContext, ReactNode, useEffect, useState } from 'react'
// // import { iCoin } from '@/pages/api/coins/route'
// // // import { ObjectId } from 'mongodb'

// // interface iNewCoin {
// //   // _id: ObjectId
// //   name: string
// //   target: number
// // }
// // interface iCoinsContextData {
// //   coins: iCoin[]
// //   addCoin: (coin: iNewCoin) => void
// //   removeCoin: (removedCoin: iCoin) => void
// //   updateCoin: (updatedCoin: iCoin) => void
// // }
// // interface iCoinsContextProps {
// //   children: ReactNode
// // }

// // export const CoinsContext = createContext({} as iCoinsContextData)

// // export function CoinsProvider({ children }: iCoinsContextProps) {
// //   const [coins, setCoins] = useState([] as iCoin[])
// //   // const [coins, setCoins] = useState<iCoin[]>([]);

// //   // const [coins, setCoins] = useState<iCoin[]>([]);

// //   useEffect(() => {
// //     setCoins(getCoins());
// //   }, []);

// //   function getCoins() {
// //     const coinsJSON = localStorage.getItem('coins')
// //     if (coinsJSON) {
// //       return JSON.parse(coinsJSON).map((coin:any) => {
// //         return {
// //           ...coin,
// //         }
// //       })
// //     } else {
// //       return []
// //     }
// //   }

// //   function updateCoin(updatedCoin: iCoin) {
// //     const updatedCoins = coins.map((coin) => (coin._id === updatedCoin._id ? updatedCoin : coin))
// //     setCoins(updatedCoins)
// //     localStorage.setItem('coins', JSON.stringify(updatedCoins))
// //   }

// //   function addCoin(coin: iNewCoin) {
// //     const _id = (coins.sort((a, b) => b._id - a._id)[0]?._id || 0) + 1
// //     const newCoin = [...coins, { ...coin, _id:_id }]
// //     // const newCoin = { ...coin, _id: new ObjectId() }
// //     setCoins(newCoin)
// //     // setCoins((prevCoins) => [...prevCoins, newCoin])
// //     localStorage.setItem('coins', JSON.stringify(newCoin))
// //   }

// //   function removeCoin(removedCoin: iCoin) {
// //     const newCoins = [...coins].filter((coin) => coin._id !== removedCoin._id)
// //     setCoins(newCoins)
// //     localStorage.setItem('coins', JSON.stringify(newCoins))
// //   }

// //   return (
// //     <CoinsContext.Provider
// //       value={{
// //         coins,
// //         addCoin,
// //         removeCoin,
// //         updateCoin,
// //       }}
// //     >
// //       {children}
// //     </CoinsContext.Provider>
// //   )
// // }
