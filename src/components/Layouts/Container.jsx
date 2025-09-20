import React from 'react'

const Container = ({children}) => {
  return (
    <div className='px-5 w-auto text-center md:px-0 md:w-[1144px] md:mx-auto'>{children}</div>
  )
}

export default Container