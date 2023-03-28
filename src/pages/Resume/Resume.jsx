import React from "react";
import "./resume.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import SchoolIcon from "@material-ui/icons/School";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon  from '@mui/icons-material/Work';
// import WorkIcon from "@material-ui/icons/Work";
// import Resume from "@material-ui/icons/Resume";


function Resume() {
  return (
    <div className="resumeContainer">
     <div className="title"><div className="Line"></div> <h2 className="textTitle">My Resume</h2></div>
    
    <div className="experience">
      <VerticalTimeline lineColor=" rgba(0, 0, 0, 0.582)">
         <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="2010 - 2014"
          iconStyle={{ background: " rgba(0, 0, 0, 0.582)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Common Wealth Comprehensive College, Jos, Plateau State,Nigeria.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          West African Senior School Certificate Examination (WASSCE)
          </h4>
        
           <p>2000 - 2005</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="2007 - 2012"
          dateClassName={"dateClass" }
          iconStyle={{ background: " rgba(0, 0, 0, 0.582)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University Of Jos,Jos,Plateau State,Nigeria.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
          <p>2007 - 2012</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2018 - 2020"
          iconStyle={{ background: " rgba(0, 0, 0, 0.582)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            I.T Instructor - NYSC Foundation
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Oshogbo, Osun State, Nigeria.
          </h4>
          <p>Set up and manage all the I.T infrastructure and also Design all Websites.</p>
          <p>2013 - 2014</p>

        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2018 - 2020"
          iconStyle={{ background: " rgba(0, 0, 0, 0.582)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            House Of Freeda
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Owerri ,Imo State, Nigeria.
          </h4>
          <p>Ict Manager.</p>
          <p>2015 - 2018</p>

        </VerticalTimelineElement>


       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2018 - 2020"
          iconStyle={{ background: " rgba(0, 0, 0, 0.582)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          MTBXS SOLUTIONS LTD.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          ATB Stadium Wunti, Bauchi State.
          </h4>
          <p>Web Developer</p>
          <p>2018 - 2020</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2020 - present"
          iconStyle={{ background: " rgba(0, 0, 0, 0.582)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Developer - @Freelancing
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Direct Client
          </h4>
          <p>
           Develop Web Applications
          </p>
          <p>
          2020 - present
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </div>
  );
}

export default Resume;
