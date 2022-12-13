import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ project,id }) {
  const navigate = useNavigate();
  return (
    
    <div className="item"
    project ={ project }
    onClick={() => {
           navigate("/projects/" + id);
         }}
   >
               <img
                 src={project.img}
                 alt=""
               />
               <h3>{project.title}</h3>
               
               
             </div> 
  );
}
 

export default ProjectItem;
