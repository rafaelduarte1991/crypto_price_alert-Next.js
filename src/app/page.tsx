import Form from '@/app/components/Form'
import Alert from '@/app/components/Alert'
import '@/styles/global.css'

export default function Home() {

  return (
    <div className="h-screen my-0 mx-auto p-2 flex flex-col">
      <Form />
      <Alert/>
    </div>
  )
}
