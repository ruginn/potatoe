export default function Navbar () {
    return (
        <div className="flex w-full justify-between h-12 items-center">
            <div className="flex flex-row">
                <h1 className="text-3xl mx-2 cursor-pointer outline--text--1 text-transparent">El</h1> 
                <h1 className="text-3xl cursor-pointer">Potatoe</h1>
            </div>
            {/* <h1 className="text-3xl m-3  cursor-pointer">El potatoe</h1> */}
            <ul className="flex">
                <li className="mx-3 cursor-pointer">Login</li>
                <li className="mx-3 cursor-pointer">Register</li>
            </ul>
        </div>
    )
}