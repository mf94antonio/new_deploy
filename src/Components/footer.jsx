import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='w-full max-w-[1500px] overflow-hidden fixed bottom-8 px-4 flex justify-center items-center sm:px-4'>
        <ul className=' max-h-[80px]  w-full border max-w-[500px] gap-4 rounded-md py-4 flex flex-row justify-center items-center px-4'>
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

