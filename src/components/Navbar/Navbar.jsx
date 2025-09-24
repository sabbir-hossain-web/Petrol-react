import React from 'react'
import Container from '../Layouts/Container'
import logo from '../../assets/logo.png'
import Flex from '../Layouts/Flex'



const Navbar = () => {
    return (
        <div className='bg-[#F40404] py-[30px]'>
            <Container>

                <div className='sm:block md:flex justify-between items-center'>

                    <div>
                        <img src={logo} alt="#logo" className='sm: w-[150px] mb-[20px]'/>
                    </div>

                    <div className='flex items-center'>

                        <div className='sm:block px-5 md:flex items-center md:space-x-[47px] font-primary font-semibold text-[16px] text-white list-none'>
                            <li>
                                <a className='hover:text-green-500' href="">Home</a>
                            </li>

                            <li>
                                <a className='hover:text-green-500' href="">About</a>
                            </li>

                            <li>
                                <a className='hover:text-green-500' href="">Services</a>
                            </li>

                            <li>
                                <a className='hover:text-green-500' href="">Gallery</a>
                            </li>

                            <li>
                                <a className='hover:text-green-500' href="">Blog</a>
                            </li>
                            
                        </div>
                        
                    </div>
                        <button className='sm: text-[12px] sm: px-[25px] sm: py-[15px]sm: mt-5 sm: ml-5 round-[20px] md:ml-[72px] cursor-pointer md:py-[13px] md:px-[32px] border-2 text-white font-primary font-semibold md:text-[16px] hover:bg-blue-500'>CONTACT</button>
                    
                </div>

            </Container>
        </div>


    )
}

export default Navbar