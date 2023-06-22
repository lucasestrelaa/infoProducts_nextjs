"use client"
import Image from 'next/image'

import React, { Component, useState } from 'react'
export default function Home() {
  let [menu,setMenu] = useState(1);

  const menu1 = () => {
    return(
      <div className='text-gray-800 text-center m-2 p-2'>
        <div>
        <h1 className='font-bold text-lg'>Conheça nossos produtos</h1>
        </div>
        <div className='flex justify-center items-center rounded-2xl p-4'>
          <Image className='self-center' src='/img1.jpg' alt='' title='' width={600} height={600}/>
        </div>
        <div>
        <p className='justify-start'>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e 
          de impressos, e vem sendo utilizado desde o século XVI, quando um impressor
          desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro
          de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como
          também ao salto para a editoração eletrônica, permanecendo essencialmente
          inalterado. Se popularizou na década de 60, quando a Letraset lançou
          decalques contendo passagens de Lorem Ipsum, e mais recentemente quando
          passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
        </p>
        </div>
        <div className='p-2'>
          <a className='bg-lime-300 hover:bg-lime-500 rounded-s p-2 ' href="https://go.hotmart.com/U84079697P">Clique Aqui!</a>
        </div>
      </div>
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
      <div className="sm:mx-auto sm:w-full sm:max-lg:">
        
        <div className=' bg-gray-200 border-solid rounded-2xl p-2'>
        <p className='text-gray-800'>Teste page 1</p>
        {/* <button className='mr-3  items-center justify-center rounded-md border border-transparent bg-lime-600 px-8 py-3 text-base font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2' onClick={() => setMenu(1)}>menu1</button> */}
        {/* <button className='mr-3  items-center justify-center rounded-md border border-transparent bg-lime-600 px-8 py-3 text-base font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2' onClick={() => setMenu(2)}>menu2</button>
        <button className='mr-3  items-center justify-center rounded-md border border-transparent bg-lime-600 px-8 py-3 text-base font-medium text-white hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2' onClick={() => setMenu(3)}>menu3</button> */}
        <hr className='text-gray-800'></hr>
        {menu1()}
          {/* {menu === 1 && menu1()}
          {menu === 2 && menu2()}
          {menu === 3 && menu3()} */}
      </div>
      </div>


  </div>
    </>
  )
}
