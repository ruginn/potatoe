import { SignInButton, SignOutButton } from "./Login/LoginButton"
import AuthCheck from "./AuthCheck"
import Link from "next/link"

export default function Navbar () {
    return (
        <nav className="relative flex w-screen justify-between h-12 items-center bg-slate-200 bg-opacity-10 border-b border-opacity-60 border-slate-600 z-10">
            <Link href='/' className="flex flex-row">
                <h1 className="text-4xl mx-2 cursor-pointer outline--text--1 font-bold text-transparent ">El</h1> 
                <h1 className="text-4xl font-bold cursor-pointer text-black">Potatoe</h1>
            </Link>
            {/* <h1 className="text-3xl m-3  cursor-pointer">El potatoe</h1> */}
            <ul className="flex">
                <li className="mx-3 cursor- text-black"><SignInButton/></li>
                <li className="mx-3 cursor-pointer text-black">
                    <AuthCheck>
                        <SignOutButton/>
                    </AuthCheck>
                </li>
                {/* <li className="mx-3 cursor-pointer">Register</li> */}
            </ul>
        </nav>
    )
}