import { useState } from "react"
import { Link } from "react-router-dom"
import { ReactTyped } from "react-typed"

const upDate = [
  {id: 1, name: 'Projectos Web', image: 'https://img.freepik.com/fotos-gratis/computador-telemovel-e-portatil-em-mesa-preta-renderizacao-3d_1142-40355.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704672000&semt=ais', path: "/projectos"},
  {id: 1, name: 'Projectos UI/UX', image: 'https://img.freepik.com/vetores-premium/tela-de-login-do-aplicativo-movel_74097-65.jpg', path: "/projectosUi"},
];

export const Home = () => {
  const [last, setLast] = useState(upDate);
  return (
  
  <div className="'w-full py-[34px] max-h-screen mx-auto p-[30px] flex flex-col gap-2 md:w-[700px]">
        <h1 className="w-full font-Roboto flex h-sceen text-sm sm:text-2xl md:text-4xl">
           <b>Hey, I´m Manuel- Front-end</b><br/>
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
            <div className="w-full flex justify-between border-b border-zinc-600">
              <p className="text-zinc-600 text-sm">Últimos Drops</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-clos-3">
            {last.map((item, index)=>(
            <Link to={item.path} key={index}>
              <div className="border max-w-[280px] shadow-lg rounded hover:scale-105 object-cover duration-500">
                <img src={item.image} alt={item.name} className="w-full  flex h-[100px] sm:h-[120px] rounded-t"/>
                <div>
                  <p className="py-1 px-2 text-sm md:text-md">
                    {item.name}
                  </p>
                </div>
              </div>
            </Link>
              ))}
          </div>
  </div>

  )
}

