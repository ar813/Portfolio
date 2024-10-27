"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/images/logo.png"
import { IoReorderThreeSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";


const NavBar = () => {

    const [nav, setnav] = useState(false);
    const [icon, setIcon] = useState(<IoReorderThreeSharp className="text-3xl sm:text-4xl" />);

    function showNav() {
        setnav(!nav);
        setIcon(nav ? (<IoReorderThreeSharp className="text-3xl sm:text-4xl" />) : (<ImCross className="text-[20px] mt-2 sm:text-2xl " />));
    }

    return (
        <div>
            <header className="p-5 flex justify-between text-gray-600">
                <div className="flex font-medium items-center text-gray-900">
                    <Image src={logo} alt="logo" className="w-8 h-8 sm:w-10 sm:h-10"></Image>
                    <span className="ml-3 text-lg sm:text-xl">Arsalan Khan</span>
                </div>

                <div>
                    <button onClick={showNav} className="sm:hidden">{icon}</button>
                </div>

                <nav className="w-1/3 hidden sm:block">
                    <ul className="flex [&>*]:mr-6 text-lg justify-center mr-36 lg:mr-0 mt-1">
                        <li className="hover:bg-black hover:text-white p-1 rounded-[6px]"><Link href="/">Home</Link></li>
                        <li className="hover:bg-black hover:text-white p-1 rounded-[6px]"><Link href="/">About</Link></li>
                        <li className="hover:bg-black hover:text-white p-1 rounded-[6px]"><Link href="/">Projects</Link></li>
                        <li className="hover:bg-black hover:text-white p-1 rounded-[6px]"><Link href="/">Contact</Link></li>
                    </ul>
                </nav>

            </header>

            <nav className={`w-[90%] mx-auto  ${nav ? "block" : "hidden"} bg-gray-100 `}>
                <ul className="[&>*]:w-full">
                    <li className="hover:bg-black hover:text-white p-1 rounded-[4px]"><Link href="/">Home</Link></li>
                    <li className="hover:bg-black hover:text-white p-1 rounded-[4px]"><Link href="/">About</Link></li>
                    <li className="hover:bg-black hover:text-white p-1 rounded-[4px]"><Link href="/">Projects</Link></li>
                    <li className="hover:bg-black hover:text-white p-1 rounded-[4px]"><Link href="/">Contact</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default NavBar