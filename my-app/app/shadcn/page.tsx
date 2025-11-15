import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col gap-y-5 justify-center items-center'>
        <Button variant={'talha'} size={'lg'}>Click Me</Button>
        <Button variant={'default'} size={'lg'}>Post</Button>
        <Button variant={'outline'} size={'lg'}>Check</Button>
    </div>
  )
}

export default Page