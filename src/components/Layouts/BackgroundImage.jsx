import React from 'react'

const BackgroundImage = ({children, className}) => {
  return (
    <div className={`${className} w-[50%] relative bg-cover bg-center bg-no-repeat sm: mt-[20px] md:mt-0 sm: py-[50px] md:pt-[147px] md:pb-[139px] after:absolute after:content[""] after:top-0 after:left-0 after:h-full after:w-full after:bg-black/60 overflow-hidden`}>{children}</div>
  )
}

export default BackgroundImage