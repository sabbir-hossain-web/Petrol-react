import React from 'react'

const Container = ({children}) => {
  return (
    <div className='sm: w-auto md:w-[1144px] mx-auto overflow-hidden'>{children}</div>
  )
}

export default Container