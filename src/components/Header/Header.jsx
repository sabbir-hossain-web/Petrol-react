import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Container from '../Layouts/Container';
import Flex from '../Layouts/Flex';

const Header = () => {
    return (
        <div className='bg-[#282828] border-b-4 border-[#FFB800] '>
            <Container>
                <div>
                <div className='font-primary py-[15px] text-white'>
                    <Flex className='sm:inline-block md:flex justify-between'>
                        <Flex className='md:flex space-x-[49px]'>

                            <Flex className='flex items-center'>
                                <IoMailUnreadOutline size={20} />
                                <p className='ml-[5px] text-[12px] font-primary'>mail@yourcompany.com</p>

                            </Flex>

                            <Flex className='md:flex relative after:content[""] after:absolute after:top-[5px] after:left-[-27px] after:h-[16px] after:w-[2px] after:bg-white  items-center'>
                                <FaPhoneAlt size={20} />
                                <p className='ml-[5px] text-[12px] font-primary'>+896 120 5889 (Toll free)</p>

                            </Flex>



                        </Flex>
                        <div>
                            <Flex className='md:flex space-x-[19px]'>
                                <FaFacebookF size={16} className='cursor-pointer'></FaFacebookF>
                                <FaTwitter size={16} className='cursor-pointer'></FaTwitter>
                                <FaLinkedinIn size={16} className='cursor-pointer' />
                                <FaInstagram size={16} className='cursor-pointer' />

                            </Flex>

                        </div>
                    </Flex>

                     </div>
                </div>
            </Container>

        </div>
    )
}

export default Header