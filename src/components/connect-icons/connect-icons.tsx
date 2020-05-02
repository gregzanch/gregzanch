import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faMediumM, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './connect-icons.css';

export default function ConnectIcons() {
  return (
    <div className="connect">
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
    </div>
  );
}
