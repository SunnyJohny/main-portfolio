import React from "react";

import "./skills.scss";

function Skills () {
   return (
       <div className="skillsContainer">
            <div className="title"><div className="Line"></div> <h2 className="textTitle">My Skills</h2></div>
             <div className="skillsBoxContainer">
           <div className="skill-box">
               <span className="title">HTML</span>
               <div className="skill-bar">
                   <span className="skill-per">
                       <b className="html">95%</b>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">CSS</span>
               <div className="skill-bar">
                   <span className="skill-per">
                       <b className="css">85%</b>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">JAVASCRIPT</span>
               <div className="skill-bar">
                   <span className="skill-per">
                       <b className="JS">80%</b>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">REACT JS</span>
               <div className="skill-bar">
                   <span className="skill-per">
                       <b className="react">85%</b>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">SCSS</span>
               <div className="skill-bar">
                   <span className="skill-per">
                       <b className="scss">80%</b>
                   </span>
               </div>
           </div>

           <div className="skill-box">
               <span className="title">MYSQL</span>
               <div className="skill-bar">
                   <span className="skill-per">
                       <b className="mysql">65%</b>
                   </span>
               </div>
           </div>

           <div className="skill-box">
               <span className="title">GOOGLE FIREBASE DATABASE/FIRESTORE</span>
               <div className="skill-bar">
                   <span className="skill-per">
                       <b className="firebase">80%</b>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">SQLITE</span>
               <div className="skill-bar">
                   <span className="skill-per">
                       <b className="sqlite">90%</b>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">JAVA</span>
               <div className="skill-bar">
                   <span className="skill-per">
                       <b className="java">70%</b>
                   </span>
               </div>
               
           </div>

           <div className="skill-box">
               <span className="title">MATERIAL UI & FIGMA DESIGNS</span>
               <div className="skill-bar">
                   <span className="skill-per">
                       <b className="figma">65%</b>
                   </span>
               </div>
               
           </div>
           <div className="skill-box">
               <span className="title">GIT AND GITHUB</span>
               <div className="skill-bar">
                   <span className="skill-per">
                       <b className="git">85%</b>
                   </span>
               </div>
               
           </div>
           </div>
       </div>
   )
}

export default Skills;