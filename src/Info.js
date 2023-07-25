import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import man from "./Mask Group 16.png"
import facebook from "./facebook.png"
import twitter from "./twitter.jpeg"
import youtube from "./youtube.png"
import instagram from "./instagram.jpeg"
import hand from "./rythm.svg"
import share from "./share.svg"
import back from "./backward-solid.svg"

function Info() {
  const niyaz = useLocation().state
  console.log("useLocation() : ",niyaz);
  const navigate = useNavigate();
  return (
    <div className="mainpage">
    <div className="info">
      <div className="sky">
      <div className="infoHead">
        <img src={man} alt="man" />
        <div className="headtitle">
          <h2>Niyaz Alam</h2>
          <p>11-06-2023 10 min read</p>
        </div>
      </div>
      <div className="socialMedia">
      <img src={facebook} alt="facebook" className="facebook" />
      <img src={twitter} alt="twitter" className="facebook"/>
      <img src={instagram} alt="instagram" className="facebook"/>
      <img src={youtube} alt="youtube" className="facebook"/>
      </div>
      </div>
    <img src={niyaz.urlToImage} alt="hello"/>
      <p className="infoTitle">{niyaz.title}</p>
      <p>{niyaz.id}</p>
      <p className="infodec">{niyaz.description}</p>
      <p className="infoname">{niyaz.author}</p>
      <p>{niyaz.name}</p> 
      <div className="share">
      <div className="hand">
        <img src={hand} alt="hand" />
        <p>9.3k</p>
      </div>
      <div className="hand">
        <img src={share} alt="share" />
        <p>Share this article</p>
      </div>
      </div>
      <div className="backBtn">
      <button className="backBtn2"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={back} alt="back" className="backImg" />
      </button>
      </div>
    </div>
    </div>
  );
}

export default Info;
