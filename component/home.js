import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Purchase from "../pages/Blog";
import SignUp from "../pages/Signup";
import { Route,Routes,Link } from "react-router-dom";
export default function Home(){
    return(
    <div>
    <img id='no1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEG_aH67NxwWj6-3BLkuWYs_7phSLrwPqpw&usqp=CAU"></img>
    <li>
    <Link to="/About">About</Link>
    <Routes>
   <Route path ="/About" element={<About/>}/>
    </Routes>
</li>
<li>
    <Link to="/Signup">SignUp</Link>
    <Routes>
   <Route path ="/Signup" element={<SignUp/>}/>
    </Routes>
    </li>
    <li>
    <Link to="/Purchase">Menu & orders</Link>
    <Routes>
   <Route path ="/Purchase" element={<Purchase/>}/>
    </Routes>
</li>
    
    <li>
    <Link to="/Contact">Contact</Link>
    <Routes>
   <Route path ="/Contact" element={<Contact/>}/>
    </Routes>
</li>
    </div>
    )
}