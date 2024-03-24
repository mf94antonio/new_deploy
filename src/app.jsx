import { Outlet } from "react-router-dom";
import { Navbar } from "./Components/navbar";
import { Footer } from "./Components/footer";


export default function App() {
 

  return (
    <div>
      
      <Navbar />
      
      <Outlet />

      <Footer />
    </div>
    
     
  )
}


