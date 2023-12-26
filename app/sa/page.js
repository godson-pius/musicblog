import React from 'react'
import { constants } from '../utils/constants'
import Post from '../components/Post';
import Ads from '../components/Ads';

const getSongs = async() => {
  try {
    const res = await fetch(`${constants.URI}/api/song/sa`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch song')
    }

    return res.json();

  } catch (error) {
    console.log("Error loading songs", error);
  }
} 

const page = async() => {
  const {songs} = await getSongs()

  return (
    <main className='w-full p-10'>
      <Ads />
      <h1 className='font-bold my-10 text-3xl'>South Africa Songs</h1>
      <section className='w-full grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10'>
        { songs.map((song) => (
          <Post details={song} key={song._id} />
        )) }
      </section>

    </main>
  )
}

export default page