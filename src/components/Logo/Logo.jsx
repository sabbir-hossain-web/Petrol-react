import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

import logoOne from "../../assets/logoOne.png"
import logoTwo from "../../assets/logoTwo.png"
import logoThree from "../../assets/logoThree.png"
import logoFour from "../../assets/logoFour.png"

const Logo = () => {
  return (
    <div className='sm: py-7 md:py-[117px] overflow-hidden'>
        <Container>
            <div className="md:flex justify-between">
                <img src={logoOne} alt="" className='md:w-[20%] sm: w-[150px] sm: mx-auto' />
                <img src={logoTwo} alt="" className='md:w-[20%] sm: w-[150px] sm: mx-auto' />
                <img src={logoThree} alt="" className='md:w-[20%] sm: w-[150px] sm: mx-auto' />
                <img src={logoFour} alt="" className='md:w-[20%] sm: w-[150px] sm: mx-auto' />

            </div>
        </Container>
    </div>
  )
}

export default Logo