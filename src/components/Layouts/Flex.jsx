import React from 'react'
import { Md10K } from 'react-icons/md'

const Flex = ({children, className}) => {
  return (
    <div className={`flex  ${className}`}>{children}</div>
  )
}

export default Flex