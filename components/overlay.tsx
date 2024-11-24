'use client';

import React from 'react'

const Overlay = () => {
  return (
    <div className='absolute inset-0 z-20 rounded-3xl cursor-pointer  opacity-0 group-hover:opacity-50 bg-black transition-opacity overflow-hidden h-full'></div>
  )
}

export default Overlay