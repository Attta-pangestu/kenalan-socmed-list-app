import React from 'react'
import Logo from './Logo'
import { Button } from './ui/button'
import Link from 'next/link';


const Header = () => {
    const user : boolean = false;
  return (
    <header className='flex justify-between items-cengter '>
                <Logo />
                <Button asChild>
                    <Link href={user ? "/dashboard" : "/sign-in"} className="font-semibold text-lg">{user ? "Dashboard" : "Login"}</Link>
                </Button>
                
    </header>
  )
}

export default Header