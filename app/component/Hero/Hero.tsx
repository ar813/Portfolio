"use client"
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import ProfiePic from "../../../public/images/profile.png"
import { FaGithub } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";




const Hero = () => {
    return (
        <div className='sm:flex items-center justify-center mt-12 sm:mt-24 '>

            <div>
                <Image src={ProfiePic} alt="ProfiePic" className='w-40 mx-auto sm:w-64'></Image>
            </div>

            <div className="px-5">
                <h1 className="font-[sans-serif] text-center">
                    <span className='text-sm sm:text-xl text-gray-600'>Hello&#44; I&apos;m</span>
                    <br />
                    <span className='text-2xl sm:text-3xl font-bold'>Arsalan Khan</span>
                    <br />
                    <span className='text-gray-600 text-xl sm:text-2xl font-medium'>
                        <Typewriter
                            options={{
                                strings: ['Full Stack Developer', 'UI/UX Designer', 'Graphic Designer', 'Web Developer',],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h1>
                <div className='flex justify-center pt-5'>
                    <button className='p-2 border rounded-[30px] border-black flex items-center hover:bg-black hover:text-white'>Github <FaGithub className='text-xl ml-2' /></button>
                    <button className='p-2 border rounded-[30px] bg-black text-white ml-2 flex items-center hover:bg-white hover:text-black hover:border hover:border-black'>Contact <IoIosContact className='text-2xl ml-2' /></button>
                </div>
            </div>

        </div>
    )
}

export default Hero