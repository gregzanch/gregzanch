import React from 'react';
import { BrowserRouter as Router, Switch, Route,  NavLink, Redirect } from "react-router-dom";
// import background from './res/cold-leaves-background-blurred.png';
import {
	FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
  faDraftingCompass,
  faAddressBook,
	faHome,
	faBookmark
} from '@fortawesome/free-solid-svg-icons';
import Home from "./components/views/home";
import Contact from "./components/views/contact";
import Projects from "./components/views/projects";
import Posts from "./components/views/posts";
import ConnectIcons from './components/connect-icons/connect-icons';

import './App.css';


export interface AppProps{ }
export interface AppState{ }


class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = {};
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  render() {
    
    const iconSize = "1x";
    const HomeIcon = <FontAwesomeIcon icon={faHome} size={iconSize} />;
    const ProjectsIcon = <FontAwesomeIcon icon={faDraftingCompass} size={iconSize} />;
    const PostsIcon = <FontAwesomeIcon icon={faBookmark} size={iconSize} />;
    const ContactIcon = <FontAwesomeIcon icon={faAddressBook} size={iconSize} />;
		return (
      <Router>
        <div className="App">
          <div className="route-links">
            <NavLink
              exact
              to="/home"
              className="icon-link route-link"
              activeClassName="route-link-active">
              {HomeIcon}
              <div className="icon-link-text">Home</div>
            </NavLink>
            <NavLink
              exact
              to="/projects"
              className="icon-link route-link"
              activeClassName="route-link-active">
              {ProjectsIcon}
              <div className="icon-link-text">Projects</div>
            </NavLink>
            <NavLink
              exact
              to="/posts"
              className="icon-link route-link"
              activeClassName="route-link-active">
              {PostsIcon}
              <div className="icon-link-text">Posts</div>
            </NavLink>
            <NavLink
              exact
              to="/contact"
              className="icon-link route-link"
              activeClassName="route-link-active">
              {ContactIcon}
              <div className="icon-link-text">Contact</div>
            </NavLink>
          </div>

          <Switch>
            <div className="view-wrapper">
              <Redirect from="/" to="/home" />
              <Route exact path="/home">
                <Home />
                <ConnectIcons />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/projects">
                <Projects />
                <ConnectIcons />
              </Route>
              <Route exact path="/posts">
                <Posts />
                <ConnectIcons />
              </Route>
            </div>
          </Switch>
        </div>
      </Router>
    );
	}
}

export default App;
