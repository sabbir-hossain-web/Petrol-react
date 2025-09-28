import React from 'react'
import Flex from '../Layouts/Flex'
import BackgroundImage from '../Layouts/BackgroundImage'

const Services = () => {
    return (
        <div className='pt-[28px] overflow-hidden'>

            <div className='md:flex items-center'>
                <div className='sm: w-[100%] md:w-[50%]'>
                    <div className="flex justify-end sm:mr-[-200px] sm: px-5 md:px-0 md:mr-[150px]">
                        <div>
                            <p className='font-primary font-bold sm: text-[36px] md:text-[64px]'>Our Services</p>
                            <p className='sm:w-auto sm:px-5 md:Px-0 md:w-[405px] font-primary font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>

                <BackgroundImage className="bg-[url(./assets/servicesOne.png)] sm: w-[100%] md:w-[50%] ">
                    <div className='relative z-1 sm: ml-[20px] md:ml-[116px]'>
                        <p className='font-primary sm:px-5 md:px-0 font-bold sm: text-[22px] md:text-[36px] sm:text-center md:text-left sm:w-auto text-white'>Modern natural oil and gas refineries.</p>
                        <button className='bg-[#F40404] mt-[19px] sm: p-2.5 md:py-[14px] md:px-[30px] text-white font-primary font-semibold text-[16px] cursor-pointer hover:bg-blue-700 hover:text-red-700'>Learn More</button>

                    </div>
                </BackgroundImage>

            </div>

            <div className='md:flex items-center'>

                <BackgroundImage className="bg-[url(./assets/servicesTwo.png)] sm: w-[100%] md:w-[50%]">
                    <div className='relative z-1 sm: ml-[20px] md:ml-[116px]'>
                        <p className='font-primary sm:px-5 md:px-0 font-bold sm: text-[22px] md:text-[36px] sm:w-auto text-white'>Supply of national industries.</p>
                        <button className='bg-[#F40404] mt-[19px] sm: p-2.5 md:py-[14px] md:px-[30px] text-white font-primary font-semibold text-[16px] cursor-pointer hover:bg-blue-700 hover:text-red-700'>Learn More</button>
                    </div>
                </BackgroundImage>

                <BackgroundImage className="bg-[url(./assets/servicesThree.png)] sm: w-[100%] md:w-[50%]">
                    <div className='relative z-1 sm: ml-[20px] md:ml-[116px]'>
                        <p className='font-primarysm:px-5 md:px-0 font-bold sm: text-[22px] md:text-[36px] sm:w-auto text-white'>National fuel distribution and supply.</p>
                        <button className='bg-[#F40404] mt-[19px] sm: p-2.5 md:py-[14px] md:px-[30px] text-white font-primary font-semibold text-[16px] cursor-pointer hover:bg-blue-700 hover:text-red-700'>Learn More</button>
                    </div>
                </BackgroundImage>

            </div>



        </div>
    )
}

export default Services