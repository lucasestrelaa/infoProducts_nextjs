"use client"
import Footer from '@/components/footer';
import Header from '@/components/header';
import Image from 'next/image'
import React, { Component, useState } from 'react'
import Link from 'next/link'
import produtos from './produtosEmagrecimento.json'


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
  const moneyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  
  function getPercent(current: any, previous: any) {
    return (current / previous - 1) * 100
  }
  
  function formatMoney(value: any) {
    return moneyFormatter.format(value)
  }
  return (
    <div style={{backgroundImage: "url('https://i.pinimg.com/originals/27/0f/77/270f77c03d98e9bdc6ccb81f3b174b4f.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-center">E-books para auxiliar no seu Emagrecimento</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 pb-6 ">
            {produtos.map((res: any) => { 
              return (
                  <div key={res.id} className="group relative bg-gray-100 m-2 p-4 rounded">
                    <div className='img' style={{ height: "150px"}}>
                      <Image src={res.imagem} width={100} height={100} alt={res.titulo}/>
                    </div>
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
                      <p className="text-sm font-medium text-gray-900 ">Por apenas {formatMoney(res.preco)}</p>
                      
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
