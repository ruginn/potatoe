'use client'
import {useSession, signIn, signOut} from 'next-auth/react'
import Link from 'next/link'

export const SignInButton = () => {
    const {data: session, status} = useSession()
    if (status === 'loading') {
        return <>...</>
    }
    if (status === 'authenticated'){
        return (
            <Link href={'/'}>
                <p>{session?.user?.name}</p>
            </Link>
        )
    }
    return <button onClick={()=>signIn()}>Sign In</button>
}

export const SignOutButton = () => {
    return <button onClick={()=>signOut()}>Sign Out</button>
}