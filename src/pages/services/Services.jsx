import React from "react";
import "./services.scss";


import { servicesData } from "../../data";

function Services() {
  return (
    <div className="services">
     <div className="title"><div className="Line"></div> <h2 className="textTitle">My Services</h2></div>
      <div className="rowContainer">
        {servicesData.map((service) => (
          <div className="serviceContaer">
            <div className="iconContainer">
              <img src={service.img} alt="" />
            </div>

            <div className="serviceType">
              <h1>{service.title}</h1>
              <p className="para">
                {service.desc}
               

              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
