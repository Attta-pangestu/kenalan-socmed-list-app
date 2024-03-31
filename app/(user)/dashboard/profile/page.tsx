import React from 'react'
import { Metadata } from 'next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import Link from 'next/link'
import { ClerkLoaded, ClerkLoading, currentUser } from '@clerk/nextjs'


export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'User',
    }
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





const page = async () => {
    const clerkCurrentUser : any = await currentUser();
    const { imageUrl, emailAddresses, firstName, lastName } = clerkCurrentUser;
    return (
        <div className='flex flex-col items-center justify-center w-full '>
            <ClerkLoaded>
                <ProfilImageElement imageUrl={imageUrl} />
            </ClerkLoaded>
            <ClerkLoaded>
                <div className='mt-8 w-1/2 grid gap-2 border border-white shadow-md shadow-neutral-700 rounded-lg p-5'>
                    <InputLabelElement label="Email Address" id="emailAddress" type="email" value={emailAddresses[0].emailAddress}  />
                    <InputLabelElement label="First Name" id="firstName" type="text" value={firstName} />
                    <InputLabelElement label="Last Name" id="lastName" type="text" value={lastName} />
                    <Button asChild>
                        <Link href='/user-profile' >Tap To Edit</Link>
                    </Button>
                </div>
            </ClerkLoaded>
            <ClerkLoading>
                    <div className='flex flex-col items-center justify-center gap-2 mt-10'>
                       <Skeleton className='w-20 h-20 rounded-full' />
                       <Skeleton className='w-24 h-5' />
                    </div>

                    <div className='mt-8 w-1/2 grid gap-2 border border-white shadow-md shadow-neutral-700 rounded-lg p-5'>
                    <Skeleton className='h-8' />
                    <Skeleton className='h-10' />
                    <Skeleton className='h-8' />
                    <Skeleton className='h-10' />
                    <Skeleton className='h-8' />
                    <Skeleton className='h-10' />
                    <Button asChild>
                        <Link href='/user-profile'>
                            <Skeleton className='h-10 w-full' />
                        </Link>
                    </Button>
    </div>


            </ClerkLoading>

        
        </div>
    )
}   

export default page
