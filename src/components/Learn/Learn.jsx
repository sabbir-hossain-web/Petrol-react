import React from 'react'
import Container from '../Layouts/Container'
import learn from "../../assets/learn.png"
import Flex from '../Layouts/Flex'

const Learn = () => {
    return (
        <div className='sm: mt-5 md:py-[136px] bg-[#F0F0F0] overflow-hidden'>
            <Container>

                <div className='md:flex'>

                    <div className='md:py-[80px] bg-[#F40404] sm: text-center md:text-left  md:w-[413px]'>
                        <p className=' md:w-[262px] font-bold font-primary sm: py-5 sm:text-[26px] md:text-[36px] text-white md:ml-[74px]'>Learn more about our company</p>
                    </div>

                    <div className='relative'>
                        <img src={learn} alt="" className='sm: w-auto' />
                        <button className='bg-[#FFFFFF] mt-[19px] py-[14px] px-[30px] text-[#F40404] cursor-pointer font-primary font-semibold text-[16px] absolute sm: top-[100px] md:top-[168px] sm: left-[30px] md:left-[282px] hover:bg-blue-500 hover:text-white'>Learn More</button>

                    </div>


                </div>

            </Container>
        </div>
    )
}

export default Learn