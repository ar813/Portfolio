"use client"
import { useEffect } from 'react';
import 'aos/dist/aos.css';
// @ts-ignore
import AOS from 'aos';



import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import ProfiePic from "../../../public/images/profile.png"
import { FaGithub } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import Link from 'next/link';




const Hero = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 200, 
        });
      }, []);

    return (
        <div className='sm:flex items-center justify-center mt-12 sm:mt-24 '>

            <div data-aos="fade-right">
                <Image src={ProfiePic} alt="ProfiePic" className='w-40 mx-auto sm:w-64'></Image>
            </div>

            <div className="px-5" data-aos="fade-left">
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
                <div className='flex justify-center pt-5 group '>
                    <Link href="https://github.com/ar813" target="_blank"><button className='p-2 border rounded-[30px] border-black flex items-center group-hover:bg-black group-hover:text-white transition duration-100'>Github <FaGithub className='text-xl ml-2' /></button></Link>
                    <Link href="https://www.linkedin.com/in/arsalan-khan-03670b2ba/" target="_blank"><button className='p-2 border rounded-[30px] bg-black text-white ml-2 flex items-center group-hover:bg-white group-hover:text-black hover:border group-hover:border-black transition duration-100'>HIRE ME <TiArrowRight className='text-2xl ml-2' /></button></Link>
                </div>
            </div>

        </div>
    )
}

export default Hero