import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Nonveg from './Nonveg';
import Veg from './Veg';
import Footer from './Footer';
import Duplicate from './duplicate';
import { Route, Routes} from "react-router-dom";
import Login from "./Login";

function App() {

 

  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="Nonveg" element={<Nonveg/>}/>
        <Route path="Veg" element={<Veg/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="/Duplicate" element={<Duplicate/>}/>
        <Route path="Login" element={<Login/>}/>
      </Routes>
      
      
      
    </div>
     
    
  );


}

export default App;