
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
import SignUp from "./SignUp";
function App() {
  return (
    <>
    <header>
            <nav>
              <div className="logo"><span>G</span><b>M</b><c>A</c><d>N</d> Appliances</div><br></br>
              <ul>
              <li><a style={{
                  textDecoration:"none",
                  color:"white"
                }} href='/home'>Home</a> </li>
                <li><a style={{
                  textDecoration:"none",
                  color:"white"
                }} href='/product'>Purchase</a> </li>
                <li><a style={{
                  textDecoration:"none",
                  color:"white"
                }} href='/login'>Sign In</a> </li>
                <li><a style={{
                  textDecoration:"none",
                  color:"white"
                }} href='/signup'>SignUp</a> </li>
                <br/>
              </ul>
            </nav>
          </header>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/signup' element={<SignUp/>} />
        
       
         
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;