import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/' className='select-none'>
        <h1 className='text-3xl font-extrabold'>
        <span className='text-primary '>Kenalin</span>
        My
        <span className='text-primary '>Socials</span>
        .
        </h1>
    </Link>
  )
}

export default Logo