import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='w-full max-w-[1500px] overflow-hidden fixed sm:bottom-0 bottom-8 px-4 flex justify-end sm:justify-center sm:items-center sm:px-4'>
        <ul className=' max-h-[200px] max-w-[60px] sm:max-h-[80px] sm:max-w-[500px]  w-full border gap-4  sm:gap-12 rounded-md p-4 flex flex-col sm:flex-row justify-center items-center'>
            <li >
                <Link to="https://www.linkedin.com/in/manuel-ant%C3%B3nio-7954921a9/">
                    <FaLinkedin className='text-2xl hover:text-6xl sm:text-3xl md:text-4xl '/>
                </Link>
            </li>
            <li>
                <Link to="https://instagram.com/manuell_antuan">
                    <FaInstagram className='text-2xl hover:text-6xl sm:text-3xl md:text-4xl'/>
                </Link>
            </li>
            <li>
                <Link to="https://web.whatsapp.com/wa.me/244930672171/">
                <   FaWhatsapp className='text-2xl hover:text-6xl sm:text-3xl md:text-4xl'/>
                </Link>
            </li>
            <li>
                <Link to="https://github.com/mf94antonio/">
                 <FaGithub className='text-2xl hover:text-6xl sm:text-3xl md:text-4xl'/>
                </Link>
            </li>
           
            
        </ul>
    </footer>
  )
}

