'use client'
import { constants } from '@/app/utils/constants';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceShareButton,
  XIcon,
} from "react-share";
import Ads from '@/app/components/Ads';


const getSongs = async (id) => {
  try {
    const res = await fetch(`${constants.URI}/api/song?id=${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch song')
    }
    return res.json();

  } catch (error) {
    console.log("Error loading songs", error);
  }
}

const Page = async ({ params }) => {

  useEffect(() => {
    AOS.init({ once: true, });
  }, [])

  const { song } = await getSongs(params.id)
  const shareUrl = window.location.href

  return (
    <main className='w-full flex flex-col justify-center p-10'>
      <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D" alt="Song" />

      <h2 className='text-3xl my-3'>{song.title}</h2>
      <p>{song.description}</p>

      <Ads />

      <button className='bg-cyan-500 p-4 w-max rounded-lg text-white uppercase' data-aos="fade-up" data-aos-duration="1000">Download Resource</button>

      <div className='flex flex-col my-2 gap-2 items-start'>
        <h1>Share: </h1>
        <div className='socials flex gap-2 items-center'>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={35} round />
          </FacebookShareButton>

          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={35} round />
          </WhatsappShareButton>
          
          <FacebookMessengerShareButton url={shareUrl}>
            <FacebookMessengerIcon size={35} round />
          </FacebookMessengerShareButton>
          
          <TelegramShareButton url={shareUrl}>
            <TelegramIcon size={35} round />
          </TelegramShareButton>
          
          <TwitterShareButton url={shareUrl}>
            <XIcon size={35} round />
          </TwitterShareButton>

        </div>
      </div>
    </main>
  )
}

export default Page