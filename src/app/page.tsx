"use client"
import Image from 'next/image'

import React, { Component, useState } from 'react'
export default function Home() {
  let [menu,setMenu] = useState(1);

  const menu1 = () => {
    return(
      <div className='text-gray-800 text-center m-2 p-2'>
        <div>
        <h1 className='font-bold text-lg'>Como ter uma vida mais saudável?</h1>
        </div>
        <div className='flex justify-center items-center rounded-2xl p-4'>
          <Image className='self-center' src='/imgA.jpg' alt='' title='' width={600} height={600}/>
        </div>
        <div>
        <p className='justify-start'>
          A saúde é um dos aspectos mais valiosos da vida humana. 
          Ter uma boa saúde é essencial para desfrutar de uma vida plena e satisfatória. 
          Nesse sentido, o emagrecimento pode desempenhar um papel crucial, 
          pois a manutenção de um peso saudável está intimamente ligada ao bem-estar físico e mental.
        </p>
        </div>
        <div className='p-2 pb-4'>
          <a className='bg-green-500 hover:bg-green-300 rounded-s p-2 ' href="https://go.hotmart.com/U84079697P">Clique Aqui para mudar de vida!</a>
        </div>
        <br></br>
        <div>
        <h1 className='font-bold text-lg'>Excesso de peso...</h1>
        </div>
        <div className='flex justify-center items-center rounded-2xl p-4'>
          <Image className='self-center' src='/imgE.jpg' alt='' title='' width={600} height={600}/>
        </div>
        <div>
        <p className='justify-start'>
          Em primeiro lugar, é importante destacar que o excesso de peso pode levar 
          a uma série de problemas de saúde. A obesidade, por exemplo, está associada 
          a condições como diabetes tipo 2, doenças cardíacas, pressão alta, derrame 
          cerebral, apneia do sono e diversos tipos de câncer. Além disso, o peso 
          excessivo coloca uma carga adicional nas articulações, o que pode levar 
          a problemas como osteoartrite.
        </p>
        </div>
        <div className='p-2'>
          <a className='bg-green-500 hover:bg-green-300 rounded-s p-2 ' href="https://go.hotmart.com/U84079697P">Clique Aqui!</a>
        </div>
        <br></br>
        <div>
        <h1 className='font-bold text-lg'>Como esse E-book te ajudará?</h1>
        </div>
        <div className='flex justify-center items-center rounded-2xl p-4'>
          <Image className='self-center' src='/imgB.jpg' alt='' title='' width={600} height={600}/>
        </div>
        <div>
        <p className='justify-start'>
          É necessário que você entenda que este é o melhor e-book e te ajudará com inúmeras dicas de como
          se alimentar de forma saudável e na redução de peso!
          Com ele você entenderá que é necessário um equilibrio entre a sua alimentação!
        </p>
        </div>
        <div className='p-2'>
          <a className='bg-green-500 hover:bg-green-300 rounded-s p-2 ' href="https://go.hotmart.com/U84079697P">Clique Aqui!</a>
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
        
        <div className='bg-white border-solid rounded-2xl p-2'>
        <hr className='text-gray-800'></hr>
        {menu1()}

      </div>
      </div>
    

  </div>
    </>
  )
}
