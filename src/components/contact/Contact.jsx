import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

import EmailIcon from "@mui/icons-material/Email";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import { useRef } from "react";

import "./contact.scss";

export default function Contact() {

  const form = useRef();
  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILSERICE_KEY,
        "template_2hgv8sp",
        form.current,
        "6UfHuLSCvF132R-1l"
      )
      .then(
        (result) => {
          form.current.reset();

          toast.success("Message Recieved Thanks");
        },
        (error) => {
          toast.error("Message Not Sent please try again");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="title">
       <div className="Line"></div> <h2 className="textTitle ">Contact Me</h2>
      </div>
      <div className="container" id="container">
        <div className="left">
          {/* <h4 className="inTouch">Get in touch</h4> */}

          <div className="socials">
            <PhoneEnabledIcon style={{ fontSize: "40px", color: "#1DFC5C" }} />
            <b>+2348030611606</b>
          </div>
          <a
            class="socials"
            href="mailto:johnsunday803@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <EmailIcon style={{ fontSize: "40px", color: "#1DFC5C" }} />
            <b>johnsunday803@gmail.com</b>
          </a>
          <a
            class="socials"
            href="https://www.linkedin.com/in/john-sunday-193b069b"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <LinkedInIcon style={{ fontSize: "40px", color: "#1DFC5C" }} />
            <b>https://www.linkedin.com/in/john-sunday-193b069b</b>
          </a>
        </div>
        <div className="right">
          <h4>Message Me</h4>
          <form onSubmit={handleSubmit} ref={form}>
            <input type="text" placeholder="Name" name="userName" required />
            <input type="text" placeholder="Email" name="userEmail" required />

            <textarea
              placeholder="Message"
              name="message"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit">Send</button>
            {/* <button className="hire" ><span >Hire me</span> </button> */}

           
          </form>
        </div>
      </div>
    </div>
  );
}
