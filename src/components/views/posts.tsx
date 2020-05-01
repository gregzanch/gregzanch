import React from "react";
import Post from "../post/post";
import POSTS from '../../posts';

export interface PostsProps {}

export default function Posts(props: PostsProps) {
	return <div id="posts">
		{POSTS.map(post => {
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
	</div>;
}
