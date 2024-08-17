import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/Navbar/Navbar"
import Footer from "./components/shared/Footer"



function App() {
  

  return (
    <>
      <Navbar/>
      <div>
       <Outlet/>
      </div>

      <Footer/>
    </>
  )
}

export default App
