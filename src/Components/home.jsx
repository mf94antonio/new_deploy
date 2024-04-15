import { useState } from "react"
import { Link } from "react-router-dom"
import { ReactTyped } from "react-typed"

const upDate = [
  {id: 1, name: 'Projectos Web', image: 'https://readwrite.com/wp-content/uploads/2022/08/Set-up-Your-PC-Room.jpg', path: "/projectos"},
  {id: 2, name: 'Projectos UI/UX', image: 'https://img.freepik.com/vetores-premium/tela-de-login-do-aplicativo-movel_74097-65.jpg', path: "/projectosUi"},
  {id: 3, name: 'Projectos Design', image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202307/why-design-thinking-is-important-in-todays-job-industries-132433-16x9.jpg?VersionId=r3DkuIlkjSZI0KClaN79ksVBKui34xNG', path: "/projectosUi"},
];

export const Home = () => {
  const [last, setLast] = useState(upDate);
  return (
  
  <div className="'w-full h-screen py-[34px] max-h-screen mx-auto p-[30px] flex flex-col gap-2 max-w-[1500px] md:w-[1020px]">
        <h1 className="w-full font-Roboto flex h-sceen text-sm sm:text-4xl md:text-6xl">
           <b>Hey, I´m Manuel- Full Stack</b><br/>
        </h1>
        <ReactTyped 
          className="font-bold text-xl md:text-4xl text-zinc-500"
          strings={['Developer', 'UI/UX', 'Design Gráfico']}
          typeSpeed={120}
          backSpeed={120}
          loop
          />
          <p className="text-zinc-500 text-xs md:text-sm">Transformando ideias em projetos, com códigos e design.</p>
          <button className="hover:bg-zinc-600 hover:text-lg hover:border-none border rounded-sm duration-300 py-2 w-40">
            <Link to="https://www.linkedin.com/in/manuel-ant%C3%B3nio-7954921a9/">
              Me contacte
            </Link>
          </button>
          {/* Apresentação e filtração dos drops */}
          <div className="mt-8">
            <div className="w-full flex justify-between border-b border-zinc-600 mb-4">
              <p className=" text-sm">Últimos Drops</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4  sm:grid-cols-3">
            {last.map((item, index)=>(
            
              <div  className="bg-zinc-600 border min-w-[120px] max-w-[230px] shadow-lg rounded hover:scale-105 object-cover duration-500"><Link to={item.path} key={index}>
                <img src={item.image} alt={item.name} className="w-full  flex h-[120px] sm:h-[120px]  rounded-t"/>
                <div>
                  <p className="py-1 px-2 text-sm md:text-md">
                    {item.name}
                  </p>
                </div></Link>
              </div>
            
              ))}
          </div>
  </div>

  )
}

