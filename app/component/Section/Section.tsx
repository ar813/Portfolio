'use client'

import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import Image from "next/image"
import wevDeveloper from "../../../public/images/WebDeveloper.png"
import illustration from "../../../public/images/illustration.png"
import Microphone from "../../../public/images/Microphone.png"
import gameDevelopment from "../../../public/images/game-development.png"
import Photographer from "../../../public/images/Photographer.png"

const Section = () => {

    useEffect(() => {
        AOS.init({
            duration: 700,
            offset: 100,
        });
    }, []);

    return (
        <div className="p-5 min-[425px]:px-12 sm:px-15 mb-12">

            <div className="mb-6" >
                <h1 className="text-center font-bold text-3xl lg:text-4xl mt-9 mb-5">My <span className="text-[#FCB919]">Services</span></h1>
                <p className="text-center">Bringing your ideas to life with clean, creative, and user-friendly web solutions. </p>
            </div>

            <div className="grid grid-cols-1 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 min-[1100px]:grid-cols-4 sm:[&>*]:mt-4 hover:[&>*]:shadow-[0px_0px_10px_gray]">

                <div data-aos="flip-right" className="bg-slate-200  p-4 flex flex-col items-center mt-10 rounded-[10px]">
                    <Image src={wevDeveloper} alt="wevDeveloper"></Image>
                    <h1 className="text-lg font-medium my-2">Web Development</h1>
                    <p className="text-center text-sm">Creating visually appealing and functional websites tailored to your specific needs.</p>
                </div>

                <div data-aos="flip-left" className="bg-slate-200 p-4 flex flex-col items-center mt-10  rounded-[10px]">
                    <Image src={illustration} alt="wevDeveloper"></Image>
                    <h1 className="text-lg font-medium my-2">UI/UX Design</h1>
                    <p className="text-center text-sm">Creating visually appealing, user-centric designs that enhance usability and engagement.</p>
                </div>

                <div data-aos="flip-right" className="bg-slate-200 p-4 flex flex-col items-center mt-10 rounded-[10px] pb-8">
                    <Image src={Microphone} alt="wevDeveloper"></Image>
                    <h1 className="text-lg font-medium my-2">Graphic Designing</h1>
                    <p className="text-center text-sm">Creative design solutions for visually impactful digital and print media.</p>
                </div>

                <div data-aos="flip-left" className="bg-slate-200 p-4 flex flex-col items-center mt-10 rounded-[10px]">
                    <Image src={Photographer} alt="wevDeveloper"></Image>
                    <h1 className="text-lg font-medium my-2">Interactive Applications</h1>
                    <p className="text-center text-sm">Creating dynamic, user-focused applications with seamless interactivity and engaging experiences.</p>
                </div>

                <div data-aos="flip-right" className="bg-slate-200 p-4 flex flex-col items-center mt-10 rounded-[10px]">
                    <Image src={gameDevelopment} alt="wevDeveloper"></Image>
                    <h1 className="text-lg font-medium my-2">Web Animation</h1>
                    <p className="text-center text-sm">Integrating CSS animations and JavaScript libraries for engaging user interactions.</p>
                </div>

                <div data-aos="flip-left" className="bg-slate-200 p-4 flex flex-col items-center mt-10 rounded-[10px] pb-8">
                    <Image src={wevDeveloper} alt="wevDeveloper"></Image>
                    <h1 className="text-lg font-medium my-2">App Development</h1>
                    <p className="text-center text-sm">Interactive app deployment with best user interface.</p>
                </div>
            </div>
        </div>
    )
}

export default Section