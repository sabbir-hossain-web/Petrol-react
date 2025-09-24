import React from 'react'
import Container from '../Layouts/Container'

const Banner = () => {
    return (
        <div className='sm:py-[50px] z-1 relative bg-[url(./assets/banner.png)] bg-cover bg-center bg-no-repeat md:py-[257px]'>

            <div className='z-[-1] absolute top-0 left-0 w-full h-full bg-black/60'> </div>

            <Container>
                <h1 className='sm: text-[26px] sm: sm: px-5 sm: w-[400px] md:w-[842px] font-primary md:text-[64px] font-bold text-white'>We exist since 1975 on the oil and gas industry.</h1>

                <button className='sm: px-[15px] sm: py-[5px] sm: text-[12px] md:py-[13px] md:px-[40px] bg-[#F40404] text-white font-semibold font-primary md:text-[16px] mt-[31px] cursor-pointer hover:bg-blue-700 hover:text-red-700'>LEARN MORE</button>
            </Container>


        </div>
    )
}

export default Banner