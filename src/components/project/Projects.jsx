import { useEffect, useState } from "react";


import "./projects.scss";
import {
  featuredPortfolio,
  
} from "../../data";
import ProjectItem from "../ProjectItem";

export default function Projects() {
  
  const [data, setData] = useState([]);
 
  useEffect(() => {
    
        setData(featuredPortfolio);
     
  }, []);

  return (
    <div className="portfolio" id="portfolio">
      <div className="title"><h3 className="Line">{}</h3> <h2 className="textTitle">My Projects</h2></div>
      
      <div className="container">
        {data.map((project, id) => {
          return (
          <ProjectItem id={id} project={project}  />
          );

})}

        
      </div>
    </div>
  );
}
