'use client'
import { useRouter } from 'next/navigation'
import {HiOutlineTrash} from 'react-icons/hi'

interface Props {
  id: string;
}

export default function Alert({id}:Props) {
  const router = useRouter()
  const removeCoin = async () => {
    const confirmed = confirm("Are you sure?")
    if(confirmed) {
      const res = await fetch(`/api/coins?id=${id}`, {
        method: 'DELETE',
      })
      if(res.ok) {
        router.push("/")
      }
    }
  }

  return (
    <button onClick={removeCoin}>
      <HiOutlineTrash size={20} />
    </button>
  );
}

