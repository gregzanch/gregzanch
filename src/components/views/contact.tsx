import React from "react";
import ProfilePicture from '../../res/profile-circle.png';
import './contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faMediumM, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export interface ContactProps {

}

export default function Contact(props: ContactProps) {
	return (
    <div id="contact">
      <div className="contact-container">
        <div className="div1">
          <h3>Greg Zanchelli</h3>
          <span className="email-text">zanchelli.greg@gmail.com</span>
        </div>
        <div className="div2">
          <span className="contact-bio-text">
            Acoustical Engineer at University of Hartford. My research interests
            revolve around scientific computing, primarily computational
            acoustics.
          </span>
        </div>
        <div className="div3">
          <a
            href="mailto:zanchelli.greg@gmail.com"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </a>
          <a
            href="https://github.com/gregzanch"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
          <a
            href="https://medium.com/@zanchelli.greg"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMediumM} size="1x" />
          </a>
          <a
            href="https://www.linkedin.com/in/greg-zanchelli-40268a190/"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
          <a
            href="/contact"
            className="icon-link">
            <FontAwesomeIcon icon={faLink} size="1x" />
          </a>
        </div>
        <div className="div4">
          <img
            src={ProfilePicture}
            alt="profile-picture"
            className="contact-profile-picture"
          />
        </div>
      </div>
    </div>
  );
}
