import Image from 'next/image'
import Landing from './components/Landing'
import Latest from './components/Latest'
import Aside from './components/Aside'

export default function Home() {
  return (
    <main className="w-full">
      <Landing />
      <div className='w-full p-10 md:p-20 flex flex-col lg:flex-row justify-cente gap-5'>
        <Latest />
        <Aside />
      </div>
    </main>
  )
}
