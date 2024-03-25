import { Outlet } from "react-router-dom";
import { Navbar } from "./Components/navbar";
import { Footer } from "./Components/footer";


 function App() {
 

  return (
    <div>
      
      <Navbar />
      
      <Outlet />

      <Footer />
    </div>
    
     
  )
}
export default App

