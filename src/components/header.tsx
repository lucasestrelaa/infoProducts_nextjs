import React, { Component } from 'react'
import Image from 'next/image'

const Header = () => {
    return (
    <div>
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 gap-4'>
                <div className=''>
                    <Image className='self-center' src='/logo.png' alt='' title='' width={150} height={150}/>
                </div>
                <div className='text-right self-center mr-4'><a href='/produtos'>menu</a></div>
            </div>
        </div>
    </div>
      
    )
}
export default Header;
