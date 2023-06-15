import React from "react";
import './App.css';
import {Route,Routes} from "react-router-dom";
import Allpage from "./Allpage";
import Navbar from "./Navbar";
// import Home from "./Home";
import Home2 from "./Home2"
// import Single from "./Single";
import Info from "./Info";
function App() {
  return (
    <div className="App">
      <div className="head">
        <h1> <span className="bend">The</span>Siren</h1>
      </div>
      <Navbar />
      {/* <div className="navbar">
        <NavLink className="link" to="/Home2" style={({isActive})=>{return isActive?{color:"red"}:{color:"yellow"};}}>Home</NavLink>
        <NavLink className="link" to="/Bollywood" style={({isActive})=>{return isActive?{color:"red"}:{color:"yellow"};}}>Bollywood</NavLink>
        <NavLink className="link" to="/Technology" style={({isActive})=>{return isActive?{color:"red"}:{color:"yellow"};}}>Technology</NavLink>
        <NavLink className="link" to="/Hollywood" style={({isActive})=>{return isActive?{color:"red"}:{color:"yellow"};}}>Hollywood</NavLink>
        <NavLink className="link" to="/Fitness" style={({isActive})=>{return isActive?{color:"red"}:{color:"yellow"};}}>Fitness</NavLink>
        <NavLink className="link" to="/Food" style={({isActive})=>{return isActive?{color:"red"}:{color:"yellow"};}}>Food</NavLink>
      </div> */}
      <Routes>
        {/* <Route path="/Home" element={<Home />}/> */}
        <Route path="/Home" element={<Home2 />}/>
        <Route path="/:category" element={<Allpage />} />
        <Route path="/Info/:id" element={<Info/>} />
      </Routes>
    </div>
  );
}

export default App;
