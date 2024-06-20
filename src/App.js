
import '@fortawesome/fontawesome-free/css/all.css';
import { Route,Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from './Pages/Home';

import Menu from "./Pages/Menu";
import Booktable from './Pages/Booktable';

import Navbarr from './Components/Navbar/Navbarr';
import Footer from './Components/Footer/Footer';
function App() {
  return (
   <>
   <Navbarr/>
    <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/foodmenu" element={<Menu/>}/>
        <Route path="/booking" element={<Booktable/>}/>

    </Routes>
    <Footer/>
   </>
  );
}

export default App;
