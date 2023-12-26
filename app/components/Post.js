import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment/moment'
import { FiLink2 } from 'react-icons/fi'

const Post = ({ details }) => {
    return (
        <div>
            <div className='single-post'>
                {/* Imnage */}
                <div className='w-80 h-72 bg-[url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D)] bg-center bg-cover bg-no-repeat rounded'>
                </div>

                {/* Category */}
                <div className='flex gap-3 mt-3 text-sm'>
                    <h1 className='uppercase font-bold'>{ details.genre } \ { details.country }</h1>
                    <p className='text-gray-500'>- { moment(details.createdAt).fromNow() }</p>
                </div>

                {/* Title */}
                <div className='flex gap-2 items-center'>
                    <FiLink2 />
                <Link href={`/single/${details._id}`} className='my-2 text-xl'>{ details.title }</Link>
                </div>

                {/* Description */}
                <p className='text-sm mt-1 text-left text-gray-700'>{ details.description }...</p>
            </div>
        </div>
    )
}

export default Post