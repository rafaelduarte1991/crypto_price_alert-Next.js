'use client'
import React, { ReactNode, createContext, useContext, useState } from 'react'

interface iUpdateContextData {
  triggerUpdate : () => void
  updateDb: boolean
}
interface iUpdateContextProps {
  children: ReactNode
}
export const UpdateContext = createContext({} as iUpdateContextData)

export const UpdateProvider = ({ children }: iUpdateContextProps) => {
  const [updateDb, setUpdateDb] = useState(false)

  function triggerUpdate () {
    setUpdateDb(!updateDb)
  }

  return (
    <UpdateContext.Provider value={{ updateDb, triggerUpdate }}>
      {children}
    </UpdateContext.Provider>
  )
}

