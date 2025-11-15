import React from 'react'
import { Skeleton } from './ui/skeleton'

const SkeletonCard = () => {
  return (
    <div className='w-screen min-h-screen flex justify-center items-center flex-col gap-2'>
        <Skeleton className='h-[100px] w-[100px] rounded-full'/>
        <Skeleton className='h-4 w-[200px]' />
        <Skeleton className='h-4 w-[200px]' />
    </div>
  )
}

export default SkeletonCard