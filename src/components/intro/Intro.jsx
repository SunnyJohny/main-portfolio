import { init } from "ityped";
import { useEffect, useRef } from "react";
import {  NavLink } from "react-router-dom";

// import Ellipse  from "../assets/Ellipse 7.png"
// import john from "assets/john.png"
// import "./intro.scss";
import "./intro.scss";
const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["A Web Developer", "A Designer", "An App Developer"],
    });
  }, []);

  return (
    <div className="intro sections" id="intro">
      {/* <div className="bgimgContainer">
          <img src="assets/HomeBg.png"  alt="john" />
        </div> */}
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm </h2>
          <h1>John Sunday</h1>

          <h3 className="LineText">
            <span className="line"></span>
            <span ref={textRef}></span>
          </h3>

          <NavLink to="/contact" style={{ textDecoration:'none' }}>
            <button className="hire" ><span >Hire me</span> </button>
            
          </NavLink>
        </div>
      </div>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/johnEdited.png" alt="john" />
        </div>
      </div>
    </div>
  );
};
export default Intro;
