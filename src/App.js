import React from 'react'
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import AboutUs from './AboutUs'
function App() {

  const [State,changeState]=React.useState("Home");
  function handleClickHome(){
   if(State=="About Us"){
     changeState("Home");
   }
  }
   function handleClickAboutUs(){
     if(State=="Home"){
       changeState("About Us");
     }
   }


  return (
    <div>
      <Navbar State={State} handleClickHome={handleClickHome}  handleClickAboutUs={handleClickAboutUs} />
      {State === "Home" ? <Home /> : <AboutUs />}
    </div>
  );
}

export default App;
