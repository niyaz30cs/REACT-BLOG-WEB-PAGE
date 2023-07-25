import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink} from "react-router-dom";
import "./NavbarMenu.css";
// import Home2 from "./Home2";
// import Allpage from "./Allpage";
// import Info from "./Info";

function NavbarMenu() {
  // console.log("hello");
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar2">
        {/* <div>Niyaz</div> */}
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                // exact
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/bollywood"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Bollywood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/hollywood"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Hollywood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/technology"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Technology
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/fitness"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Fitness
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/food"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Food
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ?"fas fa-times" : "fas fa-bars"}></i> */}
            {click ?<FaTimes />:<FaBars />}
          </div>
        </div>
      </nav>
      {/* <Routes>
        <Route path="/Home" element={<Home2/>}/>
        <Route path="/:category" element={<Allpage/>} />
        <Route path="/Info/:id" element={<Info/>} />
      </Routes> */}
    </>
  );
}

export default NavbarMenu;
