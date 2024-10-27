import Image from "next/image"
import AboutPic from "../../../public/images/about.jpeg"

const About = () => {
    return (
        <div className="mt-40 lg:py-20 bg-gray-200 p-5 py-10">

            <div>
                <h1 className="text-center font-bold text-3xl lg:text-4xl text-red-500 mb-5">About <span className="text-black">Me</span></h1>
                <p className="text-justify lg:text-lg sm:text-center sm:mb-8">Bringing Ideas to Life Through Clean Code and Creative Design, Crafting Modern Web Experiences with Passion and Precision.</p>
            </div>

            <div className="sm:flex sm:justify-center">
                <div className="sm:w-[45%] xl:flex xl:items-center xl:justify-center">
                    <Image src={AboutPic} alt="AboutPic" className="my-8 xl:w-[450px]"></Image>
                </div>
                <div className="sm:w-[45%] sm:ml-10 xl:ml-4 sm:mt-7">
                    <h1 className="font-medium text-xl mb-5">Developer <span className="text-red-600">&amp; Designer</span></h1>
                    <p className="text-justify lg:text-lg">I&apos;m Muhammad Arsalan Khan&#44; a dedicated web developer with a passion for creating dynamic&#44; responsive&#44; and user friendly websites. With a strong foundation in front end and back end development&#44; I specialize in turning ideas into functional and visually engaging digital experiences. My goal is to design and develop websites that not only look great but also deliver seamless performance across all devices. Let&apos;s build something amazing together.</p>
                        <button className="p-2 lg:text-lg bg-red-600 rounded-[20px] xl:rounded-[25px] text-white hover:bg-red-500 mt-5" >Read More</button>
                </div>
            </div>

        </div>
    )
}

export default About