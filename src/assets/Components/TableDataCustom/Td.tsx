import React, { ReactNode } from 'react'


type Props ={
    children : ReactNode
}


export default function Td({children}: Props) {
  return (
   <td>{children}</td>
  )
}
