import Form from '@/components/Form'
import Alert from '../components/Alert'
import { Metadata } from 'next'
// import '../styles/global.css'


export default function Home() {
  return (
    <div className="h-screen my-0 mx-auto p-2 flex flex-col">
      <Form/>
      <Alert />
    </div>
  )
}
