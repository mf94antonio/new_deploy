import React from 'react'
import About from '../img/about.jpg'

export const SobreMim = () => {
  return (
    <div className='max-w-[1500px]'>
      <div className='max-h-[500px] mx-auto md:max-w-[1000px] flex flex-col sm:flex-row gap-16 p-[34px]'>
        <img src={About} alt="Manuell" className='w-2/5 min-h-[200px] max-h-[400px]  rounded' />
        <div className='w-ful max-w-[1000px] p-2 sm:p-4 md:p-8'>
          <h1 className='w-full text-xs sm:text-md md:text-2xl lg:text-2xl font-bold text-center'>DESENVOLVIMENTO WEB:</h1>
          <p className='text-xs w-full md:text-xl'>
          Manuel António é um talentoso desenvolvedor web com uma sólida expertise em tecnologias de ponta, destacando-se em HTML, CSS, JavaScript, React JS, Tailwind CSS, PHP, Laravel e Base De Dados.
          
          </p>
          <p className='text-xs w-full md:text-xl'>
            Minha paixão pelo desenvolvimento front-end, especialmente com foco no React JS e Laravel, é evidenciada em projetos inovadores e interfaces dinâmicas que cativam os usuários.
            </p>
        </div>

        

        
      </div>
      
    </div>
  )
}
