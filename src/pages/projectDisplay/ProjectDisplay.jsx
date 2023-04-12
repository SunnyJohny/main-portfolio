import React from "react";
import { useParams } from "react-router-dom";
// import Notiflix from "notiflix";

import { featuredPortfolio } from "../../data";

import LinkIcon from "@mui/icons-material/Link";

import GitHubIcon from "@mui/icons-material/GitHub";

import "./projectDisplay.scss";
function ProjectDisplay({ project }) {
  const { id } = useParams();
  project = featuredPortfolio[id];
  const nothing = "";

  // const goToContact = () => {
  //   alert(
  //     "Please You will want to Contact me, if you need to access to my Github Repository Thank You."
  //   );
  // };

  return (
    <div className="projectDisplay">
      <div className="title">
        <h3 className="Line">{nothing}</h3>{" "}
        <h2 className="textTitle">My Projects</h2>
      </div>
      <div className="rowContainer">
        <div className="serviceContaer">
          <div className="iconContainer">
            <img src={project.img} alt="" />
          </div>

          <div className="serviceType">
            <h1>{project.title}</h1>
            <p className="para">{project.desc}</p>
          </div>
          <p className="tech">
            <b>Technologies:</b> {project.technologies}
          </p>
          <div className="Links">
            <a
              class="social-icon-link site"
              href={project.Link}
              target="_blank"
              rel="noreferrer"
              aria-label="Link"
            >
              <h3>
                Link:
                <LinkIcon />
              </h3>
            </a>
            <a
              // onClick={goToContact}
              class="social-icon-link github"
              href={project.GitHub}
              // href="/contact"
              
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <h3>
                GitHub:
                <GitHubIcon />
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
