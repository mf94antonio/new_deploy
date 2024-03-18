
import React, { useState } from "react";

import { Link } from "react-router-dom";
import Logo from "../img/ma.png";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Dropdown = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
      className="relative transition duration-700 ease-in-out ${showDropdown ? 'opacity-100 visible'"
    >
      {children && children(showDropdown)}
    </div>
  );
};

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  };

  return (
    <nav className="max-w-[1500px] border-b border-zinc-600">
      <div className=" max-w-[700px]  mx-auto flex flex-row w-full justify-between items-center py-1 px-[30px] gap-16 relative">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-8 sm:w-12 " />
        </Link>

        <ul className="hidden sm:flex md:flex lg:flex flex-row gap-4">
          <Dropdown>
            {(showDropdown) => (
              <>
                <Link to="#" className="hover:border-b-zinc-600 hover:border-b-4 pb-1">Sobre</Link>
                {showDropdown && (
                  <div className="w-60 border flex flex-col absolute left-1/2 transform -translate-x-1/2 translate-y-2 ease-in-out duration-1000">
                    <Link to="/sobreMim" className="hover:bg-zinc-600 p-4">
                      <h5>
                        <strong>Sobre mim</strong>
                      </h5>
                      <p className="text-zinc-500">
                        Conheça um pouco mais sobre mim e o que eu faço.
                      </p>
                    </Link>
                    <Link to="/projectos" className="hover:bg-zinc-600 px-4">
                      <h5>
                        <strong>Projectos Web</strong>
                      </h5>
                      <p className="text-zinc-500">
                        Todos os projetos que venho desenvolvendo durante a minha...
                      </p>
                    </Link>
                    <Link to="/projectosUi" className="hover:bg-zinc-600 p-4">
                      <h5>
                        <strong>Projectos UI/UX</strong>
                      </h5>
                      <p className="text-zinc-500">
                      Todos os projetos que venho desenvolvendo durante a minha...
                      </p>
                    </Link>
                  </div>
                )}
              </>
            )}
          </Dropdown>

          {/* Adicionar a mesma lógica de hover:bg-slate-700 para os Links dentro do segundo Dropdown */}
          <Dropdown>
            {(showDropdown) => (
              <>
                <Link to="#" className="hover:border-b-zinc-600 hover:border-b-4 pb-1">Setup</Link>
                {showDropdown && (
                  <div className="w-60 flex flex-col border absolute left-1/2 transform -translate-x-1/2 translate-y-2">
                    <Link to="/Equipamentos" className="hover:bg-zinc-600 p-4">
                      <h5>
                        <strong>Equipamentos</strong>
                      </h5>
                      <p className="text-zinc-500">
                        Conheça um pouco mais sobre os equipamentos que uso.
                      </p>
                    </Link>
                    <Link to="/stacks" className="hover:bg-zinc-600 px-4">
                      <h5>
                        <strong>Staks</strong>
                      </h5>
                      <p className="text-zinc-500">
                        Tecnologias e stacks que utilizo em meus projetos.
                      </p>
                    </Link>
                    <Link to="/Wallpapers" className="hover:bg-zinc-600 p-4">
                      <h5>
                        <strong>Wallpapers</strong>
                      </h5>
                      <p className="text-zinc-500">
                        Papéis de parede que eu mesmo desenvolvo.
                      </p>
                    </Link>
                  </div>
                )}
              </>
            )}
          </Dropdown>

          <li className="hover:border-b-zinc-600 hover:border-b-4">
            <Link to="Loja">Loja</Link>
          </li>
          <li className="hover:border-b-zinc-600 hover:border-b-4">
            <Link to="Livros">Livros</Link>
          </li>
          <li className="hover:border-b-zinc-600 hover:border-b-4">
            <Link to="Contacto">Contacto</Link>
          </li>
        </ul>
        
        <div onClick={handleNav} className="sm:hidden ">
          {!nav ? <AiOutlineClose  /> : <AiOutlineMenu />}
        </div>
        <div onClick={handleNav} 
        className={
          !nav 
          ? "overflow-y-hidden md:hidden absolute text-gray-300 left-0 top-10 w-full h-screen bg-black/90 ease-in duration-1000 px-4 py-7 flex flex-col" 
          : "absolute top-28 h-screen left-[-100%] ease-in duration-1000 "}>
          <ul className=" w-full flex flex-col justify-center gap-4 items-center p-4   sm:flex ">
          <Dropdown>
            {(showDropdown) => (
              <>
                <Link to="#" onClick={handleNav} className="border-zinc-600 border-b pb-1">Sobre</Link>
                {showDropdown && (
                  <div className="w-60 border flex flex-col left-1/2 transform ">
                    <Link to="/sobreMim" className="hover:bg-zinc-600 p-4">
                      <h5>
                        <strong>Sobre mim</strong>
                      </h5>
                      <p className="text-zinc-500">
                        Conheça um pouco mais sobre mim e o que eu faço.
                      </p>
                    </Link>
                    <Link to="/projectos" className="hover:bg-zinc-600 px-4">
                      <h5>
                        <strong>Projectos Web</strong>
                      </h5>
                      <p className="text-zinc-500">
                        Todos os projetos que venho desenvolvendo durante a minha...
                      </p>
                    </Link>
                    <Link to="/projectosUi" className="hover:bg-zinc-600 p-4">
                      <h5>
                        <strong>Projectos UI/UX</strong>
                      </h5>
                      <p className="text-zinc-500">
                      Todos os projetos que venho desenvolvendo durante a minha...
                      </p>
                    </Link>
                  </div>
                )}
              </>
            )}
          </Dropdown>

          {/* Adicionar a mesma lógica de hover:bg-slate-700 para os Links dentro do segundo Dropdown */}
          <Dropdown>
            {(showDropdown) => (
              <>
                <Link to="#" className="border-zinc-600 border-b pb-1">Setup</Link>
                {showDropdown && (
                  <div className="w-60 flex flex-col border left-1/2 ease-in duration-1000">
                    <Link to="/Equipamentos" className="hover:bg-zinc-600 p-4">
                      <h5>
                        <strong>Equipamentos</strong>
                      </h5>
                      <p className="text-zinc-500">
                        Conheça um pouco mais sobre os equipamentos que uso.
                      </p>
                    </Link>
                    <Link to="/stacks" className="hover:bg-zinc-600 px-4">
                      <h5>
                        <strong>Stacks</strong>
                      </h5>
                      <p className="text-zinc-500">
                        Tecnologias e stacks que utilizo em meus projetos.
                      </p>
                    </Link>
                    <Link to="/Wallpapers" className="hover:bg-zinc-600 p-4">
                      <h5>
                        <strong>Wallpapers</strong>
                      </h5>
                      <p className="text-zinc-500">
                        Papéis de parede que eu mesmo desenvolvo.
                      </p>
                    </Link>
                  </div>
                )}
              </>
            )}
          </Dropdown>

          <li className="border-zinc-600 border-b">
            <Link to="Loja">Loja</Link>
          </li>
          <li className="border-zinc-600 border-b">
            <Link to="Livros">Livros</Link>
          </li>
          <li className="border-zinc-600 border-b">
            <Link to="Contacto">Contacto</Link>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};