import {FaHtml5, FaReact, FaPhp, FaDatabase, FaGithub, FaGitAlt  } from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";


export const Tecnologias = () => {
  return (
    <div className="max-w-[1500px]">
    <div className="'w-full py-[34px] max-h-screen mx-auto p-[30px] flex flex-col gap-2 md:w-[700px] my-8">
        {/* HTML $ CSS */}
      <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <FaHtml5 size={50} color='#ea580c' className='hidden sm:flex'/>
        <div className="w-full h-10  bg-orange-600 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[430px] h-full flex items-center bg-zinc-300 rounded-full px-2'>HTML & CSS</h5>
            <h5 className='pr-2 '>75%</h5>
        </div>
      </div>

      {/* JAVASCRIPT */}
      <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <TbBrandJavascript size={60} color='#e4c214' className='hidden sm:flex'/>
        <div className="w-full h-10 bg-yellow-400 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[310px] h-full flex items-center bg-zinc-300 rounded-full px-2'>JAVASCRIPT</h5>
            <h5 className='pr-2 '>50%</h5>
        </div>
      </div>

      {/* REACT.JS */}
      <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <FaReact size={60} color='#60a5fa' className='hidden sm:flex'/>
        <div className="w-full h-10 bg-blue-400 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[290px] h-full flex items-center bg-zinc-300 rounded-full px-2'>REACT JS</h5>
            <h5 className='pr-2 '>45%</h5>
        </div>
      </div>

       {/* TailwindCss */}
       <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <SiTailwindcss size={60} color='#60a5fa' className='hidden sm:flex'/>
        <div className="w-full h-10 bg-blue-400 rounded-full flex justify-between items-center text-white">
            
            <h5 className='w-[290px] h-full flex items-center bg-black rounded-full px-2'>TAILWINDCSS</h5>
            <h5 className='pr-2 '>45%</h5>
        </div>
      </div>

       {/* GIT */}
       <div className='flex gap-2 items-center w-full md:max-w-[700px] hover:scale-105 duration-1000'>
        <FaGitAlt size={60} color='#eed94e' className='hidden sm:flex'/>
        <div className="w-full max-w-[580px] h-10 bg-red-500 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[550px] h-full flex items-center bg-green-400 rounded-full px-2'>PHP</h5>
            <h5 className='pr-2 '>90%</h5>
        </div>
      </div>

       {/* GITHUB */}
       <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <FaGithub size={60} color='#5a5a5b' className='hidden sm:flex'/>
        <div className="w-full h-10 bg-gray-400 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[500px] h-full flex items-center bg-zinc-300 rounded-full px-2'>PHP</h5>
            <h5 className='pr-2 '>80%</h5>
        </div>
      </div>

      {/* PHP */}
      <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <FaPhp size={60} color='#c084fc' className='hidden sm:flex'/>
        <div className="w-full h-10 bg-purple-400 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[150px] h-full flex items-center bg-zinc-300 rounded-full px-2'>PHP</h5>
            <h5 className='pr-2 '>25%</h5>
        </div>
      </div>

       {/* BASE DE DADOS */}
       <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <FaDatabase size={60} color='#082f49' className='hidden sm:flex'/>
        <div className="w-full h-10 bg-sky-950 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[310px] h-full flex items-center bg-orange-600 rounded-full px-2'>BASE DE DADOS</h5>
            <h5 className='pr-2 '>50%</h5>
        </div>
      </div>

    </div>   
    </div>
  )
}
