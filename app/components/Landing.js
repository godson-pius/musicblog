'use client'
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

const Landing = () => {
    return (
        <main className='w-full'>
            <section className='flex bg-[url(https://images.pexels.com/photos/306175/pexels-photo-306175.jpeg?auto=compress&cs=tinysrgb&w=800)] bg-center bg-cover bg-no-repeat items-center p-20 hero'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <h1 className='text-5xl md:text-[10rem] font-bold text-white'>Music World</h1>
                    <p className='md:text-xl text-center mt-10 text-white'>I think music in itself is healing. It's an explosive expression of humanity. <br/> It's something we are all touched by. No matter what culture we're from, everyone loves music</p>

                    <Button size='lg' variant='gradient' color='white' className='mt-10'>Explore</Button>
                </div>
            </section>
        </main>
    )
}

export default Landing