import React from 'react'
import Flex from '../Layouts/Flex'

const Contact = () => {
  return (
    <div className='sm: px-5 md:px-0 py-[45px] bg-[#F40404] border-b-4 border-amber-500 overflow-hidden'>
        <div className="md:flex justify-center">
            <p className='font-primary font-bold sm: text-[24px] md:text-[36px] text-white'>Want to join as member branch in your area?</p>
            <button className='py-[13px] px-[32px] bg-transparent border-2 text-white font-primary font-semibold sm: mt-4 md:mt-0 md:ml-[40px] cursor-pointer hover:bg-blue-500'>CONTACT</button>
        </div>
    </div>
  )
}

export default Contact