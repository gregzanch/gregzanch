import React from "react";
import Card from "../card/card";

import "./post.css";

export interface PostProps {
  title?: string;
  thumbnail?: string;
  description?: string;
  link?: string;
}

export default function Post(props: PostProps) {
  return (
    <div className="post">
      <Card link={props.link}>
        <div className="post-content">
          <img className="post-img" src={props.thumbnail || ""} alt={props.title||""}/>
          <div className="post-title"><h3>{props.title || ""}</h3></div>
          <div className="post-description">{props.description || ""}</div>
        </div>
      </Card>
    </div>
  );
}
