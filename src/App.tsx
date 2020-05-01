import React from 'react';
import { BrowserRouter as Router, Switch, Route,  NavLink, Redirect } from "react-router-dom";
// import background from './res/cold-leaves-background-blurred.png';
import {
	FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	IconDefinition
} from '@fortawesome/free-brands-svg-icons'
import {
	faEnvelope,
	faArchive,
	// faGlobe,
	faUser,
	faHome,
	faBookmark
	// faFileAlt,
	// faLayerGroup
} from '@fortawesome/free-solid-svg-icons';
import Home from "./components/views/home";
import Contact from "./components/views/contact";
import Projects from "./components/views/projects";
import Posts from "./components/views/posts";

import './App.css';

interface IRouteLink {
	text: string;
	icon: IconDefinition;
}

function RouteLink(props: IRouteLink) {
	const to = "/" + props.text.toLowerCase();
	return (
		// <div className={containerClassName}>
			<NavLink
				exact to={to}
				className="icon-link route-link"
				activeClassName="route-link-active">
				<FontAwesomeIcon icon={props.icon} size="sm" />
				<div className="icon-link-text">{props.text}</div>
			</NavLink>
		// </div>
	);
}

export interface AppProps{ }
export interface AppState{ }


class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = {};
	}
	render() {
		return (
      <Router>
        <div className="App">
          <div className="route-links">
            <NavLink
              exact
              to="/home"
              className="icon-link route-link"
              activeClassName="route-link-active">
              <FontAwesomeIcon icon={faHome} size="sm" />
              <div className="icon-link-text">Home</div>
            </NavLink>
            <NavLink
              exact
              to="/projects"
              className="icon-link route-link"
              activeClassName="route-link-active">
              <FontAwesomeIcon icon={faArchive} size="sm" />
              <div className="icon-link-text">Projects</div>
            </NavLink>
            <NavLink
              exact
              to="/posts"
              className="icon-link route-link"
              activeClassName="route-link-active">
              <FontAwesomeIcon icon={faBookmark} size="sm" />
              <div className="icon-link-text">Posts</div>
            </NavLink>
            <NavLink
              exact
              to="/contact"
              className="icon-link route-link"
              activeClassName="route-link-active">
              <FontAwesomeIcon icon={faUser} size="sm" />
              <div className="icon-link-text">Contact</div>
            </NavLink>
          </div>
          <Switch>
            <div className="view-wrapper">
              <Redirect from="/" to="/home" />
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
              <Route exact path="/posts">
                <Posts />
              </Route>
            </div>
          </Switch>

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
              href="https://www.linkedin.com/in/greg-zanchelli-40268a190/"
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
          </div>
        </div>
      </Router>
    );
	}
}

export default App;
