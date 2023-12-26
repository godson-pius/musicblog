'use client'

import { Button } from '@material-tailwind/react'
import React from 'react'

const Hero = ({ title, description }) => {
    return (
        <main className='w-full'>
            <section className='flex bg-[url(https://images.pexels.com/photos/673648/pexels-photo-673648.jpeg?auto=compress&cs=tinysrgb&w=800)] bg-center bg-cover bg-no-repeat items-center p-20 hero'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <h1 className='text-5xl md:text-[10rem] text-black font-bold'>{ title }</h1>
                    <p className='md:text-xl text-center mt-10'>{ description }</p>

                    <Button size='lg' variant='gradient' color='blue' className='mt-10'>Download</Button>
                </div>
            </section>
        </main>
    )
}

export default Hero