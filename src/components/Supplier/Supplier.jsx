import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

const Supplier = () => {
    return (
        <div className='pt-[78px] pb-[100px] overflow-hidden'>

            <Container>

                <div className="sm:block md:flex items-center">
                    <h2 className='sm: text-[22px] sm: px-5 sm: w-[350px] font-primary font-bold md:text-[48px] md:w-[400px] sm:leading-[10px] md:leading-[72px]'>The biggest supplier on the country</h2>

                    <p className='sm: w-[380px] md:w-[651px] font-primary font-medium text-[16px] text-[#6C6C6C] sm:ml-[0px]sm: px-[20px] sm: mb-[-50px] md:ml-[178px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>


                </div>

            </Container>

        </div>
    )
}

export default Supplier