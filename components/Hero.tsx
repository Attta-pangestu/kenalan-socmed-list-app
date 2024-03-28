import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { MoveDown } from 'lucide-react'

const Hero = () => {
    const user : any = false;
  return (
    <div className='py-32'>
        <div className='grid place-content-center text-center gap-2'>
            <h1 className='capitalize text-3xl max-w-md md:max-w-2xl md:text-4xl font-medium'>Share your every social medias in one single accessable link <span className='text-primary '>.</span> </h1>
            <p className='normal-case text-md md:text-lg max-w-sm md:max-w-lg text-center mx-auto'>Simplify and elevate your online presence effortlessly with one link connects to endless oppurtinities</p>
        </div>
        <div className='flex items-center justify-center gap-3 mt-7 '>
        <div className='flex items-center justify-center gap-3 mt-7 '>
           <Button asChild><Link href={user?"/dashboard" :"/sign-in"} className='text-lg font-medium'>Get Started</Link></Button>
            <Button size='default' variant='secondary'>
                Learn More <MoveDown className=''/>
            </Button>
        </div>
    
        </div>
    </div>
  )
}

export default Hero