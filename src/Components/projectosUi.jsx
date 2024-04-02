import React, { useState } from 'react'

import { Link } from 'react-router-dom';

const Cards = [
  { id: 1, name: 'Clone Youtube', image: "https://storage.googleapis.com/support-forums-api/attachment/thread-12066453-662973888757458025.png", path: 'https://www.figma.com/file/4m7Qi6fHkw8ILDlypvukTB/Untitled?type=design&node-id=7-830&mode=design&t=QUehzC7p8TGVAJQG-0' },
  { id: 2, name: 'Clone Google', image: 'https://img.olhardigital.com.br/wp-content/uploads/2022/02/Google.png', path: 'https://www.figma.com/file/4m7Qi6fHkw8ILDlypvukTB/Untitled?type=design&node-id=33-4360&mode=design&t=QUehzC7p8TGVAJQG-0' },
  { id: 3, name: 'Clone Spotify', image: "https://www.wikihow.com/images_en/thumb/4/4f/Log-in-to-Spotify-Step-9.jpg/v4-1200px-Log-in-to-Spotify-Step-9.jpg", path: 'https://www.figma.com/file/4m7Qi6fHkw8ILDlypvukTB/Untitled?type=design&node-id=55-109&mode=design&t=QUehzC7p8TGVAJQG-0' },
]

export const ProjectosUi = () => {
  const [design, setDesign] = useState(Cards)

  return (
    <div className='w-full max-w-[1500px] mx-auto p-[34px] md:w-[700px]'>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 my-8  '>
          {design.map((item, index)=> (
            <Link to={item.path} key={index}>
              <div className='bg-zinc-400 min-w-[120px] max-w-[230px] border  shadow-lg rounded hover:scale-105 object-cover duration-500'>
                <img src={item.image} alt={item.name} className='w-full flex h-[120px] sm:h-[120px] rounded-t'/>

                <div>
                <p className='px-2 py-1 text-sm md:text-md'>{item.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
    </div>
  )
}
