'use client'
import { useContext } from 'react'
import {HiOutlineTrash} from 'react-icons/hi'
import { UpdateContext } from '../context/UpdateContext'

interface Props {
  id: string
}

export default function Alert({id}:Props) {
  const { triggerUpdate } = useContext(UpdateContext)

  const removeCoin = async () => {
    const confirmed = confirm("Are you sure?")
    if(confirmed) {
      const res = await fetch(`/api/coins?id=${id}`, {
        method: 'DELETE',
      })
      if(res.ok) {
        triggerUpdate()
      }
    }
  }

  return (
    <button onClick={removeCoin}>
      <HiOutlineTrash size={20} />
    </button>
  )
}

