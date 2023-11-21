import react from 'react';
import './Login.css';
import Footer from './Footer';
function app()
{
  return(
    <>
    <div className="lock">
      
      <center>
    <img src="https://media.istockphoto.com/id/936681148/vector/lock-icon.jpg?s=612x612&w=0&k=20&c=_0AmWrBagdcee-KDhBUfLawC7Gh8CNPLWls73lKaNVA="></img>
    <h2>Sign In</h2>
    <form>
      <input type="text"placeholder="Username*"></input>
      <input type="password"placeholder="Password*"></input>
      <div  className="rem">
      <input type="checkbox"></input>
      <label for="checkbox">Remember Me</label>
      </div>
      <button>Sign IN</button>
    </form>  
    </center>
    </div>
    <Footer></Footer></>
  )
}
export default app;
