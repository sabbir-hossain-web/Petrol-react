import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import { FaChevronRight } from "react-icons/fa";
import { DiVisualstudio } from 'react-icons/di';


const Blog = () => {
    return (
        <div className='sm: pt-10 sm: pb-10 md:pt-[110px] md:pb-[162px] bg-[#F0F0F0] overflow-hidden'>
            <Container>
                <div className='md:flex justify-between'>
                    <div className='relative bg-[url(./assets/blogOne.png)] bg-center bg-cover bg-no-repeat pt-[55px] pb-[75px] sm: mt-5 md:mt-0 md:w-[339px]'>
                        <div className='z-1 absolute top-0 left-0 h-full w-full bg-black/60'></div>
                        <p className='relative z-3 font-primary font-bold text-[24px] md:w-[249px] ml-[46px] text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>

                        <button className='relative z-3 py-[11px] px-[23px] bg-white/60 ml-[46px] mt-[52px] text-white cursor-pointer font-primary font-semibold text-[12px] hover:bg-blue-500'>Read more</button>
                    </div>

                    <div className='relative bg-[url(./assets/blogTwo.png)] bg-center bg-cover bg-no-repeat pt-[55px] pb-[75px] sm: mt-5 md:mt-0 md:w-[339px]'>
                        <div className='z-1 absolute top-0 left-0 h-full w-full bg-black/60'></div>
                        <p className='relative z-3 font-primary font-bold text-[24px] md:w-[249px] ml-[46px] text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>

                        <button className='relative z-3 py-[11px] px-[23px] bg-white/60 ml-[46px] mt-[52px] text-white cursor-pointer font-primary font-semibold text-[12px]'>Read more</button>
                    </div>

                    <div className='relative bg-[url(./assets/blogThree.png)] bg-center bg-cover bg-no-repeat sm: mt-5 md:mt-0 pt-[55px] pb-[75px] md:w-[339px]'>
                        <div className='z-1 absolute top-0 left-0 h-full w-full bg-black/60'></div>
                        <p className='relative z-3 font-primary font-bold text-[24px] md:w-[249px] ml-[46px] text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>

                        <button className='relative z-3 py-[11px] px-[23px] bg-white/60 ml-[46px] mt-[52px] text-white cursor-pointer font-primary font-semibold text-[12px] hover:bg-blue-500'>Read more</button>
                    </div>

                </div>

                <div className="sm: px-2 md:px-0 flex items-center md:justify-end mt-[28px]">
                    <p className='font-primary font-bold text-[16px]'>MORE FROM THE BLLOG</p>
                    <FaChevronRight className='ml-[5px]' />

                </div>

                

            </Container>
        </div>
    )
}

export default Blog