import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { TbBrandFigma } from "react-icons/tb";


const Skills = () => {
    return (
        <div className="p-5 min-[425px]:px-12 mb-12">

            <h1 className="text-center font-bold text-3xl lg:text-4xl"><span className="text-[#FCB919]">My</span> Skills</h1>
            <p className="mb-14 text-center mt-5">Crafting seamless, efficient, and modern solutions with a diverse set of programming languages and technologies.</p>
            
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-10 hover:[&>*]:shadow-[0px_0px_10px_gray]">

                <div className=" p-4 rounded-[10px] bg-slate-200">
                    <h1 className="text-xl mb-3"><FaHtml5 className="text-[#FCB919] mr-2 inline text-2xl" />HTML</h1>
                    <div className="h-[5px] w-[100%] bg-white rounded-[30px]">
                        <div className="h-[5px] w-[100%] bg-[#FCB919] rounded-[30px]"></div>
                    </div>
                    <div className="w-[100%] flex justify-end mt-3 text-[#FCB919] font-bold">
                        <p>100%</p>
                    </div>
                </div>

                <div className=" p-4 rounded-[10px] bg-slate-200">
                    <h1 className="text-xl mb-3"><IoLogoCss3 className="text-[#FCB919] mr-2 inline text-2xl" />CSS</h1>
                    <div className="h-[5px] w-[100%] bg-white rounded-[30px]">
                        <div className="h-[5px] w-[100%] bg-[#FCB919] rounded-[30px]"></div>
                    </div>
                    <div className="w-[100%] flex justify-end mt-3 text-[#FCB919] font-bold">
                        <p>100%</p>
                    </div>
                </div>
   
                <div className=" p-4 rounded-[10px] bg-slate-200">
                    <h1 className="text-xl mb-3"><RiTailwindCssFill className="text-[#FCB919] mr-2 inline text-2xl" />Tailwind css</h1>
                    <div className="h-[5px] w-[100%] bg-white rounded-[30px]">
                        <div className="h-[5px] w-[100%] bg-[#FCB919] rounded-[30px]"></div>
                    </div>
                    <div className="w-[100%] flex justify-end mt-3 text-[#FCB919] font-bold">
                        <p>100%</p>
                    </div>
                </div>

                <div className=" p-4 rounded-[10px] bg-slate-200">
                    <h1 className="text-xl mb-3"><IoLogoJavascript  className="text-[#FCB919] mr-2 inline text-2xl" />JavaScript</h1>
                    <div className="h-[5px] w-[100%] bg-white rounded-[30px]">
                        <div className="h-[5px] w-[90%] bg-[#FCB919] rounded-[30px]"></div>
                    </div>
                    <div className="w-[100%] flex justify-end mt-3 text-[#FCB919] font-bold">
                        <p>90%</p>
                    </div>
                </div>

                <div className=" p-4 rounded-[10px] bg-slate-200">
                    <h1 className="text-xl mb-3"><SiTypescript className="text-[#FCB919] mr-2 inline text-2xl" />TypeScript</h1>
                    <div className="h-[5px] w-[100%] bg-white rounded-[30px]">
                        <div className="h-[5px] w-[90%] bg-[#FCB919] rounded-[30px]"></div>
                    </div>
                    <div className="w-[100%] flex justify-end mt-3 text-[#FCB919] font-bold">
                        <p>90%</p>
                    </div>
                </div>

                <div className=" p-4 rounded-[10px] bg-slate-200">
                    <h1 className="text-xl mb-3"><SiNextdotjs  className="text-[#FCB919] mr-2 inline text-2xl" />NEXT JS</h1>
                    <div className="h-[5px] w-[100%] bg-white rounded-[30px]">
                        <div className="h-[5px] w-[80%] bg-[#FCB919] rounded-[30px]"></div>
                    </div>
                    <div className="w-[100%] flex justify-end mt-3 text-[#FCB919] font-bold">
                        <p>80%</p>
                    </div>
                </div>

                <div className=" p-4 rounded-[10px] bg-slate-200">
                    <h1 className="text-xl mb-3"><SiAdobephotoshop  className="text-[#FCB919] mr-2 inline text-2xl" />Photoshop</h1>
                    <div className="h-[5px] w-[100%] bg-white rounded-[30px]">
                        <div className="h-[5px] w-[70%] bg-[#FCB919] rounded-[30px]"></div>
                    </div>
                    <div className="w-[100%] flex justify-end mt-3 text-[#FCB919] font-bold">
                        <p>70%</p>
                    </div>
                </div>

                <div className=" p-4 rounded-[10px] bg-slate-200">
                    <h1 className="text-xl mb-3"><TbBrandFigma   className="text-[#FCB919] mr-2 inline text-2xl" />Figma Cloning</h1>
                    <div className="h-[5px] w-[100%] bg-white rounded-[30px]">
                        <div className="h-[5px] w-[100%] bg-[#FCB919] rounded-[30px]"></div>
                    </div>
                    <div className="w-[100%] flex justify-end mt-3 text-[#FCB919] font-bold">
                        <p>100%</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Skills