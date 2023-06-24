"use client"
import Footer from '@/components/footer';
import Header from '@/components/header';
import Image from 'next/image'

import React, { Component, useState } from 'react'
export default function Home() {
  let [menu,setMenu] = useState(1);

  
  const menu2 = () => {
    return(
      <div className='text-gray-800'>menu 2</div>
    )
  }
  const menu3= () => {
    return(
      <div className='text-gray-800'>menu 3</div>
    )
  }
  return (
    <div className='bg-slate-400'>
    <Header />
    <div className='box-1'></div>

    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-lg:">
        
        <div className='bg-white border-solid rounded-2xl p-2'>
          

      </div>
      </div>


  </div>
    <Footer />
    </div>
  )
}
