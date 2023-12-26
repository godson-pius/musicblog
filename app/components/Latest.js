import React from 'react'
import Post from './Post'
import { constants } from '../utils/constants'
import { fakedata } from '../utils/fakedata';

const getSongs = async() => {
  try {
    const res = await fetch(`${constants.URI}/api/song`, { cache: 'no-store' });

    if (!res.ok) {
      // throw new Error('Failed to fetch song')
      return fakedata
    }

    return res.json();

  } catch (error) {
    // console.log("Error loading songs", error);
    return fakedata
  }
} 

const Latest = async() => {
  const {songs} = await getSongs()

  return (
    <main className='w-full'>
      <h1 className='font-bold mb-10'>Latest Songs</h1>
      <section className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10'>
        { songs.length > 0 ? (
          songs.map((song) => (
            <Post details={song} key={song._id} />
          ))
        ) : null }
      </section>

    </main>
  )
}

export default Latest