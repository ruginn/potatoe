import { SignInButton, SignOutButton } from "./Login/LoginButton"
import AuthCheck from "./AuthCheck"

export default function Navbar () {
    return (
        <div className="flex w-screen justify-between h-12 items-center bg-transparent border-b border-opacity-40 border-white">
            <div className="flex flex-row">
                <h1 className="text-4xl mx-2 cursor-pointer outline--text--1 font-bold text-transparent ">El</h1> 
                <h1 className="text-4xl font-bold cursor-pointer text-white">Potatoe</h1>
            </div>
            {/* <h1 className="text-3xl m-3  cursor-pointer">El potatoe</h1> */}
            <ul className="flex">
                <li className="mx-3 cursor- text-white"><SignInButton/></li>
                <li className="mx-3 cursor-pointer text-white">
                    <AuthCheck>
                        <SignOutButton/>
                    </AuthCheck>
                </li>
                {/* <li className="mx-3 cursor-pointer">Register</li> */}
            </ul>
        </div>
    )
}