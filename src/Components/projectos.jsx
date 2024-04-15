import React, { useState } from 'react'
import Todo  from '../img/todo.png';
import  Toggle  from '../img/toggle.png';
import Check from '../img/check-in.png';

import luz  from '../img/luz.jpg';
import { Link } from 'react-router-dom';
const Card = [
    { id: 1, name: 'Lista De Check-In', image: Check, path: "https://github.com/mf94antonio/List_check-in" },
    { id: 2, name: 'To Do List', image: Todo, path: "https://mf94antonio.github.io/todo_react_vite_deploy/" },
    { id: 3, name: 'Toggle', image: Toggle, path: "https://github.com/mf94antonio/desafio.final.rocketseat" },
    
];

export const Projectos = () => {
  const [web, setWeb] = useState(Card);
 

  
  return (
    
    <div className='w-full max-w-[1500px] mx-auto p-[34px] md:w-[700px]'>

        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 my-8'>
          {web.map((item, index)=> (
            <Link to={item.path} key={index}>
              <div className='bg-zinc-400 min-w-[120px] max-w-[230px] border shadow-lg rounded hover:scale-105 object-cover duration-500'>
                <img src={item.image} alt={item.name} className='flex w-full h-[120px] sm:h-[120px] rounded-t object-center'/>

                <div>
                <p className='py-1 px-2 text-sm md:text-md'>{item.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
    </div>
  )
}
