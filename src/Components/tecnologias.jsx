import {FaHtml5, FaReact, FaPhp, FaDatabase, FaGithub, FaGitAlt  } from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";


export const Tecnologias = () => {
  return (
    <div className="max-w-[1500px]">
    <div className="'w-full py-[34px] max-h-screen mx-auto p-[30px] flex flex-col gap-2 md:w-[1000px] my-8">
      <h1 className='mx-auto font-extrabold text-4xl mb-12 '>TECNOLOGIAS QUE ENTENDO</h1>
        {/* HTML $ CSS */}
      <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <FaHtml5 size={50} color='#ea580c' className='hidden sm:flex'/>
        <div className="w-full h-10 bg-zinc-600 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[300px] h-full flex items-center bg-zinc-300 rounded-full px-2'>HTML & CSS</h5>
           
        </div>
      </div>

      {/* JAVASCRIPT */}
      <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <TbBrandJavascript size={60} color='#e4c214' className='hidden sm:flex'/>
        <div className="w-full h-10 bg-zinc-600 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[300px] h-full flex items-center bg-zinc-300 rounded-full px-2'>JAVASCRIPT</h5>
            
        </div>
      </div>

      {/* REACT.JS */}
      <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <FaReact size={60} color='#60a5fa' className='hidden sm:flex'/>
        <div className="w-full h-10 bg-zinc-600 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[300px] h-full flex items-center bg-zinc-300 rounded-full px-2'>REACT JS</h5>
         
        </div>
      </div>

       {/* TailwindCss */}
       <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <SiTailwindcss size={60} color='#60a5fa' className='hidden sm:flex'/>
        <div className="w-full h-10 bg-zinc-600 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[300px] h-full flex items-center bg-zinc-300  rounded-full px-2'>TAILWINDCSS</h5>
            
        </div>
      </div>

       {/* GIT */}
       <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <FaGitAlt size={60} color='#eed94e' className='hidden sm:flex'/>
        <div className="w-full h-10 bg-zinc-600 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[300px] h-full flex items-center bg-zinc-300  rounded-full px-2'>Git</h5>
            
        </div>
      </div>

       {/* GITHUB */}
       <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <FaGithub size={60} color='#5a5a5b' className='hidden sm:flex'/>
        <div className="w-full h-10 bg-zinc-600 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[300px] h-full flex items-center bg-zinc-300 rounded-full px-2'>Github</h5>
         
        </div>
      </div>

      {/* PHP */}
      <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <FaPhp size={60} color='#c084fc' className='hidden sm:flex'/>
        <div className="w-full h-10 bg-zinc-600 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[300px] h-full flex items-center bg-zinc-300 rounded-full px-2'>PHP</h5>
            
        </div>
      </div>

       {/* BASE DE DADOS */}
       <div className='flex gap-2 items-center w-full hover:scale-105 duration-1000'>
        <FaDatabase size={60} color='#082f49' className='hidden sm:flex'/>
        <div className="w-full h-10 bg-zinc-600 rounded-full flex justify-between items-center font-bold text-black">
            
            <h5 className='w-[300px] h-full flex items-center bg-zinc-300  rounded-full px-2'>BASE DE DADOS</h5>
            
        </div>
      </div>

    </div>   
    </div>
  )
}
