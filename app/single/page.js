import React from 'react'
import Aside from '../components/Aside'
import Latest from '../components/Latest'
import Hero from '../components/Hero'

const Page = () => {
  return (
    <div>
      <Hero title={'Sashely'} description={'lorem'} />
      <div className='w-full p-10 md:p-20 flex flex-col lg:flex-row justify-cente gap-5'>
        <Latest />
        <Aside />
      </div>
    </div>
  )
}

export default Page