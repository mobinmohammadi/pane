import React from 'react'

type Props = {
    title : string
}

export default function TitleForBoxesSections({title} : Props) {
  return (
    <div className='relative mb-7 flex items-center mt-7'>
        <span className='font-Dana-Demi-bold text-sm sm:text-sm dark:text-white text-zinc-900 mr-4 font-bold'>{title}</span>
        <span className='absolute bg-yellow-500 w-3 h-3 right-0 top-1 rounded-sm'> </span>
    </div>
  )
}
