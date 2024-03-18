import React, { useState } from 'react'
import Mouse  from '../img/mouse.webp';
import  pc  from '../img/pc.jpeg';

import luz  from '../img/luz.jpg';
import { Link } from 'react-router-dom';
const Card = [
    { id: 1, name: 'To Do List', image: Mouse, path: "https://mf94antonio.github.io/todo_react_vite_deploy/" },
    { id: 2, name: 'Sistema', image: pc, path: "https://mf94antonio.github.io/meuprimeiroreact/" },
    { id: 3, name: 'Toggle', image: luz, path: "https://mf94antonio.github.io/desafio.final.rocketseat/" },
];

export const Projectos = () => {
  const [web, setWeb] = useState(Card);
 

  
  return (
    
    <div className='w-full max-w-[1500px] mx-auto p-[34px] md:w-[700px]'>

        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 my-8'>
          {web.map((item, index)=> (
            <Link to={item.path} key={index}>
              <div className='border shadow-lg rounded hover:scale-105 object-cover duration-500'>
                <img src={item.image} alt={item.name} className='flex w-full h-[120px] '/>

                <div>
                <p className='py-1 px-2'>{item.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
    </div>
  )
}
