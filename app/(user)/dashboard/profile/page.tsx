import React from 'react'
import { Metadata } from 'next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'


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


type InputType = 'password' | 'email'

const InputLabelElement = ({label, type} : {label: string, type: InputType}) => {
    return (
        <>
            <Label >{label}</Label>
            <Input  />
        </>
    )
}


const ProfileInfoElement = () => {
    return (
        <div className='grid gap-2 mt-5 '>
            
        </div>
    )
}



const page = () => {
    const { imageUrl, emailAddress, firstName, lastName } = currentUser;

    return (
        <div className='py-10 px-7 md:px-10 '>
            <ProfilImageElement imageUrl={imageUrl} />
        
        </div>
    )
}   

export default page
