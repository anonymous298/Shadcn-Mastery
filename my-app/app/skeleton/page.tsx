"use client"

import SkeletonCard from '@/components/SkeletonCard'
import React, { useState } from 'react'

const Page = () => {

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 1000);

  return (
    <>
        {isLoading && <SkeletonCard/>}
        {!isLoading && <h1>Here is your data talha</h1>}
        
    </>
  )
}

export default Page