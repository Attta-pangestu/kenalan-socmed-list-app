import React from 'react'
import { Metadata } from 'next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import Link from 'next/link'


export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'User',
    }
}


const currentUser = {
    imageUrl: 'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZUdKZmhiR1dWT2QzWFJrMkxuMGFwcUFsb04ifQ', 
    emailAddress: 'athabarokah@gmail.com',
    firstName: 'Atha Rizki', 
    lastName: 'Pangestu'
}


const ProfilImageElement = ({imageUrl} : {imageUrl: string}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 mt-10'>
        <Image src={imageUrl} width={200} height={200} alt="profil image" className='w-20 h-20 rounded-full' />
        <Label>Profile Image</Label>
    </div>
    )
}


type InputType = 'password' | 'email' | 'text'

const InputLabelElement = ({label, id,  type, value} : {label: string, id: string ,  type: InputType, value: string}) => {
    return (
        <>
            <Label htmlFor={id}>{label}</Label>
            <Input disabled readOnly id={id} type={type} value={value} />
        </>
    )
}





const page = () => {
    const { imageUrl, emailAddress, firstName, lastName } = currentUser;

    return (
        <div className='flex flex-col items-center justify-center w-full '>
            <ProfilImageElement imageUrl={imageUrl} />
            <div className='mt-8 w-1/2 grid gap-2 border border-white shadow-md shadow-neutral-700 rounded-lg p-5'>
                <InputLabelElement label="Email Address" id="emailAddress" type="email" value={emailAddress} />
                <InputLabelElement label="First Name" id="firstName" type="text" value={firstName} />
                <InputLabelElement label="Last Name" id="lastName" type="text" value={lastName} />
                <Button asChild>
                    <Link href='/user-profile' >Tap To Edit</Link>
                </Button>
            </div>
        
        </div>
    )
}   

export default page
