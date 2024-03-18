import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './index.css'

// 1- Config. router 
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import { Home } from './Components/home.jsx';

import { Sobre } from './Components/sobre.jsx';
import { SobreDetails } from './Components/sobreDetails.jsx';
import { SobreMim } from './Components/sobreMim.jsx';
import { Projectos } from './Components/projectos.jsx';
import { ProjectosUi } from './Components/projectosUi.jsx';

import { ErrorPage } from './Components/errorPage.jsx';
import { Contacto } from './Components/contacto.jsx';
import { ContactDetails } from './Components/contactDetails.jsx';


import { Setup } from './Components/setup.jsx';
import { SetupDetails } from './Components/setupDetails.jsx';
import { Equipamentos } from './Components/equipamentos.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3- Pagg de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contacto",
        element: <Contacto />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "sobreMim",
        element: <SobreMim />,
      },
      {
        path: "projectos",
        element: <Projectos />,
      },
      {
        path: "projectosUi",
        element: <ProjectosUi />,
      },
      {
        path: "sobre/:id",
        element: <SobreDetails />,
      },
     
      // 4- nested routes -identificador unico
      {
        path: "contacto/:id",
        element: <ContactDetails />,
      },
      //  7- navigate para pag inexstente
      {
        path: "oldContact",
        element: <Navigate to="/Contact" />,
      },
      {
        path: "setup",
        element: <Setup />,
      },
      {
        path: "setup/:id",
        element: <SetupDetails />,
      },
      {
        path: "equipamentos",
        element: <Equipamentos />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
