import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Container from '../Layouts/Container';
import Flex from '../Layouts/Flex';

const Header = () => {
    return (
        <div className='bg-[#282828] border-b-4 border-[#FFB800] overflow-hidden'>
            <Container>
                <div className=''>
                <div className='font-primary mx-auto py-[15px] text-white'>
                    <div className='md:flex justify-between'>
                        <div className='sm: px-2 md:px-0 flex space-x-[49px]'>

                            <div className='flex items-center'>
                                <IoMailUnreadOutline md:size={20} />
                                <p className='ml-[5px] sm: text-[10px] md:text-[12px] font-primary'>mail@yourcompany.com</p>

                            </div>


                            <div className='flex sm:py-2 md:py-0 relative md:after:content[""] after:absolute after:top-[5px] after:left-[-27px] after:h-[16px] after:w-[2px] after:bg-white  items-center'>
                                <FaPhoneAlt md:size={20} />
                                <p className='ml-[5px] sm: text-[10px] md:text-[12px] font-primary'>+896 120 5889 (Toll free)</p>                               

                            </div>



                        </div>
                        <div>
                            <Flex className='sm: mt-2 md:mt-0 flex sm: justify-center items-center space-x-[19px]'>
                                <FaFacebookF size={16} className='cursor-pointer'></FaFacebookF>
                                <FaTwitter size={16} className='cursor-pointer'></FaTwitter>
                                <FaLinkedinIn size={16} className='cursor-pointer' />
                                <FaInstagram size={16} className='cursor-pointer' />

                            </Flex>

                        </div>
                    </div>

                     </div>
                </div>
            </Container>

        </div>
    )
}

export default Header