import React from 'react'
import { NavLink } from 'react-router-dom';
import "./App.css";
function Navbar() {
  return (
    <>
      <div className="Navbar">
        <NavLink
          to="/Home"
          id="myLinks"
          style={({ isActive }) => {
            return isActive
              ? { color: "green" }
              : { color: "blue" };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/Bollywood"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          {" "}
          Bollywood{" "}
        </NavLink>
        <NavLink
          to="/Technology"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          Technology
        </NavLink>
        <NavLink
          to="/Hollywood"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          Hollywood
        </NavLink>
        <NavLink
          to="/Fitness"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          Fitness
        </NavLink>
        <NavLink
          to="/Food"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          Food
        </NavLink>
      </div>
      <hr id='NavHr' />
    </>
  )
}

export default Navbar