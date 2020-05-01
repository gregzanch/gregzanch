import React from "react";
import Post from "../post/post";
import PROJECTS from '../../projects';
export interface ProjectsProps {

}

export default function Projects(props: ProjectsProps) {
	return (
    <div id="projects">
      {PROJECTS.map((post) => {
        return (
          <Post
            key={post.link}
            title={post.title}
            description={post.description}
            link={post.link}
            thumbnail={post.thumbnail}
          />
        );
      })}
    </div>
  );
}
