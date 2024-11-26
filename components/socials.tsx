import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Socials = () => {
  return (
    <div className='flex items-center justify-end  px-4 space-x-2'>
          {/* <Link
            target='blank'
            href={"https://web.facebook.com/imran.syam.56/"}
            className='relative  h-8 w-8'
          >
            <Image
              src={"/fb.webp"}
              fill
              className='object-cover object-center shrink-0 '
              alt=''
            />
          </Link> */}
          {/* <Link
            target='blank'
            href={"https://www.instagram.com/_imran_syam_/?hl=en"}
            className='relative  h-8 w-8 '
          >
            <Image
              src={"/instagram.webp"}
              fill
              className='object-cover object-center scale-150 shrink-0 '
              alt=''
            />
          </Link> */}
          <Link target='blank' href={"/"} className='relative  h-8 w-8'>
            <Image
              src={"/discord.webp"}
              fill
              className='object-cover object-center scale-110 shrink-0'
              alt=''
            />
          </Link>
          <Link
            target='blank'
            href={"https://www.linkedin.com/in/imran-syam-b8b216217/"}
            className='relative  h-8 w-8'
          >
            <Image
              src={"/linkedin.webp"}
              fill
              className='object-cover scale-90 object-center shrink-0'
              alt=''
            />
          </Link>
          <Link
            target='blank'
            href={"https://github.com/imran-24"}
            className='relative  h-8 w-8'
          >
            <Image
              src={"/github.webp"}
              fill
              className='object-cover object-center shrink-0'
              alt=''
            />
          </Link>
          {/* <Link
            target='blank'
            href={"https://twitter.com/ImranSyam169132"}
            className='relative scale-125 h-8 w-8'
          >
            <Image
              src={"/twitter.webp"}
              fill
              className='object-cover object-center shrink-0 rounded-md'
              alt=''
            />
          </Link> */}
        </div>
  )
}

export default Socials