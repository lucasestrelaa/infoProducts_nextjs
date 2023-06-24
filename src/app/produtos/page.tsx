"use client"
import React, { Component, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer';
import Header from '@/components/header';
import produtos from './../produtosEmagrecimento.json'

export default function Teste() {
  let [menu,setMenu] = useState(1);
  console.log(produtos[0].link)
  const menu1 = () => {
    return(
      <div className='text-gray-800 text-center m-2 p-2'>
        
        
        
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
          <a className='bg-green-500 hover:bg-green-300 rounded-s p-2 ' href="https://go.hotmart.com/U84079697P">Compre agora!</a>
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
          <a className='bg-green-500 hover:bg-green-300 rounded-s p-2 ' href="https://go.hotmart.com/U84079697P">Compre agora!</a>
        </div>
      </div>
    )
  }
    return (
      <div style={{backgroundImage: "url('https://i.pinimg.com/originals/27/0f/77/270f77c03d98e9bdc6ccb81f3b174b4f.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-center">E-books para auxiliar no seu Emagrecimento</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 pb-6 ">
            {produtos.map((res: any) => { 
              return (
                  <div key={res.id} className="group relative bg-gray-300 m-2 p-4 rounded">
                    {/* <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <Image src={res.imagem} width={100} height={100} alt={res.titulo}/>
                    </div> */}
                    <div className="mt-4 mb-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={`${res.link}`}>
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {res.titulo}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{res.texto}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900 ">Por apenas R${res.preco}</p>
                      
                    </div>
                    <div className='text-center'>
                      <Link className="text-sm text-gray-700 bg-blue-600 border-rounded p-2 m-2 rounded text-white" href="https://go.hotmart.com/U84079697P" target='_blank'>Compre aqui</Link>
                    </div>
                  </div>
              )
            })}
          </div>
          <hr className='text-gray-500'></hr>
          {/* <p className='text-sm  tracking-tight text-gray-500 text-center pt-6'>
          A saúde é um dos aspectos mais valiosos da vida humana. Ter uma boa saúde é essencial para desfrutar de uma vida plena e satisfatória. Nesse sentido, o emagrecimento pode desempenhar um papel crucial, pois a manutenção de um peso saudável está intimamente ligada ao bem-estar físico e mental.

          Em primeiro lugar, é importante destacar que o excesso de peso pode levar a uma série de problemas de saúde. A obesidade, por exemplo, está associada a condições como diabetes tipo 2, doenças cardíacas, pressão alta, derrame cerebral, apneia do sono e diversos tipos de câncer. Além disso, o peso excessivo coloca uma carga adicional nas articulações, o que pode levar a problemas como osteoartrite.

          Em contrapartida, alcançar e manter um peso saudável traz uma série de benefícios para a saúde. A perda de peso reduz o risco de desenvolver doenças crônicas, melhora o controle da glicemia, diminui a pressão arterial e o colesterol, e alivia o estresse nas articulações e na coluna vertebral. Além disso, emagrecer pode melhorar a qualidade do sono, aumentar os níveis de energia e promover uma maior autoestima e confiança.

          No entanto, é importante ressaltar que o emagrecimento saudável não se resume apenas a números na balança. Uma abordagem equilibrada envolve a adoção de um estilo de vida saudável, que inclui uma alimentação balanceada, atividade física regular e cuidados com o bem-estar emocional. Em vez de se concentrar apenas em alcançar um determinado peso, é fundamental buscar o equilíbrio e a manutenção de hábitos saudáveis a longo prazo.

          Além dos benefícios físicos, a busca pela saúde e pelo emagrecimento também impacta positivamente a saúde mental. A prática regular de exercícios físicos, por exemplo, libera endorfinas, substâncias que proporcionam uma sensação de bem-estar e reduzem os níveis de estresse e ansiedade. Além disso, cuidar do próprio corpo e alcançar metas relacionadas ao emagrecimento pode fortalecer a autoestima e a autoconfiança, contribuindo para uma melhor saúde emocional.

          Em resumo, a importância da saúde e do emagrecimento está profundamente ligada ao bem-estar geral do indivíduo. A manutenção de um peso saudável e a adoção de hábitos saudáveis têm o potencial de prevenir uma série de doenças, melhorar a qualidade de vida e promover uma maior satisfação pessoal. Portanto, investir em uma abordagem equilibrada que englobe alimentação adequada, atividade física e cuidados emocionais é fundamental para alcançar uma vida saudável e plena.
        </p> */}
      </div>
    </div>
    
  
  )
  
}