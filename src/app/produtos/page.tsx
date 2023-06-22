"use client"
import React, { Component, useState } from 'react'

export default function Teste() {
  let [menu,setMenu] = useState(1);

    const menu1 = () => {
      return(
        <div className='text-gray-800'>menu 1 - teste</div>
      )
    }
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
      <>
      <div className='box-1'></div>
  
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
          
          <div className=' bg-gray-200'>
          <p className='text-gray-800'>Teste page 1</p>
          <button className='mr-3  items-center justify-center rounded-md border border-transparent bg-lime-600 px-8 py-3 text-base font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2' onClick={() => setMenu(1)}>menu1</button>
          <button className='mr-3  items-center justify-center rounded-md border border-transparent bg-lime-600 px-8 py-3 text-base font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2' onClick={() => setMenu(2)}>menu2</button>
          <button className='mr-3  items-center justify-center rounded-md border border-transparent bg-lime-600 px-8 py-3 text-base font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2' onClick={() => setMenu(3)}>menu3</button>
          <hr className='text-gray-800'></hr>
            {menu === 1 && menu1()}
            {menu === 2 && menu2()}
            {menu === 3 && menu3()}
        </div>
        </div>

 
    </div>
      </>
      
    )
}